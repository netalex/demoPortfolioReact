import styles from "./ShowData.module.css";
import globals from '../../App.module.css'

const ShowData = () => {
  return (
    <div className={`${styles.showdata_section} ${globals.centered_section}`}>
      <p className={styles.datatext}>my phone number is</p>
      <h3 className={styles.data}>(03)-22-48-30-73</h3>
    </div>
  );
};

export default ShowData;