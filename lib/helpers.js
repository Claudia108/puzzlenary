var Helpers = {
  "remove_array_element" : function(el,ar){
    var pos = ar.indexOf(Number(el));
    if(pos >= 0){
        ar.splice(pos,1);
    }
    //debugger;
    return ar;
  }
}
module.exports = Helpers;