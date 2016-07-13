'use strict';

function classToggler(el, game, gameLifeCycle) {
  if (game.isInvalidClick(el)) {
    // console.log("You clicked: " + el.className );
    removeLife(game.lives, gameLifeCycle);
  } else if (el.className === "highlighted-green") {
    el.className = "highlighted-transparent";
    solveTile(el.id, game.grid.cellArray, gameLifeCycle);
  }
}

function solveTile(id, array, gameLifeCycle) {
  array = endPlayArray(id, array);
  if (array.length === 0) {
    gameLifeCycle.emit("end-game", "win");
  }
}

function endPlayArray(cellId, array){
  for( let i = 0; i < array.length; i++){
    if( array[i].id === Number(cellId)){
      array.splice(i,1);
    }
  }
  return array;
}

function removeLife(array, gameLifeCycle) {
  array.pop();
  const currentLivesSelector = document.querySelector('#lives-galada');
  if(currentLivesSelector){
    currentLivesSelector.innerHTML = "Lives " + array.length;
  }
  if (array.length === 2){
    document.querySelector('.lt3').style.visibility='hidden';
  } else if (array.length === 1){
    document.querySelector('.lt3').style.visibility='hidden';
    document.querySelector('.lt2').style.visibility='hidden';
  } else if (array.length === 0){
    document.querySelector('.lt3').style.visibility='hidden';
    document.querySelector('.lt2').style.visibility='hidden';
    document.querySelector('.lt1').style.visibility='hidden';
    gameLifeCycle.emit("end-game", "lost");
  }
}

module.exports = classToggler;
