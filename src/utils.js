const Particle = require('./Particle');
/**
 *
 * @param {Particle} particles - char index at given time
 * @param {int} time - unit of time passed
 * @returns [Particles] - array containing directions and index positions
 */
const getPosition = (particles, time) => {
  const positions = [];
  for (let prop of particles) {
    // we loop over and push each particle their current position in chamber
    positions.push(prop.positionAt(time));
  }
  return positions;
};
/**
 *
 * @param {*} positions - array of positions return by getPosition function
 * @param {*} size - chamber size / length
 * @returns {String} string containing 'X' and unoccupied position '.';
 */
const drawChamber = (positions, size) => {
  let str = '';
  for (let i = 0; i < size; i++) {
    if (positions.includes(i)) {
      str += 'X';
    } else {
      str += '.';
    }
  }
  return str;
};
/**
 *
 * @param [Particle] positions - array of Partcile instances
 * @param {int} size - chamber size / length
 * @returns {boolean} checks if chamber still has particles to move out
 */
const hasParticles = (positions, size) => {
  for (let prop of positions) {
    if (0 <= prop && prop <= size) {
      return true;
    }
  }
  return false;
};
/**
 *
 * @param {String} init - string value passed as argument
 * @param {int} speed - speed passed as argument
 * @returns [Particles] - array of Particle instance
 */
const buildParticles = (init, speed) => {
  const size = init.length;
  const particles = [];
  for (let i = 0; i < size; i++) {
    const current = init.charAt(i);
    if (current !== '.') {
      // instantiate with given parameters
      particles.push(new Particle(current, i, speed));
    }
  }
  return particles;
};

module.exports = {
  buildParticles,
  drawChamber,
  getPosition,
  hasParticles
};
