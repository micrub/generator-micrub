'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-micrub:node-lib-mocha-tdd', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/node-lib-mocha-tdd'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
  });
});
