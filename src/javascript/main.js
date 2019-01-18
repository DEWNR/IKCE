import './font-loader';
import { campaignMonitorForm } from './subscribe';
/**
 * Immediately invoked functions
 */
(() => {
  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');
  campaignMonitorForm();
})();
