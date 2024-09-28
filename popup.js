document.getElementById('discoStart').addEventListener('click', function() {
    chrome.runtime.sendMessage({action: "startDisco"});
});

document.getElementById('discoStop').addEventListener('click', function() {
    chrome.runtime.sendMessage({action: "stopDisco"});
});
