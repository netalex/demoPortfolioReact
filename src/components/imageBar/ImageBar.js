import styles from './ImageBar.module.css'
import globals from '../../App.module.css'

const ImageBar = (props) => {
  return (
    <div className={`${styles.image_bar} ${globals.centered_section}`}>
      <div className={styles.profile_big_image}>
        <img
          src={props.imgpath}
          alt="big profile face"
        />
      </div>
    </div>
  );
};

export default ImageBar;
