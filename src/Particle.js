/**
 * class that holds the following attributes:
 * direction {String} - can be 'R' or 'L'
 * start {String} - character position from 'init'
 * speed {int} - input speed of particles
 */
class Particle {
  constructor(direction, start, speed) {
    // we only care for directions 'L' and 'R'
    if(!(direction === 'R' || direction === 'L')){
			throw new Error(direction + ' is not a valid direction');
		}
    if (direction === 'R') {
      this.direction = 'R';
    } else {
      this.direction = 'L';
    }
    this.speed = speed;
    this.start = start;
  }

  positionAt(time) {
    // move 'R' particle to the right
    if (this.direction === 'R') {
      return (time * this.speed) + this.start;
    }
    // move 'L' particle to the left
    return this.start - (time * this.speed);
  }
}

module.exports = Particle;
