import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

function scrollToTop() {
  const html = document.documentElement
  const previousBehavior = html.style.scrollBehavior

  // Override the global `scroll-behavior: smooth` so the new page
  // appears at the top immediately instead of animating from the old position.
  html.style.scrollBehavior = 'auto'
  window.scrollTo(0, 0)
  html.style.scrollBehavior = previousBehavior
}

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const target = document.querySelector(decodeURIComponent(hash))
      if (target) {
        target.scrollIntoView({ block: 'start' })
        return
      }
    }

    scrollToTop()
  }, [pathname, hash])

  return null
}
