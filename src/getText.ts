import { format } from 'prettier';
import parserBabel from 'prettier/parser-babel';

function makePrettier(selection: Selection) {
  return format(String(selection), {
    parser: 'babel',
    plugins: [parserBabel],
  });
}
async function copyText(selection: Selection) {
  const text = makePrettier(selection);
  await navigator.clipboard.writeText(text);
}
export function getSelectionText() {
  const selection = getSelection();
  if (!selection) return;
  copyText(selection);
  return;
}
