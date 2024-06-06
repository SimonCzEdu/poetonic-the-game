function idUnderPointer(event) {
    const x = event.clientX;
    const y = event.clientY;
    const elementMouseIsOver = document.elementFromPoint(x, y).id;
    highlightOn(elementMouseIsOver)
}

function highlightOn(id) {
    document.getElementById(id).style.opacity = '1';
    console.log(id)
}

document.getElementById(`highlightOne`).addEventListener(`mouseover`, idUnderPointer);
document.getElementById(`highlightTwo`).addEventListener(`mouseover`, idUnderPointer);
document.getElementById(`highlightThree`).addEventListener(`mouseover`, idUnderPointer);
document.getElementById(`highlightFour`).addEventListener(`mouseover`, idUnderPointer);
document.getElementById(`highlightFive`).addEventListener(`mouseover`, idUnderPointer);
document.getElementById(`highlightSix`).addEventListener(`mouseover`, idUnderPointer);
document.getElementById(`highlightSeven`).addEventListener(`mouseover`, idUnderPointer);
document.getElementById(`highlightEight`).addEventListener(`mouseover`, idUnderPointer);
document.getElementById(`highlightNine`).addEventListener(`mouseover`, idUnderPointer);
document.getElementById(`highlightTen`).addEventListener(`mouseover`, idUnderPointer);
document.getElementById(`highlightEleven`).addEventListener(`mouseover`, idUnderPointer);
document.getElementById(`highlightTwelve`).addEventListener(`mouseover`, idUnderPointer);
document.getElementById(`highlightThirteen`).addEventListener(`mouseover`, idUnderPointer);
document.getElementById(`highlightFourteen`).addEventListener(`mouseover`, idUnderPointer);
document.getElementById(`highlightFifteen`).addEventListener(`mouseover`, idUnderPointer);