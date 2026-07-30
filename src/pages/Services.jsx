import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import ComprehensiveEyeExams from './services/ComprehensiveEyeExams'
import ChildrensEyeCare from './services/ChildrensEyeCare'
import ContactLensFittings from './services/ContactLensFittings'
import PrescriptionEyewear from './services/PrescriptionEyewear'
import GlaucomaScreening from './services/GlaucomaScreening'
import DryEyeTreatment from './services/DryEyeTreatment'
import DiabeticEyeExams from './services/DiabeticEyeExams'
import EmergencyEyeCare from './services/EmergencyEyeCare'
import serviceImages from '../data/serviceImages'

function ServiceLayout() {
  const location = useLocation()
  const slug = location.pathname.split('/').filter(Boolean).pop()
  const image = serviceImages[slug]

  return (
    <>
      {image && (
        <img
          className="service-hero-image"
          src={image}
          alt=""
          style={{ viewTransitionName: `service-image-${slug}` }}
        />
      )}
      <Outlet />
    </>
  )
}

function Services() {
  return (
    <section className="services">
      <Routes>
        <Route
          index
          element={<Navigate to="comprehensive-eye-exams" replace />}
        />
        <Route element={<ServiceLayout />}>
          <Route
            path="comprehensive-eye-exams"
            element={<ComprehensiveEyeExams />}
          />
          <Route
            path="childrens-eye-care"
            element={<ChildrensEyeCare />}
          />
          <Route
            path="contact-lens-fittings"
            element={<ContactLensFittings />}
          />
          <Route
            path="prescription-eyewear"
            element={<PrescriptionEyewear />}
          />
          <Route
            path="glaucoma-screening"
            element={<GlaucomaScreening />}
          />
          <Route
            path="dry-eye-treatment"
            element={<DryEyeTreatment />}
          />
          <Route
            path="diabetic-eye-exams"
            element={<DiabeticEyeExams />}
          />
          <Route
            path="emergency-eye-care"
            element={<EmergencyEyeCare />}
          />
        </Route>
      </Routes>
    </section>
  )
}

export default Services
