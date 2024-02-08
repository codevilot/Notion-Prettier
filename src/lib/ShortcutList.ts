import { getLanguage } from './getLanguage';

const textInfo = {
  'ko-KR': {
    title: 'Shortcut List',
    b: '굵은 글씨',
    i: '기울인 글씨',
    u: '밑줄 긋기',
    s: '취소선',
    l: '다크 모드',
    h: '마지막에 쓴 글자/배경색 적용',
    '1': '제목1 생성',
    '2': '제목2 생성',
    '3': '제목3 생성',
    '4': '할 일 목록 체크박스 생성',
    '5': '글머리 기호 목록 생성',
    '6': '숫자 매기기 목록 생성',
    '7': '토글 목록 생성',
    '8': '코드 블록 생성',
    '9': '새 페이지 생성 또는 해당 텍스트 블록을 페이지로 전환',
  },
  'en-US': {
    title: 'Shortcut List',
    b: 'to bold text.',
    i: 'to italicize text.',
    u: 'to underline text.',
    s: 'to strikethrough.',
    l: 'to switch on/off dark mode',
    h: 'to apply the last used text/highlight color.',
    '1': 'to create an H1 heading.',
    '2': 'to create an H2 heading.',
    '3': 'to create an H3 heading.',
    '4': 'to create a to-do checkbox.',
    '5': 'to create a bulleted list.',
    '6': 'to create a numbered list.',
    '7': 'to create a toggle list.',
    '8': 'to create a code block.',
    '9': 'to create a new page, or turn whatever you have on a line into a page.',
  },
};

export function createShortcutList() {
  let Shortcut: null | HTMLElement = null;
  const desc = textInfo[getLanguage()];
  const ctrl = navigator.platform.includes('Win') ? 'ctrl' : 'cmd';
  return {
    toggle: () => {
      if (!Shortcut) {
        const sidebar = document.querySelector('.notion-sidebar');
        Shortcut = document.createElement('div');
        Shortcut.classList.add('shortcut');
        sidebar?.append(Shortcut);
        Shortcut.innerHTML = `
        <div class="shortcut-title">${desc.title}</div>
        <div id="close-button">⨉</div>
        <div><code>${ctrl}</code> + <code>B</code> ${desc.b}</div>
        <div><code>${ctrl}</code> + <code>I</code> ${desc.i}</div>
        <div><code>${ctrl}</code> + <code>u</code> ${desc.u}</div>
        <div><code>${ctrl}</code> + <code>shift</code> + <code>S</code> ${desc.s}</div>
        <div><code>${ctrl}</code> + <code>shift</code> + <code>H</code> ${desc.h}</div>
        <div><code>${ctrl}</code> + <code>shift</code> + <code>L</code> ${desc.l}</div>
        <div><code>${ctrl}</code> + <code>shift</code> + <code>1</code> ${desc['1']}</div>
        <div><code>${ctrl}</code> + <code>shift</code> + <code>2</code> ${desc['2']}</div>
        <div><code>${ctrl}</code> + <code>shift</code> + <code>3</code> ${desc['3']}</div>
        <div><code>${ctrl}</code> + <code>shift</code> + <code>4</code> ${desc['4']}</div>
        <div><code>${ctrl}</code> + <code>shift</code> + <code>5</code> ${desc['5']}</div>
        <div><code>${ctrl}</code> + <code>shift</code> + <code>6</code> ${desc['6']}</div>
        <div><code>${ctrl}</code> + <code>shift</code> + <code>7</code> ${desc['7']}</div>
        <div><code>${ctrl}</code> + <code>shift</code> + <code>8</code> ${desc['8']}</div>
        <div><code>${ctrl}</code> + <code>shift</code> + <code>9</code> ${desc['9']}</div>
        `;
      } else {
        Shortcut.classList.toggle('close');
      }
    },
    close: () => {
      Shortcut?.classList.remove('close');
    },
  };
}
