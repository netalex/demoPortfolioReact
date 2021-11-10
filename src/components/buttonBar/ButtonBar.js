import styles from './ButtonBar.module.css';

const ButtonBar = () => {
  return (
    <div className={styles.button_section}>
        
      <div className="button_bar centered_section">
        <div className="button b1 centered_section">
          <i className="far fa-user"></i>
        </div>
        <div className="button b2 centered_section">
          <i className="far fa-envelope"></i>
        </div>
        <div className="button b3 centered_section">
          <i className="far fa-calendar-alt"></i>
        </div>
        <div className="button b4 centered_section">
          <i className="fas fa-map-marked-alt"></i>
        </div>
        <div className="button b5 centered_section">
          <i className="fas fa-phone-alt"></i>
        </div>
        <div className="button b6 centered_section">
          <i className="fas fa-lock"></i>
        </div>
      </div>
    </div>
  );
};
export default ButtonBar;