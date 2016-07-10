'use strict';
import $ from 'jQuery';
import Grid from './grid';
import Cell from './cell';
let Helpers = require('./helpers.js');

export default class Game {

  constructor(columns, rows) {
    this.grid = new Grid({columns: columns, rows: rows});
  }

 //  classToggler(td){
 //   var className = td.getAttribute("class");
 //   console.log(td.id);
 //
 //   if(className === "initial") {
 //     return td.className = "active";
 //   }
 //   else if (className === "forbidden") {
 //     return alert("no bueno");
 //   }
 //   else if (className === "active"){
 //     return td.className = "transparent";
 //   }
 // }
  //playing the game
  callbackToChangeClickState(e,grid){
    // update click state here in the section
    let el = e.target;
    if (el.className === "forbidden") {
       alert("no bueno");
    }
    else if (el.className === "active"){
       el.className = "clicked";
       grid.cellArray = Helpers.endPlayArray(el.id,grid.cellArray);
       if (grid.cellArray.length === 0){
         alert("you won!");
       }
    }
    // el.className = this.classToggler(e);


    // el.style.backgroundColor = 'transparent';
    console.log("You clicked on item #:" + el.id);

    //}
  }

  setupClickEvents(callback){
    let self = this;
    $('.game-table').on('click', 'td', function(e){
      // get element from event
      return callback(e,self.grid);
    });
  }

  start(){
    console.log("game started");
    //    var self = this;
    this.grid.buildGrid();
    this.setupClickEvents(this.callbackToChangeClickState);
    // this.
    // className = this.classes[Math.floor (Math.random() * this.classes.length)];
  }
  //main event
  /*
  window.setInterval(function(){
  for( let cell of grid.cellArray){
  //let color = cell.randomColor();
  let cell_element = document.getElementById(cell.id);
  // cell_element.style.backgroundColor = cell.randomColor();
}
},50);
*/
// }
// game_won(){
//     once array reaches 0
//     console.log("You won!")
// }
}
