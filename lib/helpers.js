'use strict';

const Helpers = {

  //place this method into a class
  //should only work if click is valid(green)
  endPlayArray: function(cellId,array){
    for( let i = 0; i < array.length; i++){
      if( array[i].id === Number(cellId)){
        array.splice(i,1);
        ++i;
      }
    }
    return array;
  }
};

// lifeArray: function(cell_id)
  // cell_id = 0
  // let count = cell_id >= 3
  // go to end game method and reset level/score
// keeps count of all the wrong clicks
// once you have 3 wrong clicks Game Ends
module.exports = Helpers;
