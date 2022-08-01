function createGrid() {
    let row = -1;
    const body = document.querySelector('.grid-container');
    const TOTAL_SQUARES = 16 * 16;
    const gridContainer =  document.createElement('div');

    gridContainer.classList.add('grid');
    body.appendChild(gridContainer);

    for (column = 0; column < TOTAL_SQUARES; column++) {
        if (column % 16 == 0)
            row++;
            
        const div = document.createElement('div');
        setAttributes(div, column, 'grid-item', `row-${row}`);
        gridContainer.appendChild(div);
    }
}

function setAttributes(element, id, ...classes) {
    element.setAttribute('id', id);
    classes.forEach(cssClass => {
        element.classList.add(cssClass);
    })
}

function addButtonClick() {
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(gridItem => gridItem.addEventListener('click', (e) => {
        changeColor(e);
    }))
}


function changeColor(gridItem) {
    if (erasing == false)
        gridItem.target.style.backgroundColor = currentColor;
    else 
        gridItem.target.style.backgroundColor = 'white';
}   

function erase(button) {
    if (erasing == true) {
        erasing = false;
        button.target.style.backgroundColor = 'rgb(196, 196, 196)';
        button.target.style.color = 'rgb(58, 58, 58)';
        return;
    }
    erasing = true;
    button.target.style.backgroundColor = '#3A3A3A';
    button.target.style.color = 'white';
}

function acknowledgeClick(button) {
    button.target.style.backgroundColor = 'rgb(58, 58, 58)';
    button.target.style.color = 'white';
    setTimeout(() => {
        button.target.style.backgroundColor = 'rgb(196, 196, 196)';
        button.target.style.color = 'rgb(58, 58, 58)';
    }, '100');  
}

function clearAll() {
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(gridItem => gridItem.style.backgroundColor = 'white');
}



function updateCurrentColor(event) {
    currentColor = event.target.value;
}


function startup() {
    const buttons = document.querySelectorAll('.btn');
    const colorPicker = document.querySelector('#color');
    colorPicker.addEventListener('input', updateCurrentColor, false);

    buttons.forEach(btn => btn.addEventListener('click', (e) => {
        if (e.target.textContent === 'Eraser')
            erase(e);
        else if (e.target.textContent === 'Clear All') {
            clearAll();
            acknowledgeClick(e);
        }
        else if (e.target.textContent === 'Choose Color') {
            btn.addEventListener('input', watchColorPicker, false);
        }
    }));
    createGrid();
    addButtonClick();
}

let erasing = false;
let currentColor = 'rgb(58, 58, 58)';
startup();
