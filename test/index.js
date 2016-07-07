//
import chai from "chai";
import $ from "jquery";
import View from '../lib/view';
import Grid from '../lib/grid';
require('./grid-test')

const expect = chai.expect;

describe('my test suite', function () {
  it("renders a game canvas", function() {
    const gameInstance = new View("game-canvas");

    var instance = gameInstance.render();

    expect(instance).to.be.true;
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
