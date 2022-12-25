import { format } from 'prettier';
import parserBabel from 'prettier/parser-babel';
import parserHtml from 'prettier/parser-HTML';
import parseryaml from 'prettier/parser-yaml';
function makePrettier(selection: Selection) {
  return format(String(selection), {
    parser: 'babel',
    plugins: [parserBabel, parserHtml, parseryaml],
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
