import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import pokedex from '../../utils/pokedex.json';
import { getIV, getName } from '../../utils';
import { getMoveName } from '../../utils';
import { release, evolve } from '../../actions/pokemon';

class DetailModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalIsOpen: true };

    this.confirmRelease = this.confirmRelease.bind(this);
    this.confirmEvolve = this.confirmEvolve.bind(this);
  }

  confirmRelease() {
    const { release, pokemon } = this.props;

    if (confirm('Transfer for candy?')) {
      this.setState({
        modalIsOpen: false
      });
      release(pokemon.id, getName(pokemon.pokemon_id));
    }
  }

  confirmEvolve() {
    const { evolve, pokemon } = this.props;

    if (confirm('Evolve pokemon?')) {
      this.setState({
        modalIsOpen: false
      });
      evolve(pokemon.id, getName(pokemon.pokemon_id));
    }
  }

  render() {
    const p = this.props.pokemon;
    const { candies } = this.props;
    const pokedexEntry = pokedex[p.pokemon_id];

    return (
      <Modal
        closeTimeoutMS={150}
        overlayClassName={this.props.overlayClassName}
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.props.onRequestClose}
        className="detail-modal"
      >
        <h1>{ p.nickname || getName(p.pokemon_id)}</h1>
        <img
          className="p-avatar"
          src={pokedexEntry.img}
          alt={JSON.stringify(this.props.data, null, 2)}
        />
        <ul>
          <li>CP - {p.cp}</li>
          <li>IV - {getIV(p.individual_attack, p.individual_defense, p.individual_stamina)}%</li>
          <li>Candies - { candies }</li>
          <li>Move 1 - {getMoveName(p['move_1'])}</li>
          <li>Move 2 - {getMoveName(p['move_2'])}</li>
        </ul>
        <pre><h5>{JSON.stringify(this.props, null, 2)}</h5></pre>
        <button
          type="button"
          className="btn btn-warning"
          onClick={this.confirmRelease}>
          Transfer
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={this.confirmEvolve}>
          Evolve
        </button>
      </Modal>
    );
  }
}

const mapStateToProps = ({ candies }, { pokemon }) => ({
  candies: candies[pokemon.pokemon_id] && candies[pokemon.pokemon_id].candy
});

export default connect(mapStateToProps, { release, evolve })(DetailModal);
