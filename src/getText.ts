import { format } from 'prettier';
import { parserErrorMessage, supportedParser } from './supportedParser';
import { getLanguage } from './lib/getLanguage';

type WebSelection = Selection & { baseNode: HTMLElement };

function makePrettier(selection: WebSelection) {
  const language = selection?.baseNode
    ?.closest('[role="figure"]')
    ?.querySelector('[role="button"]')
    ?.textContent as keyof typeof supportedParser;

  const { parser, plugins } = supportedParser?.[language];
  try {
    return format(String(selection), {
      parser: parser || 'babel',
      plugins: plugins || [],
    });
  } catch (error) {
    if (!parser && !plugins) alert(parserErrorMessage[getLanguage()]);
    else alert(error);
    return null;
  }
}
async function copyText(selection: WebSelection) {
  const textArr = makePrettier(selection);
  textArr &&
    document.execCommand(
      'insertText',
      false,
      textArr.replace(/\n{1,}/gi, '$&\n').trim()
    );
}
export function getSelectionText() {
  const selection = getSelection() as WebSelection;
  if (!selection) return;

  return copyText(selection);
}
