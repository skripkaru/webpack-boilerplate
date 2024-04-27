export const setElementHeight = (selector, varName) => {
  const element = selector.offsetHeight;
  document.querySelector(':root').style.setProperty(varName, `${element}px`);
};
