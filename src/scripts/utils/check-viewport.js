export const isMobilePlus = (width = 768) => {
  const mediaQuery = window.matchMedia(`(min-width: ${width}px)`)

  const handleChange = (e) => e.matches

  mediaQuery.addEventListener('change', handleChange)

  return handleChange(mediaQuery)
}

export const isMobile = (width = 767) => {
  const mediaQuery = window.matchMedia(`(max-width: ${width}px)`)

  const handleChange = (e) => e.matches

  mediaQuery.addEventListener('change', handleChange)

  return handleChange(mediaQuery)
}

export const isDesktop = (width = 1280) => {
  const mediaQuery = window.matchMedia(`(min-width: ${width}px)`)

  const handleChange = (e) => e.matches

  mediaQuery.addEventListener('change', handleChange)

  return handleChange(mediaQuery)
}

export const isOnlyTablet = (minWidth = 768, maxWidth = 1279) => {
  const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px) and (max-width: ${maxWidth}px`)

  const handleChange = (e) => e.matches

  mediaQuery.addEventListener('change', handleChange)

  return handleChange(mediaQuery)
}

export const isTablet = (width = 1279) => {
  const mediaQuery = window.matchMedia(`(max-width: ${width}px)`)

  const handleChange = (e) => e.matches

  mediaQuery.addEventListener('change', handleChange)

  return handleChange(mediaQuery)
}
