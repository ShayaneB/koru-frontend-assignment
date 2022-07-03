import React from "react";
import TableTabs from "../ModalContent/Tabs";

const Modal = ({ isShowing, hide }) =>
  isShowing ? (
    <React.Fragment>
      <div className="modal-overlay" />
      <div
        className="modal-wrapper"
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal">
          <div className="modal-header">
            <span>Alerts</span>
            <button
              type="button"
              className="modal-close-button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <TableTabs />
        </div>
      </div>
    </React.Fragment>
  ) : null;

export default Modal;
