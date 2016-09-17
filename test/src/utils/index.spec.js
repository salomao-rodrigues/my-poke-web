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

  describe('Get Max CP', function () {
    it('should return correct max cp', function () {
      const id = 1;
      const indAttack = 0;
      const indDefense = 1;
      const indStamina = 12;
      const CPMultiplier = 0.612157;
      const additionalCpMultiplier = 0;
      const levelMultiplier = ;

      const maxCP = getMaxCP(
        id,
        indAttack,
        indDefense,
        indStamina,
        CPMultiplier,
        additionalCpMultiplier,
        levelMultiplier
      );

      console.log(maxCP)

      assert.equal(maxCP, 9000);
    });
  });
});
