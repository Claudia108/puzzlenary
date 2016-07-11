'use strict';

// let Config = {
//   columns:4,
//   rows:4
// };
//

class Config {

  constructor(level) {
    this.columns = columns;
    this.rows = rows;
  }

  levelSelector(level){
    if (level === 1){
    return this.levelTwo;
  }
    else if (level === 2) {
    return this.levelThree;
   }
    else if (level === 3) {
    return this.levelFour;
  }
    else if (level === 4) {
    return this.levelFive;
  }
    else{
      return this.levelOne;
  }
  }

  levelOne(){
    return {
      columns: 3,
      rows: 3,
      invalidclicks: ["highlighted-2"]};
    }

  levelTwo() {
    return {
      columns: 4,
      rows: 4,
      invalidclicks: ["highlighted-2", "highlighted-3"]};
  }

  levelThree() {
    return {
    columns: 5,
    rows: 5,
    invalidclicks: ["highlighted-2", "highlighted-3", "highlighted-4"]};
  }

  levelFour() {
    return {
    columns: 8,
    rows: 8,
    invalidclicks: ["highlighted-2", "highlighted-3", "highlighted-4"]};
  }

  levelFive() {
    return {
    columns: 10,
    rows: 10,
    invalidclicks: ["highlighted-2", "highlighted-3", "highlighted-4", "highlighted-5", "highlighted-6"]};
  }
}

module.exports = Config;
