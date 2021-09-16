console.log('hello everybody');

// variables 
const resetBtn = document.getElementById('reset'); 
const containerDiv = document.getElementById('container');
const grid = document.getElementsByClassName('grid'); 

// event listeners 
resetBtn.addEventListener('click', () => {
  let gridDimensions = prompt('Select Width/Height (squares)', '0'); 
  let squares = parseInt(gridDimensions); 
  if (gridDimensions === '' || gridDimensions === null || gridDimensions == 0) {
    alert('ERROR'); 
  } else {
    clearGrid(); 
    createGrid(squares); 
  }
});

// functions 
function createGrid (squares) {
  let i = 1;
  while (i <= Math.pow(squares, 2)) {
    let square = containerDiv.appendChild(document.createElement('div'));
    square.className += 'grid';  
    i++; 
  }
  for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener('mouseenter', () => {
      grid[i].classList.add('tile'); 
      grid[i].style.backgroundColor = randomColor(); 
    }); 
  }
}

//createGrid(16); 
//console.log(grid.length); 

const clearGrid = (array) => array.forEach(div => div.remove()); 

clearGrid(document.getElementsByClassName('grid')); 

function random(min,max) {
  const num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

function randomColor() {
  return 'rgb(' + random(0,255) + ', ' + random(0,255) + ', ' + random(0,255) +  ')';
}
 
//for (let i = 0; i < gridArr.length; i++) {
//  gridArr[i].addEventListener('mouseenter', () => {
//    gridArr[i].classList.add('tile'); 
//    gridArr[i].style.backgroundColor = 'black'; 
//  }); 
//}

//function removeTransition (e) {
//  if (e.propertyName !== 'transform') return; 
//  this.classList.remove('tile'); 
//  this.style.backgroundColor = 'white'; 
//}




