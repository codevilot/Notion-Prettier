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
  const textArr = makePrettier(selection);
  document.execCommand(
    'insertText',
    false,
    textArr.replace(/\n{1,}/gi, '$&\n').trim()
  );
}
export function getSelectionText() {
  const selection = getSelection();
  if (!selection) return;
  return copyText(selection);
}
