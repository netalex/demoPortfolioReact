
import styles from './Message.module.css';

const Message = (props) => {
    const {type, msg} = props;
    return (
        <h1 className={`${styles.messagePar} ${styles[type]}`}>{msg}</h1>
    )
};

export default Message;