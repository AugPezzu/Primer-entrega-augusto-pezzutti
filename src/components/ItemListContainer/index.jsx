import styles from './ItemListContainer.module.css'
export const ItemListContainer = (props) => {
    return <div className={styles.container}>{props.text}</div>;
  };
  