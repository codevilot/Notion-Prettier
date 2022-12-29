export function getShortcut() {
  const shortcut = document.createElement('div');

  shortcut.classList.add('notion-prettier-shortcut');
  document.body.append(shortcut);
  shortcut.innerHTML = `
  <h2>Notion 단축키모음</h2>
  <div id="close-shortcut">⨉</div>
  <div><code>**</code>텍스트 굵게</div>
  <div><code>*</code>기울임꼴</div>
  <div><code>\`\`\`</code>인라인 코드</div>
  <div><code>~</code>취소선</div>
  <div><code>*</code><code>-</code><code>+</code> 다음에 <code>space</code>글머리 기호 목록</div>
  <div><code>[]</code>다음<code>space</code>체크박스</div>
  <div><code>1</code><code>a</code><code>i</code>다음<code>space</code>번호 매기기 목록</div>
  <div><code>#</code>다음<code>space</code>제목1</div>
  <div><code>##</code>다음<code>space</code>제목2</div>
  <div><code>###</code>다음<code>space</code>제목3</div>
  <div><code>&#62;</code>다음<code>space</code>토글 목록</div>
  <div><code>"</code>다음<code>space</code>인용 블록</div>
  `;
  return shortcut;
}
