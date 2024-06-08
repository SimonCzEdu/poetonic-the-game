let checksArray = [];

const highlightOne = document.getElementById(`highlightOneImg`);
const highlightTwo = document.getElementById(`highlightTwoImg`);
const highlightThree = document.getElementById(`highlightThreeImg`);
const highlightFour = document.getElementById(`highlightFourImg`);
const highlightFive = document.getElementById(`highlightFiveImg`);
const highlightSix = document.getElementById(`highlightSixImg`);
const highlightSeven = document.getElementById(`highlightSevenImg`);
const highlightEight = document.getElementById(`highlightEightImg`);
const highlightNine = document.getElementById(`highlightNineImg`);
const highlightTen = document.getElementById(`highlightTenImg`);
const highlightEleven = document.getElementById(`highlightElevenImg`);
const highlightTwelve = document.getElementById(`highlightTwelveImg`);
const highlightThirteen = document.getElementById(`highlightThirteenImg`);
const highlightFourteen = document.getElementById(`highlightFourteenImg`);
const highlightFifteen = document.getElementById(`highlightFifteenImg`);


// Pointer elements identification functions
/**
 * 
 */
function idUnderPointer(event) {
    const x = event.clientX;
    const y = event.clientY;
    const elementMouseIsOver = document.elementFromPoint(x, y).id;
    highlightOn(elementMouseIsOver)
}
/**
 * 
 */
function highlightOn(id) {
    document.getElementById(id).style.opacity = '1';
}


// Main highlights functions
/**
 * 
 */
function highlightOneOff() {
    function checkedOne() {
        document.getElementById('highlightOneCheck').checked = false;
    }
    if (document.getElementById('highlightOneCheck').checked == false) {
        highlightOne.style.opacity = '0'
    } else if (document.getElementById('highlightOneCheck').checked == true) {
        document.getElementById('partOne').style.visibility = 'visible';
        const paperSound = document.getElementById('paper')
        paperSound.loop = false;
        paperSound.play();
    }
    if (checksArray.includes('1') == false) {
        checksArray.push('1')
    }
    if (checksArray.length >= 12) {
        document.body.innerHTML = `
        <div id="hiddenDiv">
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=1" id="linkButtonOne" class="linkButtons"></a>
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=3" id="linkButtonTwo" class="linkButtons"></a>
            <img src="assets/image/Scene2/Background.jpg"
                alt="Welp, here should be a second screen with your links, but due to the fact I can't control your life... you are using a browser that can not display it. Use Chrome like everyone else.">
            <img src="assets/image/Scene2/Button1-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkOne" class="linkImg">
            <img src="assets/image/Scene2/Button2-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkTwo" class="linkImg">
        </div>
        `
    }
    highlightOne.addEventListener('click', checkedOne)
}
/**
 * 
 */
function highlightTwoOff() {
    function checkedTwo() {
        document.getElementById('highlightTwoCheck').checked = false;
    }
    if (document.getElementById('highlightTwoCheck').checked == false) {
        highlightTwo.style.opacity = '0'
    } else if (document.getElementById('highlightTwoCheck').checked == true) {
        document.getElementById('partTwo').style.visibility = 'visible';
        const paperSound = document.getElementById('paper')
        paperSound.loop = false;
        paperSound.play();
    }
    if (checksArray.includes('2') == false) {
        checksArray.push('2')
    }
    if (checksArray.length >= 12) {
        document.body.innerHTML = `
        <div id="hiddenDiv">
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=1" id="linkButtonOne" class="linkButtons"></a>
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=3" id="linkButtonTwo" class="linkButtons"></a>
            <img src="assets/image/Scene2/Background.jpg"
                alt="Welp, here should be a second screen with your links, but due to the fact I can't control your life... you are using a browser that can not display it. Use Chrome like everyone else.">
            <img src="assets/image/Scene2/Button1-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkOne" class="linkImg">
            <img src="assets/image/Scene2/Button2-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkTwo" class="linkImg">
        </div>
        `
    }

    highlightTwo.addEventListener('click', checkedTwo)
}
/**
 * 
 */
function highlightThreeOff() {
    function checkedThree() {
        document.getElementById('highlightThreeCheck').checked = false;
    }
    if (document.getElementById('highlightThreeCheck').checked == false) {
        highlightThree.style.opacity = '0'
    } else if (document.getElementById('highlightThreeCheck').checked == true) {
        document.getElementById('partThree').style.visibility = 'visible';
        const paperSound = document.getElementById('paper')
        paperSound.loop = false;
        paperSound.play();
    }
    if (checksArray.includes('3') == false) {
        checksArray.push('3')
    }
    if (checksArray.length >= 12) {
        document.body.innerHTML = `
        <div id="hiddenDiv">
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=1" id="linkButtonOne" class="linkButtons"></a>
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=3" id="linkButtonTwo" class="linkButtons"></a>
            <img src="assets/image/Scene2/Background.jpg"
                alt="Welp, here should be a second screen with your links, but due to the fact I can't control your life... you are using a browser that can not display it. Use Chrome like everyone else.">
            <img src="assets/image/Scene2/Button1-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkOne" class="linkImg">
            <img src="assets/image/Scene2/Button2-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkTwo" class="linkImg">
        </div>
        `
    }

    highlightThree.addEventListener('click', checkedThree)
}
/**
 * 
 */
function highlightFourOff() {
    function checkedFour() {
        document.getElementById('highlightFourCheck').checked = false;
    }
    if (document.getElementById('highlightFourCheck').checked == false) {
        highlightFour.style.opacity = '0'
    } else if (document.getElementById('highlightFourCheck').checked == true) {
        document.getElementById('partFour').style.visibility = 'visible';
        const eyeSound = document.getElementById('eye')
        eyeSound.loop = false;
        eyeSound.play();
    }
    if (checksArray.includes('4') == false) {
        checksArray.push('4')
    }
    if (checksArray.length >= 12) {
        document.body.innerHTML = `
        <div id="hiddenDiv">
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=1" id="linkButtonOne" class="linkButtons"></a>
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=3" id="linkButtonTwo" class="linkButtons"></a>
            <img src="assets/image/Scene2/Background.jpg"
                alt="Welp, here should be a second screen with your links, but due to the fact I can't control your life... you are using a browser that can not display it. Use Chrome like everyone else.">
            <img src="assets/image/Scene2/Button1-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkOne" class="linkImg">
            <img src="assets/image/Scene2/Button2-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkTwo" class="linkImg">
        </div>
        `
    }

    highlightFour.addEventListener('click', checkedFour)
}
/**
 * 
 */
function highlightFiveOff() {
    function checkedFive() {
        document.getElementById('highlightFiveCheck').checked = false;
    }
    if (document.getElementById('highlightFiveCheck').checked == false) {
        highlightFive.style.opacity = '0'
    } else if (document.getElementById('highlightFiveCheck').checked == true) {
        document.getElementById('partFive').style.visibility = 'visible';
        const stampSound = document.getElementById('stamp')
        stampSound.loop = false;
        stampSound.play();
    }
    if (checksArray.includes('5') == false) {
        checksArray.push('5')
    }
    if (checksArray.length >= 12) {
        document.body.innerHTML = `
        <div id="hiddenDiv">
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=1" id="linkButtonOne" class="linkButtons"></a>
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=3" id="linkButtonTwo" class="linkButtons"></a>
            <img src="assets/image/Scene2/Background.jpg"
                alt="Welp, here should be a second screen with your links, but due to the fact I can't control your life... you are using a browser that can not display it. Use Chrome like everyone else.">
            <img src="assets/image/Scene2/Button1-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkOne" class="linkImg">
            <img src="assets/image/Scene2/Button2-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkTwo" class="linkImg">
        </div>
        `
    }

    highlightFive.addEventListener('click', checkedFive)
}
/**
 * 
 */
function highlightSixOff() {
    function checkedSix() {
        document.getElementById('highlightSixCheck').checked = false;
    }
    if (document.getElementById('highlightSixCheck').checked == false) {
        highlightSix.style.opacity = '0'
    } else if (document.getElementById('highlightSixCheck').checked == true) {
        document.getElementById('partSix').style.visibility = 'visible';
        const stampSound = document.getElementById('stamp')
        stampSound.loop = false;
        stampSound.play();
    }
    if (checksArray.includes('6') == false) {
        checksArray.push('6')
    }
    if (checksArray.length >= 12) {
        document.body.innerHTML = `
        <div id="hiddenDiv">
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=1" id="linkButtonOne" class="linkButtons"></a>
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=3" id="linkButtonTwo" class="linkButtons"></a>
            <img src="assets/image/Scene2/Background.jpg"
                alt="Welp, here should be a second screen with your links, but due to the fact I can't control your life... you are using a browser that can not display it. Use Chrome like everyone else.">
            <img src="assets/image/Scene2/Button1-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkOne" class="linkImg">
            <img src="assets/image/Scene2/Button2-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkTwo" class="linkImg">
        </div>
        `
    }

    highlightSix.addEventListener('click', checkedSix)
}
/**
 * 
 */
function highlightSevenOff() {
    function checkedSeven() {
        document.getElementById('highlightSevenCheck').checked = false;
    }
    if (document.getElementById('highlightSevenCheck').checked == false) {
        highlightSeven.style.opacity = '0'
    } else if (document.getElementById('highlightSevenCheck').checked == true) {
        document.getElementById('partSeven').style.visibility = 'visible';
        const stampSound = document.getElementById('stamp')
        stampSound.loop = false;
        stampSound.play();
    }
    if (checksArray.includes('7') == false) {
        checksArray.push('7')
    }
    if (checksArray.length >= 12) {
        document.body.innerHTML = `
        <div id="hiddenDiv">
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=1" id="linkButtonOne" class="linkButtons"></a>
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=3" id="linkButtonTwo" class="linkButtons"></a>
            <img src="assets/image/Scene2/Background.jpg"
                alt="Welp, here should be a second screen with your links, but due to the fact I can't control your life... you are using a browser that can not display it. Use Chrome like everyone else.">
            <img src="assets/image/Scene2/Button1-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkOne" class="linkImg">
            <img src="assets/image/Scene2/Button2-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkTwo" class="linkImg">
        </div>
        `
    }

    highlightSeven.addEventListener('click', checkedSeven)
}
/**
 * 
 */
function highlightEightOff() {
    function checkedEight() {
        document.getElementById('highlightEightCheck').checked = false;
    }
    if (document.getElementById('highlightEightCheck').checked == false) {
        highlightEight.style.opacity = '0'
    } else if (document.getElementById('highlightEightCheck').checked == true) {
        document.getElementById('partEight').style.visibility = 'visible';
        const markerSound = document.getElementById('marker')
        markerSound.loop = false;
        markerSound.play();
    }
    if (checksArray.includes('8') == false) {
        checksArray.push('8')
    }
    if (checksArray.length >= 12) {
        document.body.innerHTML = `
        <div id="hiddenDiv">
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=1" id="linkButtonOne" class="linkButtons"></a>
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=3" id="linkButtonTwo" class="linkButtons"></a>
            <img src="assets/image/Scene2/Background.jpg"
                alt="Welp, here should be a second screen with your links, but due to the fact I can't control your life... you are using a browser that can not display it. Use Chrome like everyone else.">
            <img src="assets/image/Scene2/Button1-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkOne" class="linkImg">
            <img src="assets/image/Scene2/Button2-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkTwo" class="linkImg">
        </div>
        `
    }

    highlightEight.addEventListener('click', checkedEight)
}

function highlightNineOff() {
    function checkedNine() {
        document.getElementById('highlightNineCheck').checked = false;
    }
    if (document.getElementById('highlightNineCheck').checked == false) {
        highlightNine.style.opacity = '0'
    } else if (document.getElementById('highlightNineCheck').checked == true) {
        document.getElementById('partNine').style.visibility = 'visible';
        const markerSound = document.getElementById('marker')
        markerSound.loop = false;
        markerSound.play();
    }
    if (checksArray.includes('9') == false) {
        checksArray.push('9')
    }
    if (checksArray.length >= 12) {
        document.body.innerHTML = `
        <div id="hiddenDiv">
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=1" id="linkButtonOne" class="linkButtons"></a>
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=3" id="linkButtonTwo" class="linkButtons"></a>
            <img src="assets/image/Scene2/Background.jpg"
                alt="Welp, here should be a second screen with your links, but due to the fact I can't control your life... you are using a browser that can not display it. Use Chrome like everyone else.">
            <img src="assets/image/Scene2/Button1-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkOne" class="linkImg">
            <img src="assets/image/Scene2/Button2-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkTwo" class="linkImg">
        </div>
        `
    }

    highlightNine.addEventListener('click', checkedNine)
}
/**
 * 
 */
function highlightTenOff() {
    function checkedTen() {
        document.getElementById('highlightTenCheck').checked = false;
    }
    if (document.getElementById('highlightTenCheck').checked == false) {
        highlightTen.style.opacity = '0'
    } else if (document.getElementById('highlightTenCheck').checked == true) {
        document.getElementById('partTen').style.visibility = 'visible';
        const markerSound = document.getElementById('marker')
        markerSound.loop = false;
        markerSound.play();
    }
    if (checksArray.includes('10') == false) {
        checksArray.push('10')
    }
    if (checksArray.length >= 12) {
        document.body.innerHTML = `
        <div id="hiddenDiv">
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=1" id="linkButtonOne" class="linkButtons"></a>
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=3" id="linkButtonTwo" class="linkButtons"></a>
            <img src="assets/image/Scene2/Background.jpg"
                alt="Welp, here should be a second screen with your links, but due to the fact I can't control your life... you are using a browser that can not display it. Use Chrome like everyone else.">
            <img src="assets/image/Scene2/Button1-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkOne" class="linkImg">
            <img src="assets/image/Scene2/Button2-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkTwo" class="linkImg">
        </div>
        `
    }

    highlightTen.addEventListener('click', checkedTen)
}
/**
 * 
 */
function highlightElevenOff() {
    function checkedEleven() {
        document.getElementById('highlightOneCheck').checked = false;
    }
    if (document.getElementById('highlightElevenCheck').checked == false) {
        highlightEleven.style.opacity = '0'
    } else if (document.getElementById('highlightElevenCheck').checked == true) {
        document.getElementById('partEleven').style.visibility = 'visible';
        const stampSound = document.getElementById('stamp')
        stampSound.loop = false;
        stampSound.play();
    }
    if (checksArray.includes('11') == false) {
        checksArray.push('11')
    }
    if (checksArray.length >= 12) {
        document.body.innerHTML = `
        <div id="hiddenDiv">
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=1" id="linkButtonOne" class="linkButtons"></a>
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=3" id="linkButtonTwo" class="linkButtons"></a>
            <img src="assets/image/Scene2/Background.jpg"
                alt="Welp, here should be a second screen with your links, but due to the fact I can't control your life... you are using a browser that can not display it. Use Chrome like everyone else.">
            <img src="assets/image/Scene2/Button1-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkOne" class="linkImg">
            <img src="assets/image/Scene2/Button2-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkTwo" class="linkImg">
        </div>
        `
    }

    highlightEleven.addEventListener('click', checkedEleven)
}
/**
 * 
 */
function highlightTwelveOff() {
    function checkedTwelve() {
        document.getElementById('highlightTwelveCheck').checked = false;
    }
    if (document.getElementById('highlightTwelveCheck').checked == false) {
        highlightTwelve.style.opacity = '0'
    } else if (document.getElementById('highlightTwelveCheck').checked == true) {
        document.getElementById('partTwelve').style.visibility = 'visible';
        document.getElementById('partThirteen').style.visibility = 'visible';
        const stapleSound = document.getElementById('staple')
        stapleSound.loop = false;
        stapleSound.play();
    }
    if (checksArray.includes('12') == false) {
        checksArray.push('12')
    }
    if (checksArray.length >= 12) {
        document.body.innerHTML = `
        <div id="hiddenDiv">
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=1" id="linkButtonOne" class="linkButtons"></a>
            <a href="https://pay.nmkr.io/?p=d28f414c03b749669d0a591a996d769c&c=3" id="linkButtonTwo" class="linkButtons"></a>
            <img src="assets/image/Scene2/Background.jpg"
                alt="Welp, here should be a second screen with your links, but due to the fact I can't control your life... you are using a browser that can not display it. Use Chrome like everyone else.">
            <img src="assets/image/Scene2/Button1-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkOne" class="linkImg">
            <img src="assets/image/Scene2/Button2-Fix.png" alt="No picture? Well, use chrome or similar browser."
                id="linkTwo" class="linkImg">
        </div>
        `
    }

    highlightTwelve.addEventListener('click', checkedTwelve)
}
/**
 * 
 */
function highlightThirteenOff() {
    function checkedThirteen() {
        document.getElementById('highlightThirteenCheck').checked = false;
    }
    if (document.getElementById('highlightThirteenCheck').checked == false) {
        highlightThirteen.style.opacity = '0'
    } else if (document.getElementById('highlightThirteenCheck').checked == true) {
        const rollerSound = document.getElementById('roller')
        rollerSound.loop = false;
        rollerSound.play();
    }

    highlightThirteen.addEventListener('click', checkedThirteen)
}
/**
 * 
 */
function highlightFourteenOff() {
    function checkedFourteen() {
        document.getElementById('highlightFourteenCheck').checked = false;
    }
    if (document.getElementById('highlightFourteenCheck').checked == false) {
        highlightFourteen.style.opacity = '0'
    } else if (document.getElementById('highlightFourteenCheck').checked == true) {
        const waterSound = document.getElementById('water')
        waterSound.loop = false;
        waterSound.play();
    }

    highlightFourteen.addEventListener('click', checkedFourteen)
}
/**
 * 
 */
function highlightFifteenOff() {
    function checkedFifteen() {
        document.getElementById('highlightFifteenCheck').checked = false;
    }
    if (document.getElementById('highlightFifteenCheck').checked == false) {
        highlightFifteen.style.opacity = '0'
    } else if (document.getElementById('highlightFifteenCheck').checked == true) {
        const scissorsSound = document.getElementById('scissors')
        scissorsSound.loop = false;
        scissorsSound.play();
    }

    highlightFifteen.addEventListener('click', checkedFifteen)
}

// Event listeners

highlightOne.addEventListener(`mouseover`, idUnderPointer);
highlightTwo.addEventListener(`mouseover`, idUnderPointer);
highlightThree.addEventListener(`mouseover`, idUnderPointer);
highlightFour.addEventListener(`mouseover`, idUnderPointer);
highlightFive.addEventListener(`mouseover`, idUnderPointer);
highlightSix.addEventListener(`mouseover`, idUnderPointer);
highlightSeven.addEventListener(`mouseover`, idUnderPointer);
highlightEight.addEventListener(`mouseover`, idUnderPointer);
highlightNine.addEventListener(`mouseover`, idUnderPointer);
highlightTen.addEventListener(`mouseover`, idUnderPointer);
highlightEleven.addEventListener(`mouseover`, idUnderPointer);
highlightTwelve.addEventListener(`mouseover`, idUnderPointer);
highlightThirteen.addEventListener(`mouseover`, idUnderPointer);
highlightFourteen.addEventListener(`mouseover`, idUnderPointer);
highlightFifteen.addEventListener(`mouseover`, idUnderPointer);

highlightOne.addEventListener(`mouseout`, highlightOneOff);
highlightTwo.addEventListener(`mouseout`, highlightTwoOff);
highlightThree.addEventListener(`mouseout`, highlightThreeOff);
highlightFour.addEventListener(`mouseout`, highlightFourOff);
highlightFive.addEventListener(`mouseout`, highlightFiveOff);
highlightSix.addEventListener(`mouseout`, highlightSixOff);
highlightSeven.addEventListener(`mouseout`, highlightSevenOff);
highlightEight.addEventListener(`mouseout`, highlightEightOff);
highlightNine.addEventListener(`mouseout`, highlightNineOff);
highlightTen.addEventListener(`mouseout`, highlightTenOff);
highlightEleven.addEventListener(`mouseout`, highlightElevenOff);
highlightTwelve.addEventListener(`mouseout`, highlightTwelveOff);
highlightThirteen.addEventListener(`mouseout`, highlightThirteenOff);
highlightFourteen.addEventListener(`mouseout`, highlightFourteenOff);
highlightFifteen.addEventListener(`mouseout`, highlightFifteenOff);