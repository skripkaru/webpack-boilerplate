export const disableScroll = () => {
  const body = document.body;
  const html = document.documentElement;
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${window.innerWidth - body.offsetWidth}px`;

  html.style.scrollBehavior = null;

  fixBlocks.forEach((el) => {
    el.style.paddingRight = paddingOffset;
  });

  body.style.paddingRight = paddingOffset;
  body.classList.add('disable-scroll');
  body.dataset.position = pagePosition;
  body.style.top = `-${pagePosition}px`;
};
