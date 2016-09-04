import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getPokemons } from '../reducers/pokeweb';
import firstBy from 'thenby';

import Pokemon from './Pokemon.jsx';

class Pokemons extends React.Component {
  constructor(props) {
    super(props);

    this.sortPokemons(props.pokemons, props.orderBy);
  }

  /**
   * @todo make this user defined, not hardcoded
   */
  sortPokemons(pokemons, property) {
    pokemons.length && pokemons.sort(
      firstBy((first, second) => first[property] - second[property])
      .thenBy((first, second) => second.cp - first.cp)
    );
  }

  renderPokemons(pokemons) {
    return pokemons.map(pokemon => {
      if (pokemon.pokemon_id) {
        return <Pokemon key={pokemon.id} data={pokemon} />
      }

      return null;
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Pokemons</h1>
        {this.renderPokemons(this.props.pokemons)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemons: getPokemons(state)
});

Pokemons.defaultProps = {
  orderBy: 'pokemon_id',
  pokemons: []
}

export default withRouter(connect(mapStateToProps)(Pokemons));
