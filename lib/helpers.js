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
  //if (el.className === "highlighted-2") {
    if (game.levelData.invalidclicks.includes(el.className)){ //includes level difficulties
  // alert("You just lost a life");
    console.log("You clicked: " + el.className );
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
  console.log("number of lives left:" + array.length);
  // var node = document.getElementById('lifeTrolls');
  // var textnode = document.createTextNode(`Lives: ${array.length}`);
  // node.appendChild(textnode);

var node = document.createElement("p");
var textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.getElementsByClassName("lifeTrolls").appendChild(node);








  // div.append(array.length);
  if (array.length === 0) {
    gameLifeCycle.emit("end-game", "lost");
  }
}

module.exports = classToggler;
