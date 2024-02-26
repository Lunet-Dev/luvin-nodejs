import React from 'react';
import PropTypes from 'prop-types';

function ModalHeader({ children }) {
  return (
    <div class="modal-header">
      {children}
      {/* <h5 class="modal-title" id="exampleModalLabel">
          Order Details
        </h5>
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button> */}
    </div>
  );
}

ModalHeader.propTypes = {};

export default ModalHeader;
