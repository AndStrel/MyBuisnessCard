import { FC, memo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { TModalProps } from '@shared/types/modal';
import { ModalUI } from './ModalUI';

let modalRoot = document.getElementById('modals');

if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modals');
  document.body.appendChild(modalRoot);
}

export const Modal: FC<TModalProps> = memo(({ onClose, children }) => {
  useEffect(() => {
    // Блокируем скролл при открытии модального окна
    // document.body.style.overflow = 'hidden';
    const handleEsc = (e: KeyboardEvent) => {
      e.key === 'Escape' && onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      // document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalUI onClose={onClose}>{children}</ModalUI>,
    modalRoot as HTMLDivElement,
  );
});
