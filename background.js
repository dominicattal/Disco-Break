chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "startDisco") {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "startDisco"});
        });
    } else if (request.action === "stopDisco") {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "stopDisco"});
        });
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "openPopup") {
        chrome.action.openPopup();
    }
});

