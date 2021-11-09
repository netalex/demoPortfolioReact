import styles from './ImageBar.module.css'
import globals from '../../App.module.css'

const ImageBar = () => {
  return (
    <div className={`${styles.image_bar} ${globals.centered_section}`}>
      <div className={styles.profile_big_image}>
        <img
          src={"https://randomuser.me/api/portraits/women/24.jpg"}
          alt="big profile face"
        />
      </div>
    </div>
  );
};

export default ImageBar;
