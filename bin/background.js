(function () {
  var reg = /^https?:\/\/(?!api\.|developer\.|enterprise\.|gist\.|help\.|jobs\.|mac\.|mobile\.|octodex\.|shop\.|status)(\w+)\.github\.com\/([^#\/]+)?.*$/;

  chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
    if ("url" in info) {
      if (reg.test(info.url)) {
        chrome.pageAction.show(tab.id)
      }
      else {
        chrome.pageAction.hide(tab.id);
      }
    }
  });

  chrome.pageAction.onClicked.addListener(function (tab) {
    var newUrl = tab.url.replace(reg, "https://github.com/$1/$2");
    chrome.tabs.update(tab.id, {url: newUrl});
  });
})();
