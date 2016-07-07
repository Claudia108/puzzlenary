// const ctx = canvas.getContext('2d');

class Grid {
  constructor(columns = 3, rows = 3, ctx) {
    // debugger;
    // this.image =
    // this.ctx = ctx
    this.columns = columns;
    this.rows = rows;
    // this.boxes = [1, 2, 3, 4, 5];
  };
};

module.exports = Grid;

// var lastClicked;
var grid = clickableGrid(10,10,function(el,row,col){

    console.log("You clicked on element:",el);
    console.log("You clicked on row:",row);
    console.log("You clicked on col:",col);
    // console.log("You clicked on item #:",i);

    el.className='clicked';
    // if (lastClicked) lastClicked.className='';
    // lastClicked = el;
});

document.body.appendChild(grid);

function clickableGrid( rows, cols, callback ){
    // var i=0;
    var grid = document.createElement('table');
    grid.className = 'game-table';
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            // cell.innerHTML = ++i;
            cell.addEventListener('click',(function(el,r,c){
                return function(){
                    callback(el,r,c);
                }
            })(cell,r,c),false);
        }
    }
    return grid;
}


blocks.push(new Block(0, 0, 200, 200, "purple"));
blocks.push(new Block(200, 0, 200, 200, "blue"));
blocks.push(new Block(400, 0, 200, 200, "green"));
blocks.push(new Block(0, 200, 200, 200, "pink"));
blocks.push(new Block(200, 200, 200, 200, "red"));
blocks.push(new Block(400, 200, 200, 200, "brown"));
blocks.push(new Block(0, 400, 200, 200, "teal"));
blocks.push(new Block(200, 400, 200, 200, "yellow"));
blocks.push(new Block(400, 400, 200, 200, "orange"));
