'use strict';

const Helpers = {
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

module.exports = Helpers;
