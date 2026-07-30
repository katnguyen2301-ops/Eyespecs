import ServicesCarousel from '../ServicesCarousel'
import TeamCarousel from '../TeamCarousel'
import HomeFaq from '../HomeFaq'
import HealthFundsBanner from '../HealthFundsBanner'
import BrandsWeStock from '../BrandsWeStock'

function Home() {
  return (
    <>
      <div className="home-hero-spacer">
        <section className="home-hero">
          <div className="home-hero-media" aria-hidden="true" />
          <div className="home-hero-overlay" aria-hidden="true" />
          <div className="home-hero-content">
            <h1>Exceptional Eye Care for Every Vision</h1>
            <p className="home-hero-subtitle">Caring for Cabramatta Eyesight for Over 30 Years.</p>
          </div>
        </section>
      </div>
      <div className="home-services-reveal">
        <ServicesCarousel />
        <HealthFundsBanner />
      </div>
      <BrandsWeStock />
      <TeamCarousel />
      <HomeFaq />
    </>
  )
}

export default Home
