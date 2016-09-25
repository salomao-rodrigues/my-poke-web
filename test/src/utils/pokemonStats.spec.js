import { assert, expect } from 'chai';
import {
  getPokemonLevel,
  getMaxCP
} from '../../../src/utils/pokemonStats';

const inBounds = [
  {
    cp_multiplier: 0.095,
    expectedLevel: 1
  },{
    cp_multiplier: 0.29024988412857056,
    expectedLevel: 5
  }, {
    cp_multiplier: 0.37522,
    expectedLevel: 8
  }, {
    cp_multiplier: 0.37523558735847473,
    expectedLevel: 8
  }, {
    cp_multiplier: 0.37526,
    expectedLevel: 8
  }, {
    cp_multiplier: 0.42250001430511475,
    expectedLevel: 10
  }, {
    cp_multiplier: 0.6406529545783997,
    expectedLevel: 23
  }, {
    cp_multiplier: 0.7902,
    expectedLevel: 40
  }
];

const lowerBound = [
  {
    cp_multiplier: 0.093,
    expectedLevel: 1
  }, {
    cp_multiplier: 0.0939,
    expectedLevel: 1
  },
];

const upperBound = [
  {
    cp_multiplier: 0.790300010001,
    expectedLevel: 40
  }/*, {
    cp_multiplier: 0.7903003,
    expectedLevel: 40
  },*/
];

describe('Pokemon Stats', function () {
  describe('getPokemonLevel', function () {
    it('retrieves correct level when multiplier within bounds', function () {
      let i;

      for (i = 0; i < inBounds.length; i += 1) {
        assert.equal(
          getPokemonLevel(inBounds[i].cp_multiplier),
          inBounds[i].expectedLevel
        );
      }
    });

    it('retrieves correct level when out of lower bound', function () {
      let i;

      for (i = 0; i < lowerBound.length; i += 1) {
        assert.equal(
          getPokemonLevel(lowerBound[i].cp_multiplier),
          lowerBound[i].expectedLevel
        );
      }
    });

    it('retrieves correct level when out of upper bound', function () {
      let i;

      for (i = 0; i < upperBound.length; i += 1) {
        assert.equal(
          getPokemonLevel(upperBound[i].cp_multiplier),
          upperBound[i].expectedLevel
        );
      }
    });
  });

  describe('getMaxCP', function () {
    xit('Calculates max cp [No one knows exact math]', function () {
    });
  });
});
