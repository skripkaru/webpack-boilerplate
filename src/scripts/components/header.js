import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setElementHeight } from '../utils/setElementHeight';

gsap.registerPlugin(ScrollTrigger);

export const initHeader = () => {
  const header = document.querySelector('.js-header');

  if (!header) return;

  setElementHeight(header, '--header-height');

  ScrollTrigger.create({
    trigger: header,
    start: 0,
    end: () => ScrollTrigger.maxScroll(window),
    toggleClass: 'is-fixed',
  });
};
