import chai from 'chai';
import Game from '../lib/game';
import $ from "jquery";
const expect = chai.expect;

describe('game', function () {
  context('start', function () {
    xit('starts the game', function () {
      const game = new Game({});
    });
  });

  context('restart', function () {
    it("resets the game's state, and restarts it", function () {
      const game = new Game(2, 2);
      game.start();
      $('.game-table td').first().trigger('click', 'td');

      game.restart();

      expect(game.clicks).to.equal(0);
    });
  });
});
