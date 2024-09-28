document.getElementById('start').addEventListener('click', function() {
    document.getElementById('discoMusic').play();
  });
  
  document.getElementById('stop').addEventListener('click', function() {
    document.getElementById('discoMusic').pause();
    document.getElementById('discoMusic').currentTime = 0; // Reset to start
  });


document.getElementById('test').addEventListener('click', () => {
    // Send a message to the content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "discoBalls" });
    });
});