import styles from "./ButtonBar.module.css";
import IconButton from "../UI/iconButton/IconButton";

const ButtonBar = (props) => {

  const {iconNames, onGetButton, sectionSelected} = props;

  return (
    <div className={styles.button_section}>
      <div className={styles.button_bar}>
        <div className={styles.buttons}>
          {iconNames.map((iconName, idx) => {
            return <IconButton 
            key={idx} 
            i={idx} 
            iconName={iconName} 
            onHover={onGetButton}
            stat={sectionSelected===idx ? true : false}
            />;
          })}
        </div>
      </div>
    </div>
  );
};
export default ButtonBar;
