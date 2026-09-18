import { useLocation } from 'react-router-dom'
import './BrandShowcase.css'

const brands = [
  '/Top%20Equipment%20brands%20we%20have/1-3-1%20(1).svg',
  '/Top%20Equipment%20brands%20we%20have/1-3-1.svg',
  '/Top%20Equipment%20brands%20we%20have/1-3-2.svg',
  '/Top%20Equipment%20brands%20we%20have/1-3-3.svg',
  '/Top%20Equipment%20brands%20we%20have/1-3-4.svg',
  '/Top%20Equipment%20brands%20we%20have/1-3-5.svg',
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
