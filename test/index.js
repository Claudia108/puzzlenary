//
import chai from "chai";
import $ from "jquery";
import View from '../lib/view';
import Grid from '../lib/grid';

const expect = chai.expect;

describe('my test suite', function () {
  it("renders a game canvas", function() {
    const gameInstance = new View("game-canvas");

    var instance = gameInstance.render();

    expect(instance).to.be.true;
  });

  it('divides canvas in even grid', function () {
    const numberOfElements = 5;
    const grid = new Grid(numberOfElements);

    expect(grid.boxes.length).to.eql(numberOfElements);
    // expect(grid.boxes[0]).to.kindOf(Box);
  });

  // Box WIP test:
  // it('box', function() {
  //   const x1 = 4;
  //   const y1 = 3;
  //   const x2 = 8;
  //   const y2 = 7;
  //   const box = new Box(x1, y1, x2, y2);
  //
  //   expect(box).?
  // });
});
