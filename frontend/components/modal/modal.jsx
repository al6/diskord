import React from "react";
import ModalPortal from "./modal_portal";

export const ModalContext = React.createContext();

const Content = ({ children, ...otherProps }) => (
  <ModalContext.Consumer>
    {({ isOpen, closeModal }) => {
      if (!isOpen) {
        return <div></div>;
      }

      return (
        <ModalPortal>
          <div onClick={closeModal} className="modal-content-container">
            <div
              onClick={e => e.stopPropagation()}
              className="modal-content"
              {...otherProps}
            >
              {children}
            </div>
          </div>
        </ModalPortal>
      );
    }}
  </ModalContext.Consumer>
);

const CloseButton = ({ children, ...otherProps }) => (
  <ModalContext.Consumer>
    {({ closeModal }) => {
      return (
        <div onClick={closeModal} {...otherProps}>
          {children}
        </div>
      );
    }}
  </ModalContext.Consumer>
);

const OpenButton = ({ children, ...otherProps }) => (
  <ModalContext.Consumer>
    {({ openModal }) => {
      return (
        <div onClick={openModal} {...otherProps}>
          {children}
        </div>
      );
    }}
  </ModalContext.Consumer>
);

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(newVal) {
    this.setState({ modalIsOpen: newVal });
  }

  render() {
    const { children } = this.props;

    return (
      <ModalContext.Provider
        value={{
          isOpen: this.state.modalIsOpen,
          openModal: () => this.toggleModal(true),
          closeModal: () => this.toggleModal(false)
        }}
      >
        {children}
      </ModalContext.Provider>
    );
  }
}

Modal.OpenButton = OpenButton;
Modal.CloseButton = CloseButton;
Modal.Content = Content;

export default Modal;
