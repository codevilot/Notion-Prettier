import { getSelectionText } from './getText';

window.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'Shift') getSelectionText();
  console.log(1);
});
