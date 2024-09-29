document.getElementById('start').addEventListener('click', function() {
    document.getElementById('discoMusic').play();
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "start" });
    });
});
  
document.getElementById('stop').addEventListener('click', function() {
    document.getElementById('discoMusic').pause();
    document.getElementById('discoMusic').currentTime = 0; // Reset to start
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "stop" });
    });
});

