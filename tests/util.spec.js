const chai = require('chai');
const Particle = require('../src/Particle');
const {
  buildParticles,
  drawChamber,
  getPosition,
  hasParticles
} = require('../src/utils');

chai.should();

describe('Utils', () => {

  it('getPosition() should return particle positions', () => {
    const particle = new Particle('L', 0, 2);
    const pos = getPosition([particle], 2);
    pos.should.length(1);
  });

  it('drawChamber() should draw a chamber including particles position', () => {
    const result = drawChamber([2, 2], 5);
    result.should.equal('..X..');
  });

  it('hasParticles() should return true or false if chamber has particles', () => {
    hasParticles([4, 4]).should.equal(false);
  });

  it('buildParticles() should instantiate a Particle instance', () => {
    const result = buildParticles('..L', 1);
    result[0].should.instanceOf(Particle);
  });

});