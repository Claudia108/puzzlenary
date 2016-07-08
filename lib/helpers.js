'use strict';

const Helpers = {
  removeArrayElement: function(el,ar){
    var pos = ar.indexOf(Number(el));
    if(pos >= 0){
        ar.splice(pos,1);
    }
    return ar;
  }


};


module.exports = Helpers;



//color constant or constant 2 functions F1)valid colors F2) invalid colors
