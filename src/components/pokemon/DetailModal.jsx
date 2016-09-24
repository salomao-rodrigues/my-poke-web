import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import pokedex from '../../utils/pokedex.json';
import { getCandiesByPokemon, getIV, getMoveName } from '../../utils';
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

      release(pokemon.id, pokemon.pokemon_id);
    }
  }

  confirmEvolve() {
    const { evolve, pokemon } = this.props;

    if (confirm('Evolve pokemon?')) {
      this.setState({
        modalIsOpen: false
      });
      evolve(pokemon.id, pokedex[pokemon.pokemon_id].name);
    }
  }

  renderEvolutionSection(candiesNeeded, candiesGotten) {
    const hasEnoughCandies = candiesNeeded <= candiesGotten;
    const className = 'btn ' + (hasEnoughCandies ? 'btn-info' : 'btn-default');

    return <p className="p-evolve">
      <button
        type="button"
        className={className}
        onClick={this.confirmEvolve}
        disabled={!hasEnoughCandies}
      >
        Evolve
      </button>
      <span>&nbsp;{candiesNeeded}&nbsp;/&nbsp;{candiesGotten}&nbsp;candies</span>
    </p>
  }

  render() {
    const p = this.props.pokemon;
    const { candies } = this.props;
    const pokedexEntry = pokedex[p.pokemon_id];
    const iv = getIV(p.individual_attack, p.individual_defense, p.individual_stamina);

    return (
      <Modal
        closeTimeoutMS={150}
        overlayClassName={this.props.overlayClassName}
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.props.onRequestClose}
        className="detail-modal"
      >
        <h1>{ p.nickname || pokedexEntry.name }</h1>
        <img
          className="p-avatar"
          src={pokedexEntry.img}
          alt={JSON.stringify(this.props.data, null, 2)}
        />
        <ul>
          <li>CP - {p.cp}</li>
          <li>IV - {iv}%</li>
          <li>Move 1 - {getMoveName(p.move_1)}</li>
          <li>Move 2 - {getMoveName(p.move_2)}</li>
        </ul>
        { pokedexEntry.candy_count && this.renderEvolutionSection(pokedexEntry.candy_count, candies) }
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.confirmRelease}>
          Transfer
        </button>
      </Modal>
    );
  }
}

const mapStateToProps = ({ candies }, { pokemon }) => ({
  candies: getCandiesByPokemon(candies, pokemon.pokemon_id)
});

export default connect(mapStateToProps, { release, evolve })(DetailModal);
