import React from 'react';
import PropTypes from 'prop-types';

function ModalFooter({ children }) {
  return (
    <div class="modal-footer">
      {children}
      {/* <button
      type="button"
      class="btn btn-secondary"
      data-dismiss="modal"
    >
      Close
    </button> */}
    </div>
  );
}

ModalFooter.propTypes = {};

export default ModalFooter;
