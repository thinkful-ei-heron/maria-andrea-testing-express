/* eslint-disable strict */
const sort = require('../index');
const expect = require('chai').expect;


describe('sort list', () => {
  it('should sort array in ascending order', () =>{
    expect(sort([3,1,2])).to.deep.equal([1,2,3]);
  });
});