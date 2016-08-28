import React from 'react';
import pokemons from '../helpers/pokemons';
import config from '../config';

class Pokemon extends React.Component {
  calculateIv(data) {
    const attack = data.individual_attack || 0;
    const defense = data.individual_defense || 0;
    const stamina = data.individual_stamina || 0;
    let iv = (parseFloat(attack + defense + stamina) / 45) * 100;
    iv = parseInt(iv * 100, 10) / 100;

    return iv;
  }

  render() {
    const { id, cp, nickname, pokemon_id } = this.props.data;
    return (
      <div className="pokemon" >
        <img
          className="p-avatar"
          src={config.avatarURI(pokemon_id)}
          alt={JSON.stringify(this.props.data, null, 2)}
        />
        <div className="p-name">{pokemons[pokemon_id]}</div>
        <div className="p-cp">{cp}</div>
        <div className="p-iv">IV - {this.calculateIv(this.props.data)}%</div>
      </div>
    );
  }
}

export default Pokemon
