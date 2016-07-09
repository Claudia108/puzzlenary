import Grid from './grid';
let Helpers = require('./helpers.js');

export default class Game {

  constructor(columns, rows) {
    this.grid = new Grid({columns: columns, rows: rows});
  }

  start(){
    console.log("game started");
    var grid = this.grid;
    // debugger;
    var clickArea = this.grid.buildGrid(function(el){
      console.log("You clicked on item #:" + el.id);
      // debugger;
      grid.cell_array = Helpers.removeArrayElement(el.id,grid.cell_array);

      if (grid.cell_array.length === 0){
        alert("you won!");
      }
    });
    document.body.appendChild(clickArea);
  }
    classToggler(td) {
        // debugger;
        var className = td.getAttribute("class");
        console.log(td.id);
        if(className==="initial") {
          td.className = "initial";
        }
        else if (className==="forbidden") {
          alert("no bueno");
        }
        else if (className==="active"){
          td.className = "transparent";
        }
        else {
          td.className = "transparent";
        }
      }

  // play(){
  //
  // }
}
