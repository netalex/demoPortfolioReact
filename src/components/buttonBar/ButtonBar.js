import styles from "./ButtonBar.module.css";
import IconButton from "../UI/card/iconButton/IconButton";

const ButtonBar = () => {
  const iconNames = [
    "far fa-user",
    "far fa-envelope",
    "far fa-calendar-alt",
    "fas fa-map-marked-alt",
    "fas fa-phone-alt",
    "fas fa-lock"
  ];
  return (
    <div className={styles.button_section}>
      <div className={styles.button_bar}>
        <div className={styles.buttons}>
          {iconNames.map((iconName, idx) => {
            return <IconButton key={idx} i={idx} iconName={iconName} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default ButtonBar;
