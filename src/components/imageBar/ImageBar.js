import styles from './ImageBar.module.css'
import globals from '../../App.module.css'
import {IMAGE_ALT_TEXT} from '../../constants/text';

const ImageBar = (props) => {
  const {imgpath} = props;
  return (
    <div className={`${styles.image_bar} ${globals.centered_section}`}>
      <div className={styles.profile_big_image}>
        <img
          src={imgpath}
          alt={IMAGE_ALT_TEXT}
        />
      </div>
    </div>
  );
};

export default ImageBar;
