import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import firstBy from 'thenby';

import PokeThumbnail from './pokemon/Thumbnail.jsx';

class Pokemons extends React.Component {
  /**
   * @todo make this user defined, not hardcoded
   */
  sortKeys(pokemons, property) {
    const keys = Object.keys(pokemons);

    keys.length && keys.sort(
      firstBy((first, second) => pokemons[first][property] - pokemons[second][property])
      .thenBy((first, second) => pokemons[second].cp - pokemons[first].cp)
    );

    return keys;
  }

  renderPokemons(pokemons) {
    const sorted = this.sortKeys(pokemons, this.props.orderBy);

    return sorted.map(id => {
      if (pokemons[id].pokemon_id) {
        return <PokeThumbnail key={id} data={pokemons[id]} />
      }

      return null;
    });
  }

  render() {
    return (
      <div>
        <h1>Pokemons</h1>
        {this.renderPokemons.call(this, this.props.pokemons)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemon
});

Pokemons.defaultProps = {
  orderBy: 'pokemon_id',
  pokemons: {}
}

export default withRouter(connect(mapStateToProps)(Pokemons));
