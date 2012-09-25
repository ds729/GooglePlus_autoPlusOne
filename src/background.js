//PageActionアイコンを表示
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url.indexOf('plus.google') > 7) {
        chrome.pageAction.show(tabId);
    }
});
//PageActionをクリックした時
chrome.pageAction.onClicked.addListener(function() {
   // chrome.tabs.executeScript(null, {code:"alert('pageAction clicked!')"});
});	
