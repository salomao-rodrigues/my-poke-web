import names from './pokemonNames';
import { moveToString } from './movelist';
import pokedex from './pokedex.json';

export function getIV(attack = 0, defense = 0, stamina = 0) {
  const iv = (parseFloat(attack + defense + stamina) / 45) * 100;
  return parseInt(iv * 100, 10) / 100;
}

export function getName(id) {
  return names[id];
}

export function getMoveName(id) {
  return moveToString(id);
}

export function getFamilyId(pokedexId) {
  const { prev_evolution } = pokedex[pokedexId];

  if (prev_evolution) {
    return parseInt(prev_evolution[0].num);
  }

  return pokedexId;
}

export function getCandiesByPokemon(candies, id) {
  return candies[getFamilyId(id)].candy;
}

export function mapArrayToObject(arr, key) {
  return arr.reduce((mapped, value) => {
    mapped[value[key]] = value;
    return mapped;
  }, {});
}
