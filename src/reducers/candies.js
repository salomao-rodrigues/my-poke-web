import * as ActionTypes from '../constants/ActionTypes';

const mapCandiesToObject = candies => {
  return candies.reduce((newCandies, candy) => {
    newCandies[candy.family_id] = candy;
    return newCandies;
  }, {});
};

export default function candy(state = {}, action) {
  switch(action.type) {
    case ActionTypes.LOAD_PLAYER_DATA:
      return mapCandiesToObject(action.data.candies);
  }

  return state;
}
