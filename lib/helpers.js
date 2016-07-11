'use strict';


function endPlayArray (cellId,array){
  for( let i = 0; i < array.length; i++){
    if( array[i].id === Number(cellId)){
      array.splice(i,1);
      // --i;
    }
  }
  return array;
}

function classToggler(el, grid) {
  if (el.className === "highlighted-2") {
    alert("no bueno");
    // looseGame(lives);
  } else if (el.className === "highlighted-1") {
    el.className = "clicked";
    winGame(el.id, grid.cellArray);
  }
}

function winGame(id, array) {
  array = endPlayArray(id, array);
  if (array.length === 0) {
    alert("you won!");
  }
}

// function looseGame(lives) {
//   if (el.className == alert("no bueno");
//   console.log("you lost a life" + lives);
//   if (this.lives > 2 ) {
//     alert("LOSER");
//   }
// }


module.exports = endPlayArray;
module.exports = classToggler;
