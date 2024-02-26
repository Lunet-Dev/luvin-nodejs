import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function Backdrop() {
  return ReactDOM.createPortal(
    <div className="modal-backdrop fade show"></div>,
    document.querySelector('body')
  );
}

function ModalPortal({ children, visible }) {
  useEffect(() => {
    if (visible) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [visible]);

  const targetElm = document.getElementById('modal-container');
  if (targetElm) {
    return ReactDOM.createPortal(
      children,
      document.getElementById('modal-container')
    );
  }
  return children;
}

function Modal({ children, visible }) {
  return (
    <ModalPortal visible={visible}>
      {visible && <Backdrop />}
      <div
        class={`modal fade ${visible ? 'show' : ''}`}
        style={{ display: visible ? 'block' : 'none' }}
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">{children}</div>
        </div>
      </div>
    </ModalPortal>
  );
}

Modal.propTypes = {};

export default Modal;
