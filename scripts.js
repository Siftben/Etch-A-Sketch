createSketch();
const drawDivs = document.querySelectorAll('.draw-px');
const colorPicker = document.getElementById("color-picker");
const drawButton = document.querySelector('.draw-btn');
const eraseButton = document.querySelector('.erase-btn');
const resetButton = document.querySelector('.reset-btn');
let colorDraw = "black";
let isPencil = true;

function createSketch () {
    const drawbg = document.querySelector('.draw-bg');

    for (let index = 0; index < 16; index++) {
        const makeDiv = document.createElement('div');
        drawbg.appendChild(makeDiv);
        makeDiv.classList.add('draw-flex');
    }

    const allFlex = document.querySelectorAll('.draw-flex')

    for (let index = 0; index < 16; index++) {

        for (let index = 0; index < 16; index++) {
            const makeDiv = document.createElement('div');
            allFlex[index].appendChild(makeDiv);
            makeDiv.classList.add('draw-px');
        }
    }
    
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
    console.log(colorDraw);
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

drawDivs.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
drawDivs.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
drawDivs.forEach(trigger => trigger.addEventListener('click', draw))

drawButton.addEventListener('click', handleDrawButton);
eraseButton.addEventListener('click', handleEraseButton);
resetButton.addEventListener("click", reset);
colorPicker.addEventListener("input", changeColor);
