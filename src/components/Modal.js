import React from 'react';
import './Modal.css'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
            {children}
          <footer className="border-top"> 
            <button className="closebutton" onClick={handleClose}>close</button>
          </footer>
        </section>
      </div>
    );
  };

  export default Modal