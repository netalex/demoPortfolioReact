import styles from './IconButton.module.css'
const IconButton = (props) => {
    return (
        <div className={`${styles.button} b${props.i}`}>
            <div className={styles.arrow} />
            <i className={`${styles.i} ${props.iconName}`} />
          </div>
    );
}
export default IconButton;