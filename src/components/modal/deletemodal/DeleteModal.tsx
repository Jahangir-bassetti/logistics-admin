import React from 'react';
import './DeleteModal.css';
import MyModalProps from '../../../interface/DeleteModalInterface';


export const MyModal: React.FC<MyModalProps> = ({ id, setShowModal, action }) => {
  const closeModal = () => {
    setShowModal('');
  };

  const confirmModal = () => {
    action(id as string);
    setShowModal('');
  };

  return (
    <>
      <div className="modal-content">
        <h2 className="modal-title">Delete Confirmation</h2>
        <div className="close-btn">
          <button className="close" onClick={closeModal}>
            &times;
          </button>
        </div>
        <p className="modal-body">Are you sure you want to delete this item?</p>
        <button className="cancelBtn me-5 ms-10" onClick={closeModal}>
          Cancel
        </button>
        <button className="deleteBtn" onClick={confirmModal}>
          Delete
        </button>
      </div>
    </>
  );
};
