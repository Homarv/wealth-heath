import React from 'react';

const ModalCreateEmployee = ({ onClose }) => {
  return (
    <div className='modal-employee-created'>
      <button onClick={onClose} className="close-button">
        X
      </button>
      Employee Created!
    </div>
  );
};

export default ModalCreateEmployee;
xcode-select --install