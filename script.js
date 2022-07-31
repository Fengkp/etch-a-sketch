/* 
Create 16x16 grid usings divs
to do that select the body then add new divs until we reach 16
everytime we hit 16 divs, make a new row and make another 16
divCount % 16 = 0
keep going until we've reached 16 x 16 divs
*/
function createGrid() {
    let row = -1;
    const body = document.querySelector('.content');
    const TOTAL_SQUARES = 16 * 16;
    const gridContainer =  document.createElement('div');

    gridContainer.classList.add('grid-container');
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

function addHover() {
    const gridItems = document.querySelectorAll('.grid-item');
    
    gridItems.forEach(gridItem => gridItem.addEventListener('mouseover', (e) => {
        changeColor(e);
    }))
}

function changeColor(gridItem) {
    gridItem.target.style.backgroundColor = 'black';
}

createGrid();
addHover();
