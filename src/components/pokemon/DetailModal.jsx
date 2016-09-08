import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { avatarURI } from '../../config';
import { getIV, getName } from '../../utils';
import { getMoveName } from '../../utils';
import { release } from '../../actions/pokemon';

class DetailModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalIsOpen: true };

    this.confirmRelease = this.confirmRelease.bind(this);
  }

  confirmRelease() {
    if (confirm("Transfer for candy?")) { 
      this.props.release(this.props.pokemon.id)
    }
  }

  render() {
    const p = this.props.pokemon;
    const { candies } = this.props;

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
          src={avatarURI(p.pokemon_id)}
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
          onClick={this.confirmRelease}
          disabled="true">
          Upgrade
        </button>
      </Modal>
    );
  }
}

const mapStateToProps = ({ candies }, { pokemon }) => ({
  candies: candies[pokemon.pokemon_id] && candies[pokemon.pokemon_id].candy
});

export default connect(mapStateToProps, { release })(DetailModal);
