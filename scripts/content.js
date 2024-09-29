const imgWidth = 128;
const imgHeight = 128;
const ballWidthRange = 200;
const ballHeightRange = 250;
const audioFile = ["assets/dancing.mp3", "assets/disco.mp3", "assets/iwll.mp3", "assets/murder.mp3", 
                   "assets/sep.mp3", "assets/stayin.mp3", "assets/you.mp3"];
var discoActive = false;

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
    img.alt = "Disco Ball";
    img.style.width = `${imgWidth}px`;
    img.style.length = `${imgHeight}px`;
    img.style.position = "fixed";
    img.style.top = `${yoff - imgHeight / 2}px`;
    img.style.left = `${xoff - imgWidth / 2}px`;
    return img;
}

function createLights() {
    const gif = document.createElement('img');
    gif.classList.add("disco-lights");
    gif.src = chrome.runtime.getURL("icons/lights.gif");
    gif.alt = "Disco Lights";
    gif.style.width = `${window.innerWidth}px`;
    gif.style.height = `${window.innerHeight}px`;
    gif.style.position = "fixed";
    gif.style.top = 0;
    gif.style.left = 0;
    return gif;
}

function createAudio() {
    const aud = document.createElement('audio');
    aud.classList.add("disco-audio");
    aud.src = chrome.runtime.getURL(audioFile[getRandomInt(audioFile.length)]);
    aud.play();
    return aud;
}

function startDisco() {
    if (discoActive)
        return
    discoActive = true;
    const div = document.createElement('div');
    div.classList.add("disco-ball-container");
    let xoff = imgWidth / 2 + getRandomInt(ballWidthRange / 2);
    div.appendChild(createLights());
    div.appendChild(createAudio());
    while (xoff < window.innerWidth - imgWidth / 2) {
        let yoff = window.innerHeight / 2 - 3 * ballHeightRange / 4 + getRandomInt(ballHeightRange);
        div.appendChild(createLine(xoff, yoff));
        div.appendChild(createDiscoBall(xoff, yoff));
        xoff += imgWidth + getRandomInt(ballWidthRange - imgWidth);
    }
    document.body.appendChild(div);
}

function stopDisco() {
    if (!discoActive)
        return;
    discoActive = false;
    const divs = Array.from(document.getElementsByClassName("disco-ball-container"));
    for (let div of divs) {
        div.remove();
    }   
}

const submitButton = document.getElementById("Submit");
if (submitButton) {
    submitButton.addEventListener('click', () => {
        startDisco();
    });
}

document.addEventListener('keypress', (e) => {
    console.log(e);
    if (e.key == 'q') {
        stopDisco();
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action == "start") {
        startDisco();
    } else if (request.action == "stop") {
        stopDisco();
    }
});

