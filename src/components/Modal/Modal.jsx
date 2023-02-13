import PropTypes from 'prop-types';
import { Component } from 'react';

import { ModalWindow, Overlay } from './Modal.styled';

class Modal extends Component {
  static propTypes = {
    largeImageUrl: PropTypes.string.isRequired,
    modalToggle: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onClose);
  }

  onClose = e => {
    if (e.code === 'Escape') {
      this.props.modalToggle(this.props.largeImageUrl);
    }
  };

  onCloseByOverlay = e => {
    if (e.target === e.currentTarget) {
      this.props.modalToggle(this.props.largeImageUrl);
    }
  };

  render() {
    const { largeImageUrl } = this.props;
    return (
      <Overlay onClick={this.onCloseByOverlay}>
        <ModalWindow>
          <img src={largeImageUrl} alt="LargeImage" />
        </ModalWindow>
      </Overlay>
    );
  }
}

export default Modal;
