import PropTypes from 'prop-types';
import { Component } from 'react';

import { ModalWindow, Overlay } from './Modal.styled';

class Modal extends Component {
  static propTypes = {
    largeImageUrl: PropTypes.string.isRequired,
    modalToggle: PropTypes.func.isRequired,
  };

  onClose = e => {
    if (e.code === 'Escape') {
      this.props.modalToggle(this.props.largeImageUrl);
      window.removeEventListener();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onClose);
  }

  render() {
    const { largeImageUrl, modalToggle } = this.props;
    return (
      <Overlay onClick={modalToggle}>
        <ModalWindow>
          <img src={largeImageUrl} alt="LargeImage" />
        </ModalWindow>
      </Overlay>
    );
  }
}

export default Modal;
