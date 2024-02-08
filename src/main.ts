import { getSelectionText } from './lib/getText';
import { createShortcutList } from './lib/ShortcutList';
const Shortcut = createShortcutList();

window.addEventListener('keydown', async ({ ctrlKey, metaKey, key }) => {
  if ((ctrlKey || metaKey) && (key === 's' || key === 'S')) {
    await getSelectionText();
  }
});

window.addEventListener('keyup', ({ altKey, shiftKey, key }) => {
  if (key === 'Escape') Shortcut.close();
  if ((altKey && key === 'Shift') || (shiftKey && key === 'Alt')) {
    Shortcut.toggle();
  }
});

window.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target?.id && target.id === 'close-button') Shortcut.close();
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'prettier') getSelectionText(request.parser);
});
