// Modal.js
import React from "react";
import "../css/model.css";

function Modal({ isOpen, onClose, message }) {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Modal;
