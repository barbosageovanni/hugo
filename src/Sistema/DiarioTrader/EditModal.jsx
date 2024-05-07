import React, { useState, useEffect, useRef } from 'react'; // Adicione useState e useRef
import { createPortal } from 'react-dom';

function EditModal({ isOpen, fieldName, currentValue, onSave, closeEditModal }) {
  const [value, setValue] = useState(currentValue);
  const inputRef = useRef(null);

  useEffect(() => {
    setValue(currentValue);
    if (isOpen) {
      inputRef.current?.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeEditModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentValue, closeEditModal]);

  const handleSave = () => {
    onSave(value);
    closeEditModal();
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === 'modalBackdrop') {
      closeEditModal();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div id="modalBackdrop" className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content" role="dialog" aria-modal="true">
        <input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} aria-label={fieldName} />
        <div className="modal-footer">
          <button aria-label="Salvar" onClick={handleSave}>Salvar</button>
          <button aria-label="Fechar" onClick={closeEditModal}>Fechar</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default EditModal;
