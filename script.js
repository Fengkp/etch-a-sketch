/* 
Create 16x16 grid usings divs
to do that select the body then add new divs until we reach 16
everytime we hit 16 divs, make a new row and make another 16
divCount % 16 = 0
keep going until we've reached 16 x 16 divs
*/

let row = -1;
const body = document.querySelector('body');
const TOTAL_SQUARES = 16 * 16;
const gridContainer =  document.createElement('div');

gridContainer.classList.add('grid-container');
body.appendChild(gridContainer);


for (square = 0; square < TOTAL_SQUARES; square++) {
    if (square % 16 == 0)
        row++;
        
    const div = document.createElement('div');
    div.setAttribute('id', square);
    div.classList.add('square');
    div.classList.add(`row-${row}`);
    gridContainer.appendChild(div);
}