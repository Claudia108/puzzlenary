"use strict";
import $ from "jquery";

// function addOnClickToTds(){
//   var table = document.getElementById("game-table");
//   for (var i = 0, cell; cell = table.cells[i]; i++) {
//       $('#'+ td.id ).attr('onClick', 'classToggler(this);');
//     }
// };
// function classToggler(td){
//     debugger;
//     var className = td.getAttribute("class");
//       console.log(td.id);
//     if(className=="normal") {
//       return td.className = "active";
//     }
//     else if (className=="forbidden") {
//       return alert("no bueno");
//     }
//     else if (className=="active"){
//       return td.className = "transparent";
//     }
//     else{
//       return td.className = "transparent";
//     };
//     // return td.className;
//   };


class Grid {
  constructor(options) {
    this.columns = options.columns;
    this.rows = options.rows;
    this.cell_array = [];
  }

  var classes = ["active", "forbidden", "initial"];
  // cell.addClass(classes[Math.floor (Math.random() * classes.length) ]);
  cell.setAttribute('class', (classes[Math.floor (Math.random() * classes.length) ])) ;


  
  buildGrid(callback) {
    var i = 0;
    var grid = document.createElement('table');
    grid.className = 'game-table';
    var classes = ["active", "forbidden", "initial"];

    for (var r = 0; r < this.rows; ++r){
      var tr = grid.appendChild(document.createElement('tr'));
      for (var c = 0; c < this.columns; ++c) {
        var cell = tr.appendChild(document.createElement('td'));
        cell.id = ++i;

        this.cell_array.push(i);

        cell.addEventListener('click',(function(el,r,c) {
          return function() {
            callback(el,r,c);
          };

        })(cell,r,c),false);
      }
    }
    return grid;
  }
};





module.exports = Grid;
