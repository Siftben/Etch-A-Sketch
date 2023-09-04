let rowColumn;
let drawDivs;
createSketch(16);
const colorPicker = document.getElementById("color-picker");
const drawButton = document.querySelector('.draw-btn');
const eraseButton = document.querySelector('.erase-btn');
const resetButton = document.querySelector('.reset-btn');
const slider = document.querySelector('.px-slider');
const sliderText = document.querySelector('.slider-text');
let colorDraw = "black";
let isPencil = true;
slider.min = '1';

function createSketch (newRowColumn) {
    const drawbg = document.querySelector('.draw-bg');
    //Grab from drawbg css height and width pixel
    let flexWidth = 400 / newRowColumn * newRowColumn;
    let flexHeight = 400 / newRowColumn - 1;

    for (let index = 0; index < newRowColumn; index++) {
        const makeDiv = document.createElement('div');
        drawbg.appendChild(makeDiv);
        makeDiv.classList.add('draw-flex');
        makeDiv.style.height = flexHeight.toString() + "px";
        makeDiv.style.width = flexWidth.toString() + "px";
    }

    const allFlex = document.querySelectorAll('.draw-flex')

    for (let index = 0; index < newRowColumn; index++) {

        for (let index = 0; index < newRowColumn; index++) {
            const makeDiv = document.createElement('div');
            allFlex[index].appendChild(makeDiv);
            makeDiv.classList.add('draw-px');
        }
    }

    rowColumn = newRowColumn;
    drawDivs = document.querySelectorAll('.draw-px');

    //drawDivs.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
    drawDivs.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
    drawDivs.forEach(trigger => trigger.addEventListener('mouseenter', draw))
    
}

function deleteSketch() {
    const drawFlex = document.querySelectorAll('.draw-flex');

    for (let index = 0; index < rowColumn; index++) {
        drawFlex[index].remove();
    }

    createSketch(slider.value);
}

function handleEnter() {
    if(this.classList.contains('drawn')) return;
    
    this.style.backgroundColor = "grey";
}

function handleLeave() {
    if(this.classList.contains('drawn')) return;

    this.style.backgroundColor = "white";
}

function draw() {
    if(isPencil === true) {
        this.style.backgroundColor = colorDraw;
        this.classList.add('drawn');

    } else {
        this.style.backgroundColor = 'white';
        this.classList.remove('drawn');
    } 
}

function changeColor() {
    colorDraw = this.value;
}

function reset() {
    drawDivs.forEach(divs => {

        if(divs.classList.contains('drawn')){
            divs.classList.remove('drawn');
            divs.style.backgroundColor = "white";
        }
    });
}

function handleDrawButton() {
    eraseButton.style.backgroundColor = "white";
    drawButton.style.backgroundColor = "grey";
    isPencil = true;
}

function handleEraseButton(){
    eraseButton.style.backgroundColor = "grey";
    drawButton.style.backgroundColor = "white";
    isPencil = false;
}

function sliderChange() {
    sliderText.innerHTML = slider.value + "x" + slider.value;
}

function sliderResolution() {
    deleteSketch();
}

drawButton.addEventListener('click', handleDrawButton);
eraseButton.addEventListener('click', handleEraseButton);
resetButton.addEventListener("click", reset);
slider.addEventListener("mousemove", sliderChange);
slider.addEventListener("change", sliderResolution);
colorPicker.addEventListener("input", changeColor);
