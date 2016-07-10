//
import chai from "chai";
import $ from "jquery";
import View from '../lib/view';
import Grid from '../lib/grid';
require('./grid-test');

const expect = chai.expect;

describe('my test suite', function () {
  xit("renders a game canvas", function() {
    const gameInstance = new View("game-canvas");

    var instance = gameInstance.render();
    expect(instance).to.be.true;
  });

});
