import { format } from 'prettier';
import parserBabel from 'prettier/parser-babel';
import parserHtml from 'prettier/parser-HTML';
import parseryaml from 'prettier/parser-yaml';
function makePrettier(selection: Selection) {
  try {
    return format(String(selection), {
      parser: 'babel',
      plugins: [parserBabel, parserHtml, parseryaml],
    });
  } catch (error) {
    alert(error);
    return null;
  }
}
async function copyText(selection: Selection) {
  const textArr = makePrettier(selection);
  textArr &&
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
