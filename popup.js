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


document.addEventListener('DOMContentLoaded', function() {
  const audio = new Audio(chrome.runtime.getURL('assets/disco.mp3'));
  audio.play();

  const stopButton = document.getElementById('stopAudio');
  if (stopButton) {
      stopButton.addEventListener('click', function() {
          audio.pause();
          audio.currentTime = 0;
      });
  } else {
      console.error('Stop button not found');
  }
});
