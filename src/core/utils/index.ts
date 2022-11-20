/**
 * core/utils
 * ----------------------------------------------------------------------
 * Core utility functions.
 *
 * @author      Fabio Y. Goto <lab@yuiti.dev>
 * @since       0.0.1
 */
import { DOCUMENT_READY_STATE } from '@/core/constants';

/**
 * Executes callback when document is ready.
 *
 * @param callback
 *     Callback to execute when document is ready.
 */
export function onDocumentReady(callback: (event: Event) => void) {
  if (DOCUMENT_READY_STATE.includes(document.readyState)) {
    setTimeout(callback, 1);
  } else {
    try {
      document.addEventListener('DOMContentLoaded', callback, false);
    } catch (e) {
      window.addEventListener('DOMContentLoaded', callback, false);
      console.groupCollapsed('[ON DOCUMENT READY]: Error');
      console.error(e);
      console.groupEnd();
    }
  }
}
