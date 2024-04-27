import throttle from 'lodash/throttle';

export const fixFullHeight = () => {
  const getFullHeight = () => {
    let vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  let fixHeight = throttle(getFullHeight, 300);

  fixHeight();

  window.addEventListener('resize', fixHeight);
};
