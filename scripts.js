createSketch();
const drawDivs = document.querySelectorAll('.draw-px');
let isDrawn = false;

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
    this.style.backgroundColor = "grey";
}

function handleLeave() {
    this.style.backgroundColor = "white";
}

drawDivs.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
drawDivs.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

