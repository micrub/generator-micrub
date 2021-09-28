

const { debug, now, debugInit} = require('../utils');
const { dispatchMain } = require('../index');
const { describe } = require('mocha');
const { expect } = require('chai');

describe('Smoke test', () => {
  describe('Base line test', () => {
    it('Should assume true is true', async () => {
      expect(true).to.be.true;
    });
  });
});
const d = debugInit();
describe('Source files', () => {
  describe('./utils', () => {
    it('Should expose utils functions.', () => {
      expect(debug).to.be.instanceOf(Function);
      expect(debugInit).to.be.instanceOf(Function);
      expect(now).to.be.instanceOf(Function);
    });
    describe('debug function', () => {
      it('Should return a function.', () => {
        const tempNameSpace = 'some-name-space' + now();
        expect(debug(tempNameSpace)).to.be.instanceOf(Function);
      });
    });
    describe('debugInit function', () => {
      it('Should return a function when initiated with or without arguments.', () => {
        expect(debugInit()).to.be.instanceOf(Function);
      });
    });
    describe('now function', () => {
      const ts = now();
      d(typeof ts);
      it('Should return a current timestamp as integer.', () => {
        expect(typeof ts).to.eq('number');
      });
    });
  }); 
});
