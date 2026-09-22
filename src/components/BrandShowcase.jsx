import { useLocation } from 'react-router-dom'
import './BrandShowcase.css'

const brands = [
  '/tadano-logo-2048x426.png',
  '/Liebherrr.png?v=2',
  '/Sanyyyy.svg',
  '/xcmg-logo.png',
  '/JCB-Logo.png',
  '/Grove-Logo.png',
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
          {brands.map((brand, index) => (
            <div className="brand-showcase-logo" key={brand}>
              <img src={brand} alt={`Equipment brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
