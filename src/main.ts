import { getSelectionText } from './getText';
import { getShortcut } from './getShortcut';
const shortcut = getShortcut();

window.addEventListener('keydown', ({ ctrlKey, key }) => {
  if (ctrlKey && key === 'Shift') getSelectionText();
});

window.addEventListener('keyup', ({ key }) => {
  if (key === 'Alt') shortcut.classList.toggle('open');
});
