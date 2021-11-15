import styles from './ContentValue.module.css';

const ContentValue = (props) => {
    const { value } = props;
    return (
        <h3 className={styles.contentstyle}>{value}</h3>
    )
};

export default ContentValue;