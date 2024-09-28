function discoBalls() {
    console.log("test");
    const img = document.createElement('img');
    img.src = chrome.runtime.getURL("icons/icon128.png");
    img.alt = "DISCO";
    img.style.width = "128px";
    img.style.length = "128px;"
    img.classList.add("disco-ball");
    document.body.appendChild(img);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    if (request.action == "discoBalls") {
        discoBalls();
    }
});