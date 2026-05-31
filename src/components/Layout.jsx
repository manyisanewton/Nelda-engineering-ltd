import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <div className="min-h-screen bg-white text-[var(--color-text)]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
