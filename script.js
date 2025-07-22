// ポップアップが開いたら、この中の処理が自動で実行されます
window.onload = async () => {
  // 現在アクティブなタブの情報を取得します
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // 1. クリップボードにコピーするためのテキスト（Markdown形式）
  const markdownText = `[${tab.title}](${tab.url})`;

  // 2. テキストエリアに表示するためのテキスト
  const displayText = `【${tab.title}】\n${tab.url}`;

  // 上記2つの処理をそれぞれ実行します
  copyToClipboard(markdownText);
  writeAndSelect(displayText);
};

/**
 * テキストエリアにテキストを書き込み、全選択する関数
 * @param {string} text 表示したい文字列
 */
function writeAndSelect(text) {
  const textarea = document.getElementById("show");
  textarea.value = text;
  textarea.select();
}

/**
 * 指定されたテキストをクリップボードにコピーする関数
 * @param {string} text コピーしたい文字列
 */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      // コピーに成功した時の処理（コンソールにログを表示）
      console.log('クリップボードにコピーしました:', text);
    })
    .catch(err => {
      // コピーに失敗した時の処理
      console.error('コピーに失敗しました:', err);
    });
}
