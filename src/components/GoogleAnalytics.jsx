import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

let lastTrackedPage = `${window.location.pathname}${window.location.search}`

function GoogleAnalytics() {
  const location = useLocation()

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search}`

    // The config call in index.html records the initial page load.
    if (pagePath === lastTrackedPage || typeof window.gtag !== 'function') {
      return
    }

    lastTrackedPage = pagePath
    window.gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: pagePath,
      page_title: document.title,
    })
  }, [location.pathname, location.search])

  return null
}

export default GoogleAnalytics
