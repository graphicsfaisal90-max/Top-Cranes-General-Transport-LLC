import { useLocation } from 'react-router-dom'
import './BrandShowcase.css'

const brands = [
  { name: 'Tadano', src: '/tadano-logo-2048x426.webp' },
  { name: 'Liebherr', src: '/Liebherrr.webp?v=2' },
  { name: 'Sany', src: '/Sanyyyy.svg' },
  { name: 'XCMG', src: '/xcmg-logo.webp' },
  { name: 'JCB', src: '/JCB-Logo.webp' },
  { name: 'Grove', src: '/Grove-Logo.webp' },
]

export default function BrandShowcase() {
  const { pathname } = useLocation()

  if (pathname === '/') return null

  return (
    <section className="brand-showcase" aria-labelledby="brand-showcase-title">
      <div className="container">
        <div className="brand-showcase-heading">
          <span>Trusted Equipment Partners</span>
          <h2 id="brand-showcase-title">Top Equipment Brands We Have</h2>
        </div>
        <div className="brand-showcase-track">
          {brands.map((brand) => (
            <div className="brand-showcase-logo" key={brand.src}>
              <img src={brand.src} alt={`${brand.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
