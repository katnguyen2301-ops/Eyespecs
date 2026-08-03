import macutecImg from './assets/macutec.webp'
import lacritecImg from './assets/lacritec.jpg'

const eyewearBrands = ['Prada', 'Armani', 'Guess', 'Oroton', 'Gucci']

const vitaminBrands = [
  {
    name: 'Macutec',
    image: macutecImg,
    note: 'A once-daily supplement that supports macular health.',
  },
  {
    name: 'Lacritec',
    image: lacritecImg,
    note: 'A dietary supplement for relief from dry eyes, supporting the production of tear film.',
  },
]

function BrandsWeStock() {
  return (
    <section className="brands-section">
      <h1>Brands We Stock</h1>
      <p className="brands-section-subtitle">
        We carry a range of trusted eyewear and eye health brands, with new
        options added regularly.
      </p>

      <div className="brands-group">
        <h3>Eyewear & Sunglasses</h3>
        <ul className="brands-list">
          {eyewearBrands.map((brand) => (
            <li key={brand}>{brand}</li>
          ))}
          <li className="brands-list-placeholder">More brands coming soon</li>
        </ul>
      </div>

      <div className="brands-group">
        <h3>Vitamins & Eye Health Supplements</h3>
        <p>
          Alongside eyewear, we stock a range of eye health vitamins and
          supplements. Our optometrist can advise whether one of these may
          be suitable for you as part of your eye exam.
        </p>
        <div className="brands-vitamin-grid">
          {vitaminBrands.map((brand) => (
            <div key={brand.name} className="brands-vitamin-card">
              <img className="brands-vitamin-photo" src={brand.image} alt={brand.name} />
              <h4>{brand.name}</h4>
              <p>{brand.note}</p>
            </div>
          ))}
          <div className="brands-vitamin-card brands-vitamin-card-placeholder">
            <span>More brands coming soon</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandsWeStock

