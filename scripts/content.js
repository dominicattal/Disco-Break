function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createLine(xoff, yoff) {
    // creates vertical line from top of screen to yoff
    const hrzline = document.createElement('div');
    hrzline.classList.add("vertical-line");
    hrzline.style.height = `${yoff}px`;
    hrzline.style.left = `${xoff + 64}px`;
    return hrzline;
}

function createDiscoBall(xoff, yoff) {
    // creates disco ball images
    const img = document.createElement('img');
    img.classList.add("disco-ball");
    img.src = chrome.runtime.getURL("icons/icon128.png");
    img.alt = "DISCO";
    img.style.width = "128px";
    img.style.length = "128px";
    img.style.position = "fixed";
    img.style.top = `${yoff}px`;
    img.style.left = `${xoff}px`;
    return img;
}

function discoBalls() {
    const div = document.createElement('div');
    div.classList.add("disco-ball-container");
    let xoff = getRandomInt(window.innerWidth);
    let yoff = getRandomInt(window.innerHeight);
    console.log(window.clientHeight);
    div.appendChild(createDiscoBall(xoff, yoff));
    div.appendChild(createLine(xoff, yoff));
    document.body.appendChild(div);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    if (request.action == "discoBalls") {
        discoBalls();
    }
});

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON' || event.target.type === 'submit') {
        chrome.runtime.sendMessage({action: 'openPopup'});
    }
});

