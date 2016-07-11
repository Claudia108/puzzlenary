'use strict';

const Helpers = {
  endPlayArray: function(cellId,array){
    for( let i = 0; i < array.length; i++){
      if( array[i].id === Number(cellId)){
        array.splice(i,1);
        // --i;
      }
    }
    return array;
  },

  classToggler: function(el, grid) {
    if (el.className === "highlighted-2") {
       alert("no bueno");

    } else if (el.className === "highlighted-1") {
       el.className = "clicked";
       this.winGame(el.id, grid.cellArray);
    }
  },

  winGame: function (id, array) {
     array = Helpers.endPlayArray(id, array);
     if (array.length === 0) {
       alert("you won!");
     }
  }
};

module.exports = Helpers;
