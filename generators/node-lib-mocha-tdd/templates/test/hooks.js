const setup = require('./global-setup.js');
const teardown = require('./global-teardown.js');


exports.mochaGlobalSetup = async () => {
  await setup();
};

exports.mochaGlobalTeardown = async () => {
  await teardown();
};
