const imgWidth = 128;
const imgHeight = 128;
const ballWidthRange = 200;
const ballHeightRange = 350;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createLine(xoff, yoff) {
    // creates vertical line from top of screen to yoff
    const hrzline = document.createElement('div');
    hrzline.classList.add("vertical-line");
    hrzline.style.height = `${yoff}px`;
    hrzline.style.left = `${xoff}px`;
    return hrzline;
}

function createDiscoBall(xoff, yoff) {
    // creates disco ball images
    const img = document.createElement('img');
    img.classList.add("disco-ball");
    img.src = chrome.runtime.getURL("icons/icon128.png");
    img.alt = "DISCO";
    img.style.width = `${imgWidth}px`;
    img.style.length = `${imgHeight}px`;
    img.style.position = "fixed";
    img.style.top = `${yoff - imgHeight / 2}px`;
    img.style.left = `${xoff - imgWidth / 2}px`;
    return img;
}

function discoBalls() {
    const div = document.createElement('div');
    div.classList.add("disco-ball-container");
    let xoff = imgWidth / 2 + getRandomInt(ballWidthRange / 2);
    // getRandomInt(window.innerWidth - imgWidth)
    while (xoff < window.innerWidth - imgWidth / 2) {
        let yoff = window.innerHeight / 2 - ballHeightRange / 2 + getRandomInt(ballHeightRange);
        div.appendChild(createLine(xoff, yoff));
        div.appendChild(createDiscoBall(xoff, yoff));
        xoff += imgWidth + getRandomInt(ballWidthRange - imgWidth);
    }
    document.body.appendChild(div);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request);
    if (request.action == "discoBalls") {
        discoBalls();
    }
});