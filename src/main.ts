import { getSelectionText } from './getText';
import { getShortcut } from './getShortcut';
const shortcut = getShortcut();

window.addEventListener('keydown', ({ ctrlKey, key }) => {
  if (ctrlKey && key === 'Shift') getSelectionText();
});

window.addEventListener('keyup', ({ altKey, shiftKey, key }) => {
  if ((altKey && key === 'Shift') || (shiftKey && key === 'Alt'))
    shortcut.classList.toggle('open');
});

window.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (target?.id) shortcut.classList.remove('open');
});
