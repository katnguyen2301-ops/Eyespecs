const eyewearBrands = ['Prada', 'Armani', 'Guess', 'Oroton', 'Gucci']

const vitaminBrands = [
  { name: 'Macutec', note: 'A vitamin formulated to support macular health' },
  { name: 'Lacritex', note: 'An omega-3 supplement formulated to support dry eye comfort' },
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
        <ul className="brands-vitamin-list">
          {vitaminBrands.map((brand) => (
            <li key={brand.name}>
              <strong>{brand.name}</strong> — {brand.note}
            </li>
          ))}
          <li className="brands-list-placeholder">More brands coming soon</li>
        </ul>
      </div>
    </section>
  )
}

export default BrandsWeStock
