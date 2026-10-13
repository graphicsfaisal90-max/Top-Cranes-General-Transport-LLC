import { readdir, readFile, writeFile, stat } from 'node:fs/promises'
import { join, extname } from 'node:path'

const srcRoots = ['src']
const exts = new Set(['.jsx','.js','.ts','.tsx','.css','.html'])

async function walk(dir, out=[]) {
  for (const e of await readdir(dir)) {
    const p = join(dir, e)
    const s = await stat(p)
    if (s.isDirectory()) await walk(p, out)
    else if (exts.has(extname(p).toLowerCase())) out.push(p)
  }
  return out
}

const files = (await Promise.all(srcRoots.map(d=>walk(d)))).flat()
let changed=0
for (const f of files) {
  let c = await readFile(f,'utf8')
  const orig = c
  c = c.replace(/\.(png|jpg|jpeg)(?=(\?|"|'))/gi, '.webp')
  c = c.replace(/\.(png|jpg|jpeg)(?=\))/gi, '.webp')
  if (c!==orig) { await writeFile(f,c,'utf8'); changed++; console.log(`updated ${f}`)}
}
console.log(`done ${changed} files`)

let html = await readFile('index.html','utf8').catch(()=>null)
if (html) {
  const orig = html
  html = html.replace(/\.(png|jpg|jpeg)(?=(\?|"|'))/gi, '.webp')
  html = html.replace(/\.(png|jpg|jpeg)(?=\))/gi, '.webp')
  if (html!==orig) { await writeFile('index.html', html,'utf8'); console.log('updated index.html')}
}
