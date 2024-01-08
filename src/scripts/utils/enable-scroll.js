import vars from '../vars'

export const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block')
  const pagePosition = parseInt(vars.bodyEl.dataset.position, 10)

  fixBlocks.forEach((el) => {
    el.style.paddingRight = null
  })

  vars.bodyEl.style.paddingRight = null
  vars.bodyEl.style.top = null
  vars.bodyEl.classList.remove('disable-scroll')
  vars.htmlEl.style.scrollBehavior = 'auto'
  window.scroll({
    top: pagePosition,
    left: 0
  })
  vars.htmlEl.style.scrollBehavior = null
  vars.bodyEl.removeAttribute('data-position')
}
