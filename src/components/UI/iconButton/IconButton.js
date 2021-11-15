import styles from "./IconButton.module.css";
import {useState} from "react";

const IconButton = (props) => {
  const [status, setStatus] = useState(false);
  const {onHover, i, iconName} = props;
  const hoverIn = () => {
    setStatus(status => !status);
    !status && onHover(i);
  };
  const hoverOut= () => {
    setStatus(status => !status);
  }

  return (
    <div
      className={`${styles.button} b${i} ${status && styles.selected}`}
      onMouseEnter={hoverIn}
      // onMouseLeave={hoverOut}
    >
      <div className={styles.arrow} />
      <i className={`${styles.i} ${iconName}`} />
    </div>
  );
};
export default IconButton;
