const chai = require('chai');
const Animation = require('../src/Animation');

chai.should();

describe('Animation', () => {

  it('should return correct output', () => {
    const result = Animation.animate(2, '..L');
    result.toString().should.equals('..X,X..,...');
  });
});
