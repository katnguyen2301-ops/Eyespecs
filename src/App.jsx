import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import LocationDetail from './pages/LocationDetail'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/services/*" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:slug" element={<LocationDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
