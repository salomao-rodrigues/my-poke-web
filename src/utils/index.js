import names from './pokemonNames';
import { moveToString } from './movelist';
import baseStats from './baseStats.json';
import levelMultipliers from './levelMultipliers.json';
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

/**
 * Retrieve Max CP per level
 * @param  {[type]} pokemon         [description]
 * @param  {[type]} levelMultiplier [description]
 * @return {[type]}                 [description]
 */
export function getMaxCP(
  pokemon = {},
  levelMultiplier = null
) {
  const {
    pokemon_id = 0,
    individual_attack = 0,
    individual_defense = 0,
    individual_stamina = 0,
    cp_multiplier = 0,
    additional_cp_multiplier = 0
  } = pokemon;

  const base = baseStats[pokemon_id];

  const baseAttack =
    2.6
    * Math.pow(base.attack, 0.46)
    * Math.pow(base.spa, 0.46)
    * Math.pow(speed, 0.04)
    + 3;

  const baseDefense =
    2.6
    * Math.pow(base.defense, 0.46)
    * Math.pow(base.spd, 0.46)
    * Math.pow(speed, 0.04)
    + 3;

  const baseStamina = 2 * base.hp;

  const totalCPMultiplier = cp_multiplier + additional_cp_multiplier;

  const attack = (baseAttack + individual_attack) * totalCPMultiplier;
  const defense = (baseDefense + individual_defense) * totalCPMultiplier;
  const stamina = (baseStamina + individual_stamina) * totalCPMultiplier; //HP

  const maxLevelCP =
    attack
    * Math.pow(defense, 0.5)
    * Math.pow(stamina, 0.5)
    * Math.pow(totalCPMultiplier, 2) / 10;

  return maxLevelCP;
}
