import styles from './ButtonBar.module.css';
import globals from '../../App.module.css'

const ButtonBar = () => {
  return (
    <div className={styles.button_section}>
        
      <div className={`${styles.button_bar} ${globals.centered_section}`}>
        <div className={`${styles.button} b1 ${globals.centered_section}`}>
          <i className="far fa-user"></i>
        </div>
        <div className={`${styles.button} b2 ${globals.centered_section}`}>
          <i className="far fa-envelope"></i>
        </div>
        <div className={`${styles.button} b3 ${globals.centered_section}`}>
          <i className="far fa-calendar-alt"></i>
        </div>
        <div className={`${styles.button} b4 ${globals.centered_section}`}>
          <i className="fas fa-map-marked-alt"></i>
        </div>
        <div className={`${styles.button} b5 ${globals.centered_section}`}>
          <i className="fas fa-phone-alt"></i>
        </div>
        <div className={`${styles.button} b6 ${globals.centered_section}`}>
          <i className="fas fa-lock"></i>
        </div>
      </div>
    </div>
  );
};
export default ButtonBar;