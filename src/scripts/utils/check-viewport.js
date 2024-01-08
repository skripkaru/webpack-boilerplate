export const isMobilePlus = (width = 768) => {
  const mediaQuery = window.matchMedia(`(min-width: ${width}px)`)

  const handleChange = (e) => e.matches

  mediaQuery.addListener(handleChange)

  return handleChange(mediaQuery)
}

export const isMobile = (width = 767) => {
  const mediaQuery = window.matchMedia(`(max-width: ${width}px)`)

  const handleChange = (e) => e.matches

  mediaQuery.addListener(handleChange)

  return handleChange(mediaQuery)
}

export const isTabletPlus = (width = 1200) => {
  const mediaQuery = window.matchMedia(`(min-width: ${width}px)`)

  const handleChange = (e) => e.matches

  mediaQuery.addListener(handleChange)

  return handleChange(mediaQuery)
}

export const isTablet = (width = 1199) => {
  const mediaQuery = window.matchMedia(`(max-width: ${width}px)`)

  const handleChange = (e) => e.matches

  mediaQuery.addListener(handleChange)

  return handleChange(mediaQuery)
}
