class ColorHelper {

  constructor(id){
    //debugger;
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

}

module.exports = ColorHelper;
