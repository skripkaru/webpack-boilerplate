// Libs
import 'focus-visible';

// Utils
import { fixFullHeight } from '@scripts/utils/fixFullHeight';

// UI
import { initModal } from '@scripts/components/ui/modal';

// Components
import { initHeader } from '@scripts/components/header';

document.addEventListener('DOMContentLoaded', () => {
  fixFullHeight();
  initHeader();
  initModal();
});

// Debug
// MicroModal.show('modal-id');
// MicroModal.close('modal-id');
