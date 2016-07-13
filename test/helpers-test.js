import chai from 'chai';
const endPlayArray = require('../lib/helpers.js');
const classToggler = require('../lib/helpers.js');
import Cell from '../lib/cell';
const expect = chai.expect;


describe('helpers', function () {
  describe('classToggler', function () {
    context("when it's an invalid click", function () {
      context("with two lives", function () {
        it('keeps only one life', function () {
          const el = {className: undefined};
          const game = {
            lives: ["life", "lost_life"],
            isInvalidClick: function(arg) {
              return true;
            }
          };
          const gameLifeCycle = undefined;

          classToggler(el, game, gameLifeCycle);

          expect(game.lives).to.eql(["life"]);
        });
      });

      context("with one life", function () {
        it('loses all lives', function () {
          const el = {className: undefined};
          const game = {
            lives: ["lost_life"],
            isInvalidClick: function(arg) {
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
            isInvalidClick: function(arg) {
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
        context("with two lives", function () {
          // TODO
        });

        context("with one life", function () {
          // TODO
        });

        context("with no lives", function () {
          // TODO
        });
      });
    });
  });

  context('endPlayArray', function () {
    xit('removes elements from the array', function () {
      const cellOne = new Cell(1);
      const cellTwo = new Cell(2);
      const cellId = 1;
      let cellArray = [cellOne, cellTwo];

      expect(cellArray.length).to.equal(2);

      endPlayArray(cellId, cellArray);

      expect(cellArray).to.eql([cellTwo]);
      expect(cellArray.length).to.equal(1);
      expect(cellArray).to.contain(cellTwo);
      expect(cellArray).to.not.contain(cellOne);
    });
  });
});
