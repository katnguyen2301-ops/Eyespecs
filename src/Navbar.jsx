import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavDropdown from './NavDropdown'
import services from './data/services'
import aboutPages from './data/about'
import locations from './data/locations'
import logo from './assets/logo.png'

function Navbar() {
  const practice = locations.find((location) => location.slug === 'eyespecs-cbd')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
        <span className="navbar-brand-mark">
          <img src={logo} alt="" className="navbar-brand-logo" aria-hidden="true" />
          <span className="navbar-brand-text">EyeSpecs</span>
        </span>
      </Link>

      <button
        type="button"
        className="navbar-toggle"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={menuOpen ? 'navbar-menu navbar-menu-open' : 'navbar-menu'}>
        <ul className="navbar-links">
          <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <NavDropdown label="About" basePath="/about" items={aboutPages} onNavigate={() => setMenuOpen(false)} />
          <NavDropdown label="Services" basePath="/services" items={services} onNavigate={() => setMenuOpen(false)} />
          <li><NavLink to="/brands" onClick={() => setMenuOpen(false)}>Brands We Stock</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
        </ul>
        <div className="navbar-actions">
          <a className="btn btn-call" href={`tel:${practice.phone.replace(/\s+/g, '')}`}>
            Call Now
          </a>
          <a
            className="btn btn-book"
            href={`mailto:${practice.email}`}
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
