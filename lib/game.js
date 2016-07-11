'use strict';
import $ from 'jQuery';
import Grid from './grid';
let Helpers = require('./helpers.js');

export default class Game {
  constructor(columns, rows) {
    this.grid = new Grid({columns: columns, rows: rows});
  }
  callbackToChangeClickState(e,grid){
    // let el = e.target;
    // if (el.className === "highlighted-2") {
    //    alert("no bueno");
    // }
    // else if (el.className === "highlighted-1"){
    //    el.className = "clicked";
    //    grid.cellArray = Helpers.endPlayArray(el.id,grid.cellArray);
    //    if (grid.cellArray.length === 0){
    //      alert("you won!");
    //    }
    // }
    // debugger;
    classToggler();
    //
    // console.log("You clicked on item #:" + el.id);
  }



  setupClickEvents(callback){
    let self = this;
    $('.game-table').on('click', 'td', function(e){
      return callback(e,self.grid);
    });
  }

  start(){
    console.log("game started");
    this.grid.buildGrid();
    this.setupClickEvents(this.callbackToChangeClickState);
  }
}

  function classToggler(td){
    console.log("Class toggler");
  }
  //    var className = td.getAttribute("class");
  //    console.log(td.id);
  //
  //    if(className === "initial") {
  //     td.className = "active";
  //    }
  //    else if (className === "forbidden") {
  //     alert("no bueno");
  //    }
  //    else if (className === "active"){
  //     td.className = "transparent";
  //    }
  //  }

module.exports = Game;
