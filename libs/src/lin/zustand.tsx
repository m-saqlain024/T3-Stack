import styles from './zustand.module.css';

/* eslint-disable-next-line */
export interface ZustandProps {}

export function Zustand(props: ZustandProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Zustand!</h1>
    </div>
  );
}

export default Zustand;
