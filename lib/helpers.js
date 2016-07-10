'use strict';

const Helpers = {

  //place this method into a class
  //should only work if click is valid(green)
  endPlayArray: function(el,ar){
    for( let pos = 0; pos < ar.length; pos++){
      if( ar[pos].id == el.id){
        ar.splice(pos,1);
        ++pos;
      }
    }
    return ar;
  }
};

// lifeArray: function(cell_id)
  // cell_id = 0
  // let count = cell_id >= 3
  // go to end game method and reset level/score
// keeps count of all the wrong clicks
// once you have 3 wrong clicks Game Ends

module.exports = Helpers;



//color constant or constant 2 functions F1)valid colors F2) invalid colors
