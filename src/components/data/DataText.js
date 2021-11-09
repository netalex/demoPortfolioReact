import styles from './DataText.module.css';
const DataText = (props) => {
    return (
        <p className={styles.datatext}>{props.text}</p>
    )
};

export default DataText;