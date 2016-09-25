import { assert, expect } from 'chai';
import {
  getName,
  getMoveName,
  getMaxCP
} from '../../../src/utils/';

const defaultErrorMessage = 'Pokemon name dind\'t match';

describe('Utils', function () {
  describe('Get Name', function () {
    it('should return correct pokemon name', function () {
      assert.equal(getName(1), 'Bulbasaur', defaultErrorMessage);
      assert.equal(getName(10), 'Caterpie', defaultErrorMessage);
      assert.equal(getName(108), 'Lickitung', defaultErrorMessage);
      assert.notEqual(getName(111), 'Tangela', defaultErrorMessage);
      assert.equal(getName(151), 'Mew', defaultErrorMessage);
    });
  });
});
