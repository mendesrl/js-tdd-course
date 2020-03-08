/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-var */
/* eslint-disable no-undef */
// eslint-disable-next-line no-var
var { expect } = require('chai');
var calc = require('../src/main');
// eslint-disable-next-line no-undef
describe('Calc', () => {
  // eslint-disable-next-line no-undef
  describe('Smoke test', () => {
    it('should exist the calc lib', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(calc).to.exist;
    });

    it('should exist the method `sum`', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method `sub`', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist the method `mul`', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(calc.mul).to.exist;
      expect(calc.mul).to.be.a('function');
    });

    it('should exist the method `div`', () => {
      // eslint-disable-next-line no-unused-expressions
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });
  });
});
