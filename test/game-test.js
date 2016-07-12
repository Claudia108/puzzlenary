import chai from 'chai';
import Game from '../lib/game';
import $ from "jquery";
const expect = chai.expect;

describe('game', function () {
  after(function() {
    $('.game-table').remove();
  });

  context('start', function () {
    it('starts the game', function () {
      const game = new Game(2, 2);

      game.start();

      expect($('.game-table').length).to.equal(1);
      expect(game.clicks).to.equal(0);
      expect(game.interval > 0).to.equal(true);
    });

    it('starts click event handlers', function () {
      const game = new Game(2, 2);

      game.start();
      $('.game-table td').first().trigger('click');

      expect(game.clicks).to.equal(1);
    });
  });

  context('end', function () {
    it("resets the game's state", function () {
      const game = new Game(2, 2);
      game.start();
      $('.game-table td').first().trigger('click', 'td');

      game.end();

      expect($('.game-table').length).to.equal(0);
      expect(game.clicks).to.equal(0);
    });
  });
});
