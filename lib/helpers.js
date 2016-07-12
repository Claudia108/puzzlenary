'use strict';


function endPlayArray (cellId,array){
  for( let i = 0; i < array.length; i++){
    if( array[i].id === Number(cellId)){
      array.splice(i,1);
    }
  }
  return array;
}

function classToggler(el, game) {
  if (el.className === "highlighted-2") {
    alert("You just lost a life");
    looseGame(game.lives);
  } else if (el.className === "highlighted-1") {
    el.className = "clicked";
    winGame(el.id, game.grid.cellArray);
  }
}

function winGame(id, array) {
  array = endPlayArray(id, array);
  if (array.length === 0) {
    alert("you won!");
  }
}

function looseGame(array) {
  array.pop();
  console.log(array.length);
  if (array.length === 0) {
    alert("LOSER");
  }
}


module.exports = endPlayArray;
module.exports = classToggler;
