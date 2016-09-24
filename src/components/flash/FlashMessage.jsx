import React from 'react';
import classnames from 'classnames';

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  componentWillMount() {
    if (this.props.timeout) {
      setTimeout(
        () => { this.props.deleteFlashMessage(this.props.message.id)},
        this.props.timeout
      );
    }
  }

  render() {
    const { type, text } = this.props.message;
    return (
      <div>
        <div className={classnames('alert', {
          'alert-success': type === 'success',
          'alert-danger': type === 'error'
        })}>
          { !this.props.timeout && <button onClick={this.onClick} className="close"><span>&times;</span></button>}
          {text}
        </div>
      </div>
    );
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
}

export default FlashMessage;
