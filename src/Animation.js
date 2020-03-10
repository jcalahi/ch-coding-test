const {
  buildParticles,
  drawChamber,
  getPosition,
  hasParticles
} = require('./utils');

class Animation {
  static animate(speed, init) {
    // unit of time passed
    let time = 0;
    // holds the particle positions in string form to visualize movements of particles
    let chamberOverTime = [];

    const chamberSize = init.length;
    const particles = buildParticles(init, speed);
    // keeps looping until the chamber is empty
    while (true) {
      const particlePositions = getPosition(particles, time);
      chamberOverTime.push(drawChamber(particlePositions, chamberSize));

      if (!hasParticles(particlePositions, chamberSize)) {
        break;
      }
      // unit of time in each movement of particles
      time = time + 1;
    }
    return chamberOverTime;
  }
}

module.exports = Animation;

