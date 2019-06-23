window.onload = function() {
  chrome.tabs.query({
    active: true,
    currentWindow: true,
    lastFocusedWindow: true // 現在のタブを取得
  }, function (tabs) {

    let currentTab = tabs[0];
    let copyText = '[' + currentTab.title + '](' + currentTab.url + ')';

    let textarea = document.querySelector("#show");
    textarea.textContent = copyText;
    textarea.select();
    document.execCommand('copy');
  });
}
