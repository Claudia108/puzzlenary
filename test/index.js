import chai from "chai";
import $ from "jquery";
import View from '../lib/view';

const assert = chai.assert;

describe('my test suite', function () {
  it('should work', function () {
    assert(true);
  });

  it("renders a game", function() {
    const gameInstance = new View("game-canvas");

    gameInstance.render();

    assert.equal($(".game").length, 1);
  });
});
