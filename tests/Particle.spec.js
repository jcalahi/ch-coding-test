const chai = require('chai');
const Particle = require('../src/Particle');
chai.should();

describe('Particle', () => {
  let particle;

  it('should take a valid direction', () => {
    particle = new Particle('R', 0, 1);
    particle.direction.should.equal('R');
  });

  it('should take speed as an attribute', () => {
    particle = new Particle('L', 0, 7);
    particle.speed.should.equal(7);
  });

  it('should take start as an attribute', () => {
    particle = new Particle('L', 2, 0);
    particle.start.should.equal(2);
  });

  it('should move R particle to the right / forward', () => {
    particle = new Particle('R', 2, 0);
    particle.positionAt(1).should.equal(2);
  });

  it('should move L particle to the left / backward', () => {
    particle = new Particle('L', 4, 0);
    particle.positionAt(2).should.equal(4);
  });

});