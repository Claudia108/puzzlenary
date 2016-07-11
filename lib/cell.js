// import ColorHelper from './ColorHelper';

class Cell {

  constructor(id){
    this.default_state = 'initial';
    this.id = id;
    this.types_of_state = ['initial', 'active', 'forbidden'];
    // this.state = this.default_state;
  }

  changeState(state_id){
    if(Number(state_id) < this.types_of_state.length){
      return this.types_of_state[state_id];
    }
    // return this.default_state;
  }

  randomState(){
    return this.changeState(Math.floor(Math.random() *this.types_of_state.lenth));
  }
}
module.exports = Cell;
