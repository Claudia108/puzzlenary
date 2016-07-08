
class Grid {
  constructor(options) {
    // this.image = options.image || '../assets/images/pig_troll.jpg';
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
              // cell.innerHTML = ++i;
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

// attach event listeners (event emitter) on your cells
// if the cells are clicked, they will tell the concenred parties that they were clicked and
// whomever sis in charge can decide what to do

// should be somewhere else
var grid = new Grid({});
var clickArea = grid.buildGrid(function(el) {
    el.className='clicked';
});

document.body.appendChild(clickArea);

module.exports = Grid;

    // console.log("You clicked on element:",el);
    // console.log("You clicked on row:",row);
    // console.log("You clicked on col:",col);
    // console.log("You clicked on item #:",i);
