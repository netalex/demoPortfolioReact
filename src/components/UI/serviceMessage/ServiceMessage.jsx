
import styles from './ServiceMessage.module.css';

const ServiceMessage = (props) => {
    return (
        <h1 className={`${styles.messagePar} ${styles[props.type]}`}>{props.msg}</h1>
    )
};

export default ServiceMessage;