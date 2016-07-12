'use strict';

function endPlayArray(cellId, array){
  for( let i = 0; i < array.length; i++){
    if( array[i].id === Number(cellId)){
      array.splice(i,1);
    }
  }
  return array;
}

function classToggler(el, game, gameLifeCycle) {
  if (el.className === "highlighted-2") {
    // alert("You just lost a life");
    removeLife(game.lives, gameLifeCycle);

  } else if (el.className === "highlighted-1") {
    el.className = "clicked";
    solveTile(el.id, game.grid.cellArray, gameLifeCycle);
  }
}

function solveTile(id, array, gameLifeCycle) {
  array = endPlayArray(id, array);
  if (array.length === 0) {
    gameLifeCycle.emit("end-game", "win");
  }
}

function removeLife(array, gameLifeCycle) {
  array.pop();
  if (array.length === 0) {
    gameLifeCycle.emit("end-game", "lost");
  }
}

module.exports = classToggler;
