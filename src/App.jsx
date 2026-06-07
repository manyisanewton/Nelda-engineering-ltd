import { Navigate, Route, Routes } from 'react-router-dom'
import GoogleAnalytics from './components/GoogleAnalytics'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Projects from './pages/Projects'
import Services from './pages/Services'

function App() {
  return (
    <>
      <GoogleAnalytics />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
