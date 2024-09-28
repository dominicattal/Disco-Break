let discoMusic;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "startDisco") {
        var discoMusic = new Audio('assets/disco.mp3');
        discoMusic.play();
    } else if (request.action === "stopDisco") {
        if (discoMusic) {
            discoMusic.pause();
        }
    }})
