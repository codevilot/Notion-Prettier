import { getSelectionText } from './getText';
import { createShortcutList } from './ShortcutList';
const Shortcut = createShortcutList();
window.addEventListener('keydown', async ({ ctrlKey, metaKey, key }) => {
  if ((ctrlKey || metaKey) && (key === 's' || key === 'S')) {
    await getSelectionText();
  }
});

window.addEventListener('keyup', ({ altKey, shiftKey, key }) => {
  if ((altKey && key === 'Shift') || (shiftKey && key === 'Alt')) {
    Shortcut.toggle();
  }
});

window.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target?.id && target.id === 'close-button') Shortcut.toggle();
});
