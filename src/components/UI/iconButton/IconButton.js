import styles from "./IconButton.module.css";

const IconButton = (props) => {
  const {onHover, i, iconName, stat} = props;
  let hover = stat;
  const hoverIn = () => {
     onHover(i);
  };
  const hoverOut= () => {
    hover = !hover;
  }

  return (
    <div
      className={`${styles.button} b${i} ${/* status */ hover && styles.selected}`}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
    >
      <div className={styles.arrow} />
      <i className={`${styles.i} ${iconName}`} />
    </div>
  );
};
export default IconButton;
