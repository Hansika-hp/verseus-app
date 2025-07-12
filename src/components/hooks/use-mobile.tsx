import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Initialize with a default value based on window width if available
  // This prevents the initial undefined state that's causing the error
  const [isMobile, setIsMobile] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT
    }
    return false // Default to desktop view if window is not available
  })

  React.useEffect(() => {
    // Make sure we're in a browser environment
    if (typeof window === 'undefined') return

    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Set initial value
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Use the appropriate event listener method
    mql.addEventListener("change", onChange)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return isMobile
}
