//PageAction�A�C�R����\��
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url.indexOf('plus.google') > 7) {
        chrome.pageAction.show(tabId);
    }
});
//PageAction���N���b�N������
chrome.pageAction.onClicked.addListener(function() {
   // chrome.tabs.executeScript(null, {code:"alert('pageAction clicked!')"});
});	
