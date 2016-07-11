import chai from 'chai';
const endPlayArray = require('../lib/helpers.js');
const classToggler = require('../lib/helpers.js');
import Cell from '../lib/cell';
const expect = chai.expect;

describe('helpers', function () {
  context('function endPlayArray', function () {
    it('removes elements from the array', function () {
      let cellOne = new Cell(1);
      let cellTwo = new Cell(2);
      let cellId = 1;
      let cellArray = [cellOne, cellTwo];

      expect(cellArray.length).to.equal(2);

      endPlayArray(cellId, cellArray);

      expect(cellArray.length).to.equal(1);
      expect(cellArray).to.eql([cellTwo]);
      expect(cellArray).to.contain(cellTwo);
      expect(cellArray).to.not.contain(cellOne);
    });
  });
});
