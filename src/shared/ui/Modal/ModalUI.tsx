import { FC, memo } from 'react';

import styles from './modal.module.scss';

import { TModalUIProps } from '@shared/types/modal';
import { ModalOverlay } from '@shared/ui/ModalOverlay';

export const ModalUI: FC<TModalUIProps> = memo(({ onClose, children }) => (
  <>
    <div className={styles.modal} data-cy="modal">
      <div className={styles.header}>
        <button
          className={styles.button}
          type="button"
          data-cy="modal-close-button"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
    <ModalOverlay onClick={onClose} />
  </>
));
