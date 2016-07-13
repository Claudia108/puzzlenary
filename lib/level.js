'use strict';

class Level {

  constructor(level){
    this.data = this.levelSelector(level);
  }

  levelSelector(level){ //selects currentLevel data
    if (level === 1){
      return this.levelOne();
    } else if (level === 2) {
      return this.levelTwo();
    } else if (level === 3) {
      return this.levelThree();
    } else if (level === 4) {
      return this.levelFour();
    } else if (level === 5) {
      return this.levelFive();
    } else{
      return this.levelOne();
    }
  }

  levelOne(){
    return {
      columns: 3,
      rows: 3,
      invalidClicks: ["highlighted-red"]
    };
  }

  levelTwo() {
    return {
      columns: 4,
      rows: 4,
      invalidClicks: ["highlighted-red",
                      "highlighted-blue"]
    };
  }

  levelThree() {
    return {
      columns: 5,
      rows: 5,
      invalidClicks: ["highlighted-red",
                      "highlighted-blue",
                      "highlighted-purple"]
    };
  }

  levelFour() {
    return {
      columns: 8,
      rows: 8,
      invalidClicks: ["highlighted-red",
                      "highlighted-blue",
                      "highlighted-purple",
                      "highlighted-orange"]
    };
  }

  levelFive() {
    return {
      columns: 10,
      rows: 10,
      invalidClicks: ["highlighted-red",
                      "highlighted-blue",
                      "highlighted-purple",
                      "highlighted-orange",
                      "highlighted-yellow"]
    };
  }
}

module.exports = Level;
