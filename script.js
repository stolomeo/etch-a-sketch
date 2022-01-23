const container = document.getElementById('container');

const title = document.createElement('h1')
title.textContent = "Etch-a-Sketch";
container.appendChild(title);

const sizeBtn = document.createElement('button');
sizeBtn.textContent = 'Change Size';
container.appendChild(sizeBtn);

const gridContainer = document.createElement('div')
container.appendChild(gridContainer).classList.add('grid-container');


function createGrid(rows, columns) {
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-columns',columns);
    for (let i = 0; i < rows * columns; i++) {
        let box = document.createElement('div');
        box.setAttribute('style', 'border: 1px solid black');
        gridContainer.appendChild(box).classList.add('box');
    }
    changeColor();
}

createGrid(16,16);

function changeColor() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', e => {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${red}, ${green}, ${blue})`;
        })
    })
}

sizeBtn.addEventListener('click', function changeSize() {
    newGridSize = prompt('Enter a number between 1 and 100');
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.remove();
    });
    if (newGridSize > 0 && newGridSize < 101) {
        createGrid(newGridSize,newGridSize);
    } else {
        createGrid(16,16);
        alert('ERROR: Not a number between 1 and 100');
    }
});