import macutecImg from './assets/macutec.webp'
import lacritecImg from './assets/lacritec.jpg'
import pradaImg from './assets/prada.jpg'
import armaniImg from './assets/armani.jpeg'
import orotonImg from './assets/oroton.webp'
import gucciImg from './assets/gucci.webp'
import raybanImg from './assets/rayban.webp'
import mauijimImg from './assets/mauijim.webp'
import guessImg from './assets/guess.jpg'

const eyewearBrands = [
  { name: 'Prada', image: pradaImg },
  { name: 'Armani', image: armaniImg },
  { name: 'Guess', image: guessImg },
  { name: 'Oroton', image: orotonImg },
  { name: 'Gucci', image: gucciImg },
  { name: 'Ray-Ban', image: raybanImg },
  { name: 'Maui Jim', image: mauijimImg },
]

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
        <div className="brands-logo-grid">
          {eyewearBrands.map((brand) => (
            <div key={brand.name} className="brands-logo-card">
              {brand.image ? (
                <img className="brands-logo-photo" src={brand.image} alt={brand.name} />
              ) : (
                <span className="brands-logo-name">{brand.name}</span>
              )}
            </div>
          ))}
          <div className="brands-logo-card brands-logo-card-placeholder">
            <span>More brands coming soon</span>
          </div>
        </div>
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
