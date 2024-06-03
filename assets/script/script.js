document.getElementById('highlightsContainer').addEventListener('mouseover', (e) => {
    const { clientX: x, clientY: y } = e
    const elementMouseIsOver = document.elementFromPoint(x, y);
    if (elementMouseIsOver.id == `highlightOneDiv`) {
        document.getElementById(`highlightOneImg`).style.visibility = `visible`;
    } else if (elementMouseIsOver.id == `highlightTwoDiv`) {
        document.getElementById(`highlightTwoImg`).style.visibility = `visible`;
    } else if (elementMouseIsOver.id == `highlightThreeDiv`) {
        document.getElementById(`highlightThreeImg`).style.visibility = `visible`;
    } else if (elementMouseIsOver.id == `highlightFourDiv`) {
        document.getElementById(`highlightFourImg`).style.visibility = `visible`;
    } else if (elementMouseIsOver.id == `highlightFiveDiv`) {
        document.getElementById(`highlightFiveImg`).style.visibility = `visible`;
    } else if (elementMouseIsOver.id == `highlightSixDiv`) {
        document.getElementById(`highlightSixImg`).style.visibility = `visible`;
    } else if (elementMouseIsOver.id == `highlightSevenDiv`) {
        document.getElementById(`highlightSevenImg`).style.visibility = `visible`;
    } else if (elementMouseIsOver.id == `highlightEightDiv`) {
        document.getElementById(`highlightEightImg`).style.visibility = `visible`;
    } else if (elementMouseIsOver.id == `highlightNineDiv`) {
        document.getElementById(`highlightNineImg`).style.visibility = `visible`;
    } else if (elementMouseIsOver.id == `highlightTenDiv`) {
        document.getElementById(`highlightTenImg`).style.visibility = `visible`;
    } else if (elementMouseIsOver.id == `highlightElevenDiv`) {
        document.getElementById(`highlightElevenImg`).style.visibility = `visible`;
    } else if (elementMouseIsOver.id == `highlightTwelveDiv`) {
        document.getElementById(`highlightTwelveImg`).style.visibility = `visible`;
    } else if (elementMouseIsOver.id == `highlightThirteenDiv`) {
        document.getElementById(`highlightThirteenImg`).style.visibility = `visible`;
    } else if (elementMouseIsOver.id == `highlightFourteenDiv`) {
        document.getElementById(`highlightFourteenImg`).style.visibility = `visible`;
    } else if (elementMouseIsOver.id == `highlightFifteenDiv`) {
        document.getElementById(`highlightFifteenImg`).style.visibility = `visible`;
    } else {
        const highlightsDiv = document.getElementsByClassName('allHighlightsImg');
        for (let i = 0; i < highlightsDiv.length; i++) {
            highlightsDiv[i].style.visibility = `hidden`;
        }
    }
})