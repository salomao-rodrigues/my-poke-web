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

export function getCandiesByPokemon(candies, id) {
  const { prev_evolution } = pokedex[id];
  
  if (prev_evolution) {
    const base = parseInt(prev_evolution[0].num);
    return candies[base].candy
  }

  return candies[id].candy;
}
