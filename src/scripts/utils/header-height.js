import vars from '../config/vars';

export const getHeaderHeight = () => {
  const headerHeight = vars.header.offsetHeight;
  vars.root.style.setProperty('--header-height', `${headerHeight}px`);
};
