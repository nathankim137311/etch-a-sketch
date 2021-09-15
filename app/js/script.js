// variables 

const containerDiv = document.getElementById('container');
let gridCell = document.getElementById('grid-cell');
let grid = createGrid(16, 16); 

function createGrid (rows, columns) {
  for (let c = 0; c <= columns; c++) {
  let r = 1; 
  while (r < rows) {
    let cloneCell = gridCell.cloneNode();
    containerDiv.appendChild(cloneCell);  
    r++; 
  }
}
}


// event listeners 


// functions 
