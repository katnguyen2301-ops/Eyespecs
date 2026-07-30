import { Navigate, Route, Routes } from 'react-router-dom'
import WelcomeToThePractice from './about/WelcomeToThePractice'
import OurPhilosophy from './about/OurPhilosophy'
import MeetTheTeam from './about/MeetTheTeam'
import OurPractice from './about/OurPractice'

function About() {
  return (
    <section className="about">
      <Routes>
        <Route index element={<Navigate to="welcome-to-the-practice" replace />} />
        <Route path="welcome-to-the-practice" element={<WelcomeToThePractice />} />
        <Route path="our-philosophy" element={<OurPhilosophy />} />
        <Route path="meet-the-team" element={<MeetTheTeam />} />
        <Route path="our-practice" element={<OurPractice />} />
      </Routes>
    </section>
  )
}

export default About
