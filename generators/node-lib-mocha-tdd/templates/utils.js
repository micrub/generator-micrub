const debug = require('debug');

function debugInit(namespace) {
  if (!namespace) {
    const pkg = require('./package.json');
    namespace = pkg.name || 'NOTDEFINED utils.js';
  }
  const d = debug(namespace);
  return d;
}

function now() {
  return Date.now()
}
module.exports = {
  debug,
  debugInit,
  now
}