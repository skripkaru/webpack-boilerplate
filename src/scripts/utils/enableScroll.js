export const enableScroll = () => {
  const body = document.body;
  const html = document.documentElement;
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = parseInt(body.dataset.position, 10);

  fixBlocks.forEach((el) => {
    el.style.paddingRight = null;
  });

  body.style.paddingRight = null;
  body.style.top = null;
  body.classList.remove('disable-scroll');
  html.style.scrollBehavior = 'auto';
  window.scroll({
    top: pagePosition,
    left: 0,
  });
  html.style.scrollBehavior = null;
  body.removeAttribute('data-position');
};
