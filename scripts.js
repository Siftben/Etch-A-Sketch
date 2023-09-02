createSketch();
const drawDivs = document.querySelectorAll('.draw-px');

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
    this.style.backgroundColor = "black";
    this.classList.add('drawn');
}

drawDivs.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
drawDivs.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
drawDivs.forEach(trigger => trigger.addEventListener('click', draw))

