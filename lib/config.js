'use strict';

// let Config = {
//   columns:4,
//   rows:4
// };
//

class Config {

  constructor(options) {
    this.columns = options.columns;
    this.rows = options.rows;
  }

  levelSelector(){
    if (levelOne){
    return levelTwo;
  }
    else if (levelTwo) {
    return levelThree;
   }
    else if (levelThree) {
    return levelFour;
  }
    else if (levelFour) {
    return levelFive;
  }
    else
      return levelOne;
  }

  levelOne(){
    this.columns: 3,
    this.rows: 3
    invalidclicks:("highlighted-2" || "highlighted-3");
  }

  levelTwo() {
    this.columns: 4,
    this.rows: 4
    invalidclicks:("highlighted-2" || "highlighted-3" || "highlighted-4");
  }

  levelThree() {
    this.columns: 5,
    this.rows: 5
    invalidclicks:("highlighted-2" || "highlighted-3" || "highlighted-4" || "highlighted-5");
  }

  levelFour() {
    this.columns: 8,
    this.rows: 8
    invalidclicks:("highlighted-2" || "highlighted-3" || "highlighted-4" || "highlighted-5", "highlighted-6");
  }

  levelFive() {
    this.columns: 10,
    this.rows: 10
    invalidclicks:("highlighted-2" || "highlighted-3" || "highlighted-4" || "highlighted-5", "highlighted-6");
  }
}

module.exports = Config;
