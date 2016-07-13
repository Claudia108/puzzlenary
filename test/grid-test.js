import chai from "chai";
import Grid from '../lib/grid';
import $ from "jquery";
const expect = chai.expect;

describe('grid', function () {
  after(function() {
    $('.game-table').remove();
  });

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
