import { format } from 'prettier';
import { parserErrorMessage, supportedParser } from './supportedParser';
import { getLanguage } from './getLanguage';

type WebSelection = Selection & { baseNode: HTMLElement };

function makePrettier(selection: WebSelection, forcedLanguage?: string) {
  const language =
    forcedLanguage ||
    selection?.baseNode?.parentElement
      ?.closest('[role="figure"]')
      ?.querySelector('[role="button"]')?.textContent;
  const { parser, plugins } =
    supportedParser?.[language as keyof typeof supportedParser];
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
export async function getSelectionText(language?: string) {
  const selection = getSelection() as WebSelection;
  if (!selection) return;
  const textArr = makePrettier(selection, language);
  return (
    textArr &&
    document.execCommand(
      'insertText',
      false,
      textArr.replace(/\n{1,}/gi, '$&\n').trim()
    )
  );
}
