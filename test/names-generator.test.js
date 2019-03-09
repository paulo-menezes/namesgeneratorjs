'use strict';

const expect = require('chai').expect;
const getRandomName  = require('../names-generator');

describe('getRandomName()', () => {
  it('should return a name in the format string_string', () => {
    const name = getRandomName();
    expect(name).to.match(/\b[a-z]+_[a-z]+\b/g);
  });

  it('should return a random name with a number between 0 and 10 added to the end when passing retry', () => {
    const name = getRandomName(1);
    expect(name).to.match(/\b[a-z]+_[a-z]+[0-9]{1,2}\b/g);
    expect(parseInt(name.match(/[0-9]+/g))).to.be.at.most(10);
  });
});