import './font-loader';
import { campaignMonitorForm } from './subscribe';
import { activateModal } from './modal';
import './hamburger';
/**
 * Immediately invoked functions
 */
(() => {
  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');

  if (document.querySelector('.campaign-monitor')) {
    campaignMonitorForm();
  };

  if (document.querySelector('[data-modal-trigger]')) {
    activateModal();
  }
})();
