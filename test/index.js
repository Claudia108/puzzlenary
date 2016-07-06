//
import chai from "chai";
import $ from "jquery";
import View from '../lib/view';

const expect = chai.expect;

describe('my test suite', function () {
  it("renders a game canvas", function() {
    const gameInstance = new View("game-canvas");

    var instance = gameInstance.render();

    expect(instance).to.be.true;
  });

  
});
