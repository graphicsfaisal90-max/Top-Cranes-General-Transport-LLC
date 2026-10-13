import { readdir, stat } from 'node:fs/promises'
import { join, extname, basename, dirname, relative } from 'node:path'
import sharp from 'sharp'

const roots = ['public']
const exts = new Set(['.png', '.jpg', '.jpeg'])
const keepOriginals = new Set()

async function walk(dir, out) {
  out = out || []
  for (const e of await readdir(dir)) {
    const p = join(dir, e)
    const s = await stat(p)
    if (s.isDirectory()) await walk(p, out)
    else if (exts.has(extname(p).toLowerCase())) out.push(p)
  }
  return out
}

const files = (await Promise.all(roots.map(walk))).flat()
let done=0, skipped=0

for (const src of files) {
  const ext = extname(src)
  const base = basename(src, ext)
  const dir = dirname(src)
  const dest = join(dir, base + '.webp')
  try {
    const s = await stat(dest).catch(()=>null)
    if (s) { skipped++; continue }
    const inputExt = ext.toLowerCase()
    let pipeline = sharp(src, { failOn: 'none' })
    if (inputExt === '.png') pipeline = pipeline.webp({ quality: 82, effort: 4 })
    else pipeline = pipeline.webp({ quality: 78, effort: 4 })
    pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true })
    await pipeline.toFile(dest)
    done++
    console.log(`ok ${relative('.', src)} -> ${relative('.', dest)}`)
  } catch (e) {
    console.warn(`fail ${src}: ${e.message}`)
  }
}
console.log(`Done: ${done} converted, ${skipped} already existed`)
