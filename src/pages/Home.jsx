import FeaturedProjects from '../components/FeaturedProjects'
import HomeAboutPreview from '../components/HomeAboutPreview'
import HomeHero from '../components/HomeHero'
import HomeStatsBar from '../components/HomeStatsBar'
import IndustriesProjectsSection from '../components/IndustriesProjectsSection'
import ServicesPreview from '../components/ServicesPreview'
import WhyClientsChoose from '../components/WhyClientsChoose'

function Home() {
  return (
    <main className="overflow-hidden">
      <HomeHero />
      <HomeStatsBar />
      <HomeAboutPreview />
      <ServicesPreview />
      <WhyClientsChoose />
      <FeaturedProjects />
      <IndustriesProjectsSection />
    </main>
  )
}

export default Home
