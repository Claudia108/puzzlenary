import chai from "chai";
// import chaijQuery from "chai-jquery";
import $ from 'jquery';
import Grid from '../lib/grid';
const expect = chai.expect;
// const expectjQuery = chaijQuery;

describe('grid', function () {
  context('contains attributes', function () {
    it('has columns and rows', function () {
      const grid = new Grid({});

      expect(grid).to.have.property('columns');
      expect(grid).to.have.property('rows');
      expect(grid).to.have.property('cellArray');
    });

    it('adds number of cells to array', function () {
      const grid = new Grid({
        columns: 5,
        rows: 5
      });
      grid.buildGrid();

      expect(grid.cellArray).to.be.an.instanceof(Array);
      expect(grid.cellArray.length).to.equal(25);
    });
  });
});
