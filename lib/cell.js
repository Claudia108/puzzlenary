class Cell {
//   constructor{
//   // color function
//   // correctclick function
//       //  function
//   // forbidden function
// }
  constructor(id){
    this.default_color = "blue";
    this.valid_colors = ['blue','red', 'yellow', 'green'];
    this.id = id;
    this.color = this.default_color;
  }

  change(color_id){
    if(Number(color_id) < this.valid_colors.length){
      return this.valid_colors[color_id];
    }
    return this.default_color;
  }

  randomColor(){
    return this.change(Math.floor(Math.random() * this.valid_colors.length));
  }

// correctClick {
//  //once this is true turn inactive(transparent)
//  //active color = green
//  // still needs to flash
// };
//
// inactive {
//   //color = transparent
//   // should pop out of array
// }
//
// forbiddenClick {
//   // invalid colors
//   // still needs to flash
//   // maybe reactives inactive or subracts points or subtracts life subracts does something bad to game
// }
//
// //bad stuff to game

}

module.exports = Cell;
