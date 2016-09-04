import React from 'react';
import Modal from 'react-modal';
import { avatarURI } from '../../config';
import { getName } from '../../utils';
import { getMoveName } from '../../utils';

class DetailModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalIsOpen: true };
  }

  confirmTransfer() {
    if (confirm("Do you really want to leave?")) { 
      console.log('Omg he really wants to!')
    } else {
      console.log('Nah, just kidding!')
    }
  }

  render() {
    const p = this.props.pokemon;

    return (
      <Modal
        closeTimeoutMS={150}
        overlayClassName={this.props.overlayClassName}
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.props.onRequestClose}
      >
        <h1>{ p.nickname || getName(p.pokemon_id)}</h1>
        <img
          className="p-avatar"
          src={avatarURI(p.pokemon_id)}
          alt={JSON.stringify(this.props.data, null, 2)}
        />
        <ul>
          <li>CP - {p.cp}</li>
          <li>Move 1 - {getMoveName(p['move_1'])}</li>
          <li>Move 2 - {getMoveName(p['move_2'])}</li>
        </ul>
        <pre><h5>{JSON.stringify(this.props, null, 2)}</h5></pre>
        <button type="submit" onClick={this.confirmTransfer}>Transfer</button>
      </Modal>
    );
  }
}

export default DetailModal;
