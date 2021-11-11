import styles from "./ButtonBar.module.css";
import IconButton from "../UI/card/iconButton/IconButton";

const ButtonBar = (props) => {

  return (
    <div className={styles.button_section}>
      <div className={styles.button_bar}>
        <div className={styles.buttons}>
          {props.iconNames.map((iconName, idx) => {
            return <IconButton 
            key={idx} 
            i={idx} 
            iconName={iconName} 
            onHover={props.onGetButton}
            />;
          })}
        </div>
      </div>
    </div>
  );
};
export default ButtonBar;
