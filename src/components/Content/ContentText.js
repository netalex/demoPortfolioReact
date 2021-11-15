import styles from './ContentText.module.css';
const ContentText = (props) => {
    const {text} = props;
    return (
        <p className={styles.contenttext}>{text}</p>
    )
};

export default ContentText;