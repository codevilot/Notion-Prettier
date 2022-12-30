import { getSelectionText } from './getText';
import { getShortcut } from './getShortcut';
const shortcut = getShortcut();
window.addEventListener('keydown', async ({ ctrlKey, metaKey, key }) => {
  if ((ctrlKey || metaKey) && (key === 's' || key === 'S')) {
    await getSelectionText();
  }
});

window.addEventListener('keyup', ({ altKey, shiftKey, key }) => {
  if (key === 'Escape') shortcut.classList.remove('open');
  if ((altKey && key === 'Shift') || (shiftKey && key === 'Alt'))
    shortcut.classList.toggle('open');
});

window.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target?.id) shortcut.classList.remove('open');
});
