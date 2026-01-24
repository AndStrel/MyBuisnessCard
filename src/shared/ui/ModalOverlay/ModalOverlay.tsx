import styles from './modal-overlay.module.scss';

export const ModalOverlay = ({ onClick }: { onClick: () => void }) => (
  <div className={styles.overlay} onClick={onClick} data-cy="modal-overlay" />
);
