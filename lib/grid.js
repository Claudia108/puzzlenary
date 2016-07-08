
class Grid {
  constructor(options) {
    this.columns = options.columns || 10;
    this.rows = options.rows || 10;
  }

  buildGrid(callback) {
    var i = 0;
    var grid = document.createElement('table');
    grid.className = 'game-table';

    for (var r = 0; r < this.rows; ++r){
      var tr = grid.appendChild(document.createElement('tr'));
      for (var c = 0; c < this.columns; ++c) {
        var cell = tr.appendChild(document.createElement('td'));
        cell.id = ++i;
        cell.addEventListener('click',(function(el,r,c) {
          return function() {
            callback(el,r,c);
          };
        })(cell,r,c),false);
      }
    }
    return grid;
  }
}


// move to game class
var grid = new Grid({});
var clickArea = grid.buildGrid(function(el) {
  el.className='clicked';
  console.log("You clicked on item #:" + el.id);

});

document.body.appendChild(clickArea);

module.exports = Grid;
