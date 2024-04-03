import vars from '../config/vars';

export const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${window.innerWidth - vars.bodyEl.offsetWidth}px`;

  vars.htmlEl.style.scrollBehavior = null;

  fixBlocks.forEach((el) => {
    el.style.paddingRight = paddingOffset;
  });

  vars.bodyEl.style.paddingRight = paddingOffset;
  vars.bodyEl.classList.add('disable-scroll');
  vars.bodyEl.dataset.position = pagePosition;
  vars.bodyEl.style.top = `-${pagePosition}px`;
};
