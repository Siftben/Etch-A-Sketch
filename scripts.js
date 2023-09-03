createSketch();
const drawDivs = document.querySelectorAll('.draw-px');
const colorPicker = document.getElementById("color-picker");
const resetButton = document.querySelector('.reset-btn');
let colorDraw;

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
    this.style.backgroundColor = colorDraw;
    this.classList.add('drawn');
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

drawDivs.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
drawDivs.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
drawDivs.forEach(trigger => trigger.addEventListener('click', draw))

resetButton.addEventListener("click", reset);
colorPicker.addEventListener("input", changeColor);
