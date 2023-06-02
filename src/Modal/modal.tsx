import React, { useState } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  if (!isModalOpen) {
    return null; // Render nothing if the modal is closed
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Modal Title</h2>
          <button className="close-button" onClick={closeModal}>
            X
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
