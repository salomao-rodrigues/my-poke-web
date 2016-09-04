import React from 'react';
import { getName } from '../../utils';
import { avatarURI } from '../../config';

import DetailModal from './DetailModal.jsx';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    };

    this.hideDetails = this.hideDetails.bind(this);
  }
  calculateIv(data) {
    const attack = data.individual_attack || 0;
    const defense = data.individual_defense || 0;
    const stamina = data.individual_stamina || 0;
    let iv = (parseFloat(attack + defense + stamina) / 45) * 100;
    iv = parseInt(iv * 100, 10) / 100;

    return iv;
  }

  showDetails() {
    this.setState({
      showDetails: true
    });
  }

  hideDetails() {
    this.setState({
      showDetails: false
    });
  }

  renderDetails(pokemon, onCloseHandler) {
    return <DetailModal
      pokemon={pokemon}
      onRequestClose={onCloseHandler}
    />
  }

  render() {
    const { id, cp, nickname, pokemon_id } = this.props.data;
    return (
      <div className="pokemon-thumb" onClick={this.showDetails.bind(this)}>
        {this.state.showDetails && this.renderDetails(this.props.data, this.hideDetails)}
        <img
          className="p-avatar"
          src={avatarURI(pokemon_id)}
          alt={JSON.stringify(this.props.data, null, 2)}
        />
        <div className="p-name">{getName(pokemon_id)}</div>
        <div className="p-cp">{cp}</div>
        <div className="p-iv">IV - {this.calculateIv(this.props.data)}%</div>
      </div>
    );
  }
}

export default Pokemon
