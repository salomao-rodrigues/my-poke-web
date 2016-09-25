import baseStats from '../data/baseStats.json';
import levelMultipliers from '../data/levelMultipliers.json';
import sortedIndex from 'lodash/sortedIndex';

const MAX_LEVEL = 40;

/**
 * Retrieves index to the closest value to cpMultiplier
 *
 * @param  {int} cpMultiplier
 *
 * @return {int}
 */
const findClosestIndex = (cpMultiplier) => {
  const index = sortedIndex(levelMultipliers, cpMultiplier);

  if (index === 0 || index === levelMultipliers.length) {
    return index;
  }

  if (
    Math.abs(levelMultipliers[index] - cpMultiplier)
    <= Math.abs(levelMultipliers[index - 1] - cpMultiplier)
  ) {
    return index;
  }

  return index - 1;
};

export function getPokemonLevel(cpMultiplier) {
  // We can have half levels
  return Math.min(findClosestIndex(cpMultiplier) * 0.5 + 1, MAX_LEVEL);
}

const getLevelMultiplier = (level) => {
  const index = (level - 1) / 0.5;

  return levelMultipliers[index];
};

const getBaseAttack = (pokedexId) => {
  const base = baseStats[pokedexId];

  return 2.6
    * Math.pow(base.attack, 0.46)
    * Math.pow(base.spa, 0.46)
    * Math.pow(base.speed, 0.04)
    + 3;
};

const getBaseDefense = (pokedexId) => {
  const base = baseStats[pokedexId];

  return 2.6
    * Math.pow(base.defense, 0.46)
    * Math.pow(base.spd, 0.46)
    * Math.pow(base.speed, 0.04)
    + 3;
};

const getBaseStamina = (pokedexId) => 2 * baseStats[pokedexId].hp;

/**
 * Retrieve Max CP per level
 * If level param is omitted, max level will be used
 * Max CP is not exactly 100% correct, as the game lets you power up higher
 *
 * @param  {object} pokemon
 * @param  {int} level
 *
 * @return {int}
 */
export function getMaxCP(
  pokemon = {},
  playerLevel = MAX_LEVEL
) {
  const {
    pokemon_id,
    individual_attack,
    individual_defense,
    individual_stamina,
    cp_multiplier,
    additional_cp_multiplier
  } = pokemon;

  const base = baseStats[pokemon_id];

  const baseAttack = getBaseAttack(pokemon_id);
  const baseDefense = getBaseDefense(pokemon_id);
  const baseStamina = getBaseStamina(pokemon_id);

  const totalCPMultiplier = getLevelMultiplier(playerLevel);

  const attack = (baseAttack + individual_attack) * totalCPMultiplier;
  const defense = (baseDefense + individual_defense) * totalCPMultiplier;
  const stamina = (baseStamina + individual_stamina) * totalCPMultiplier; //HP

  const maxLevelCP = Math.max(
    10,
    Math.floor(
      attack *
      Math.sqrt(stamina)
      * Math.sqrt(defense) / 10
    )
  );

  return maxLevelCP;
}
