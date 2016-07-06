import chai from "chai";
import $ from "jquery";
import View from '../lib/view';
import Grid from '../lib/grid';

const expect = chai.expect;

describe('grid', function () {
  context('contains attributes', function () {
    it('has image', function () {
      const image = '/images/...png';
      const grid = new Grid(image);

      expect(grid.image).to.eql(image);
      // expect(grid.boxes[0]).to.kindOf(Box);
    });

    it('has columns and rows', function () {
      const numberOfElements = 9;
      const grid = new Grid(numberOfElements);
      expect(grid.columns.length).to.eql(3);
      expect(grid.rows.length).to.eql(3);
      expect(grid.squares.length).to.eql(9);
    });

    it('each grid square has x and y coordinates', function () {
      const grid = new Grid(9);
      
    })

    it('matches number of grid squares with number of added boxes', function () {
      const numberOfElements = 9;
      const grid = new Grid(numberOfElements);
      grid.fillWithBoxes();

      expect(grid.boxes.length).to.eql(numberOfElements);
    });
  });
});
