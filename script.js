window.onload = function () {
  chrome.tabs.query({
    active: true,
    currentWindow: true,
    lastFocusedWindow: true // 現在のタブを取得
  }, function (tabs) {

    let currentTab = tabs[0];
    copy('[' + currentTab.title + '](' + currentTab.url + ')');
    writeAndSelect('【' + currentTab.title + "】\n" + currentTab.url);
  });
}

function writeAndSelect(copyText) {
  let textarea = document.querySelector("#show");
  textarea.textContent = copyText;
  textarea.select();
}

function copy(copyText) {
  writeAndSelect(copyText);
  document.execCommand('copy');
}
