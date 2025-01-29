import styles from './cursor.module.scss';
import clsx from 'clsx';

interface CursorProps {
  cursorRef: React.RefObject<HTMLDivElement>;
  auraRef: React.RefObject<HTMLDivElement>;
  cursorOut: boolean;
  isHovered: boolean;
}
export const Cursor: React.FC<CursorProps> = ({
  cursorRef,
  auraRef,
  cursorOut,
  isHovered,
}) => {
  return (
    <>
      <div
        ref={cursorRef}
        className={clsx(styles.cursor, {
          [styles.cursorOut]: cursorOut,
          [styles.hovered]: isHovered,
        })}
      />
      <div
        ref={auraRef}
        className={clsx(styles.aura, {
          [styles.cursorOut]: cursorOut,
          [styles.hovered]: isHovered,
        })}
      ></div>
    </>
  );
};
