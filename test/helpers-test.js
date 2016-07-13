import chai from 'chai';
const endPlayArray = require('../lib/helpers.js');
const classToggler = require('../lib/helpers.js');
import Cell from '../lib/cell';
import Game from '../lib/game';
import $ from "jquery";
const expect = chai.expect;


describe('helpers', function () {
  after(function() {
    $('.game-table').remove();
  });

  describe('classToggler', function () {
    context("when it's an invalid click", function () {
      context("with two lives", function () {
        it('keeps only one life', function () {
          const el = {className: undefined};
          const game = {
            lives: ["life", "lost_life"],
            isInvalidClick: function() {
              return true;
            }
          };
          const gameLifeCycle = {
            emit: function() {}
          };

          classToggler(el, game, gameLifeCycle);

          expect(game.lives).to.eql(["life"]);
        });
      });

      context("with one life", function () {
        it('loses all lives', function () {
          const el = {className: undefined};
          const game = {
            lives: ["lost_life"],
            isInvalidClick: function() {
              return true;
            }
          };
          const gameLifeCycle = {
            emit: function() {}
          };

          classToggler(el, game, gameLifeCycle);

          expect(game.lives).to.eql([]);
        });
      });

      context("with no lives", function () {
        it('loses all lives', function () {
          const el = {className: undefined};
          const game = {
            lives: [],
            isInvalidClick: function() {
              return true;
            }
          };
          const gameLifeCycle = {
            emit: function() {}
          };

          classToggler(el, game, gameLifeCycle);

          expect(game.lives).to.eql([]);
        });
      });

      context("when it's a valid click", function () {
        it("changes class of element to transparent", function () {
          const el = { className: "highlighted-1" };
          const game = new Game(3, 3);

          game.isInvalidClick = function () {
            return false;
          };
          const gameLifeCycle = {
            emit: function() {}
          };

          game.start();
          expect(el.className).to.equal("highlighted-1");

          classToggler(el, game, gameLifeCycle);

          expect(el.className).to.equal("clicked");
        });

        it("removes one element from the array", function () {
          const el = {
            id: 1,
            className: "highlighted-1"};
          const game = new Game(3, 3);
          game.isInvalidClick = function () {
            return false;
          };

          const gameLifeCycle = {
            emit: function() {}
          };
          game.start();

          expect(game.grid.cellArray.length).to.equal(9);

          classToggler(el, game, gameLifeCycle);

          expect(game.grid.cellArray.length).to.equal(8);
          expect(game.grid.cellArray).to.not.include(1);
        });
      });
    });
  });
});
