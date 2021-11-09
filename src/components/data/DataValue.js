import styles from './DataValue.module.css';

const DataValue = (props) => {
    return (
        <h3 className={styles.datastyle}>{props.value}</h3>
    )
};

export default DataValue;