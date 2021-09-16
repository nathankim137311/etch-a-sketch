console.log('hello everybody');

// variables 
const containerDiv = document.getElementById('container');
const gridArr = [];
let grid = createGrid(16, 16); 

// event listeners 

// functions 
function createGrid (rows, columns) {
  let i = 1;
  while (i < rows * columns) {
    let gridCell = containerDiv.appendChild(document.createElement('div'));  
    gridArr.push(gridCell); 
    i++; 
  }
  return
}

for (let i = 0; i < gridArr.length; i++) {
  gridArr[i].addEventListener('mouseenter', () => {
    gridArr[i].classList.add('tile'); 
    gridArr[i].style.backgroundColor = 'black'; 
  }); 
}

function removeTransition (e) {
  if (e.propertyName !== 'transform') return; 
  this.classList.remove('tile'); 
  this.style.backgroundColor = 'white'; 
}

gridArr.forEach(cell => cell.addEventListener('transitionend', removeTransition)); 




//function tilesBlack () {
//  for (let i = 0; i < gridArr.length; i++) {
//    gridArr[i].addEventListener('mouseender', (e) => {
//      e.target.style.color = 'black';
//    }); 
//  }
//}


