console.log('hello everybody');

// variables 
const resetBtn = document.getElementById('reset'); 
const containerDiv = document.getElementById('container');
const grid = document.getElementsByClassName('grid'); 
let nodes = containerDiv.childNodes; 

// event listeners 
resetBtn.addEventListener('click', () => {
  let gridDimensions = prompt('Select Width/Height (squares)', '0'); 
  let squares = parseInt(gridDimensions); 
  if (gridDimensions === '' || gridDimensions === null || gridDimensions == 0) {
    alert('ERROR'); 
  } else if (0 < squares && squares < 100) {
    clearGrid(containerDiv);
    createGrid(squares); 
  } else {
    alert('that\'s way too many, try again'); 
  }
});

// functions 
const clearGrid = (parent) => {
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild); 
  }
}

function createGrid (squares) {
  let gridTemplateColumns = 'repeat('+squares+', 1fr)'
  containerDiv.style.gridTemplateColumns = gridTemplateColumns; 
  containerDiv.style.gridTemplateRows = gridTemplateColumns; 
  let i = 1;
  while (i <= Math.pow(squares, 2)) {
    let square = containerDiv.appendChild(document.createElement('div'));
    square.className += 'grid';  
    i++; 
  }
  for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener('mouseenter', () => { 
      grid[i].style.backgroundColor = randomColor(); 
    }); 
  }
}

function random(min,max) {
  const num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

function randomColor() {
  return 'rgb(' + random(0,255) + ', ' + random(0,255) + ', ' + random(0,255) +  ')';
}
 
createGrid(16); 




