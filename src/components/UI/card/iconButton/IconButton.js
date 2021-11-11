import styles from "./IconButton.module.css";
import {useState} from "react";

const IconButton = (props) => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
    {hover && props.onHover(props.i)};
  };

  return (
    <div
      className={`${styles.button} b${props.i} ${hover && styles.selected}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className={styles.arrow} />
      <i className={`${styles.i} ${props.iconName}`} />
    </div>
  );
};
export default IconButton;
