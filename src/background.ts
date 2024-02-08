import { onlySupportedParser } from './lib/supportedParser';
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: 'Format code with prettier',
    id: 'Prettier',
    contexts: ['selection'],
  });
  onlySupportedParser.forEach(([key]) =>
    chrome.contextMenus.create({
      title: key || '',
      id: key || '',
      parentId: 'Prettier',
      contexts: ['all'],
    })
  );
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.sendMessage(tab?.id || 1, {
    parser: info.menuItemId,
    type: 'prettier',
  });
});
