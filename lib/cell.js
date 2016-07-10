// import ColorHelper from './ColorHelper';

class Cell {
  constructor(id, className){
    this.id = id;
    this.className = className;
    // this.color = new ColorHelper(id);
  }

  addClassName(cell) {
    cell.className = this.classes[Math.floor (Math.random() * this.classes.length)];
  }

  // validClick(cell){
    //
    // else
    //  if cell.backgroundColor = 'transparent';
    // cell.EndPlayArray;
  // }
  // invalidClick(cell){
  //   if (cell.className === 'forbidden'){
  //     // need to bring in randomColor to continuously flash
  //     //lifeArray
  //   }
  // }
  // // frozenState(cell) {
  //   //if cell has been clicked by valid click
  //   //then cell is no longer clickable
  // }
}

// playingTheGame
// upon perclick it needs to check the following
// if (el.className==='active'){
//     el.className='transparent';
// } else if (el.className==='initial')
//     alert('cell not in play');
// } else if (el.className==='forbidden'){
//     alert('you clicked the bad color');
// } else {
//   el.className='transparent';
// };

module.exports = Cell;
