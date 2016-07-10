'use strict';
import $ from 'jQuery';
import Grid from './grid';
import Cell from './cell';
let Helpers = require('./helpers.js');

export default class Game {
  constructor(columns, rows) {
    this.grid = new Grid({columns: columns, rows: rows});
    this.cell = new Cell({});
  }

  classToggler(td){
    var className = td.getAttribute("class");
    console.log(td.id);

    if(className === "initial") {
      return td.className = "active";
    }
    else if (className === "forbidden") {
      return alert("no bueno");
    }
    else if (className === "active"){
      return td.className = "transparent";
    }
  }

  //playing the game
  callbackToChangeClickState(element,grid){
    // update click state here in the section
    let el = element.target;
    // el.classToggler(el)
    // debugger;

    el.className='clicked';
    // el.style.backgroundColor = 'transparent';
    // this.classToggler(el);
    console.log("You clicked on item #:" + el.id);

    grid.cellArray = Helpers.endPlayArray(el.id,grid.cellArray);

    if (grid.cellArray.length === 0){
      alert("you won!");
    }
  }

  setupClickEvents(callback){
    let self = this;
    $('.game-table').on('click', 'td', function(e){
      // get element from event

      return callback(e,self.grid);
    });
  }

  // giveRandomClass(){
  //   // $( "p" ).addClass( "myClass yourClass" );
  //   // let cell = this.cell;
  //   // debugger;
  //   let self = this;
  //   let classedArray = self.grid.cellArray.map(function(cell){
  //     cell.classes[Math.floor (Math.random() * cell.classes.length)];
  //   });
  //   return classedArray;
  // }


  start(){
    // let cell = this.cell;
    // let grid = this.grid;
    console.log("game started");
    //    var self = this;
    this.grid.buildGrid();
    // for( let c=0; c < this.grid.cellArray.length; c++){
    //   this.cell.className = this.cell.classes[Math.floor (Math.random() * this.cell.classes.length)]
      // let cell_element = document.getElementById(this.cell.id);
      // cell_element.giveRandomClass();
    }

    this.setupClickEvents(this.callbackToChangeClickState)
    // debugger;

  // cell_element.style.backgroundColor = cell.randomColor();
    // window.setTimeout(cell.giveRandomClass, 1000);
    // this.giveRandomClass();
    // debugger;
  }

  //main event


// window.setInterval(function(){
//   for( let cell of grid.cellArray){
//   //let color = cell.randomColor();
//   let cell_element = document.getElementById(cell.id);
//   // cell_element.style.backgroundColor = cell.randomColor();
// }
// },50);


//   window.setInterval(function(){
//   for( let cell of grid.cellArray){
//   //let color = cell.randomColor();
//   let cell_element = document.getElementById(cell.id);
//   // cell_element.style.backgroundColor = cell.randomColor();
// }
// },50);

// }

  // cell.setAttribute('class', (classes[Math.floor (Math.random() * classes.length) ])) ;

}
