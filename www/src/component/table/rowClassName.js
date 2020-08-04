import styles from "./index.module.css";
export function rowClassName(_record, index) {
  return index % 2 === 0 ? styles.evenRow : styles.oddRow;
}
