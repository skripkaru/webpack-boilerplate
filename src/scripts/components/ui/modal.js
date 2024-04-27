import MicroModal from 'micromodal';
import { disableScroll } from '@scripts/utils/disableScroll';
import { enableScroll } from '@scripts/utils/enableScroll';

export const initModal = () => {
  MicroModal.init({
    disableScroll: true,
    disableFocus: true,
    awaitCloseAnimation: true,
    onShow: () => {
      disableScroll();
    },
    onClose: () => {
      enableScroll();
    },
  });
};
