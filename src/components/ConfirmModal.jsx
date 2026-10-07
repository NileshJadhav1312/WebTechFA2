import React, { useEffect, useCallback } from 'react';
import { AlertTriangle, X } from 'lucide-react';

/**
 * ConfirmModal component adhering to Accessibility:
 * - role="dialog" & aria-modal="true"
 * - Escape key listener
 * - 44x44 minimum touch targets
 */
export default function ConfirmModal({
  isOpen,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  danger = false,
  onConfirm,
  onCancel
}) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape' && isOpen) {
        onCancel();
      }
    },
    [isOpen, onCancel]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onCancel} role="presentation">
      <div
        className="modal-content confirm-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-modal-title"
        aria-describedby="confirm-modal-desc"
      >
        <div className="confirm-modal-header">
          <div
            className="confirm-icon-wrap"
            style={{ backgroundColor: danger ? '#fee2e2' : '#e0e7ff' }}
            aria-hidden="true"
          >
            <AlertTriangle size={22} color={danger ? '#dc2626' : '#4f46e5'} />
          </div>
          <div>
            <h3 id="confirm-modal-title" className="confirm-title">{title}</h3>
            <p id="confirm-modal-desc" className="confirm-message">{message}</p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onCancel}
            aria-label="Close modal"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="confirm-actions">
          <button
            type="button"
            className="btn-secondary"
            onClick={onCancel}
            aria-label={cancelText}
          >
            {cancelText}
          </button>
          <button
            type="button"
            className={danger ? 'btn-danger' : 'btn-primary'}
            onClick={onConfirm}
            aria-label={confirmText}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
