import styles from "./ShowData.module.css";
import globals from '../../App.module.css';
import DataText from '../data/DataText';
import DataValue from '../data/DataValue';

const ShowData = () => {
  return (
    <div className={`${styles.showdata_section} ${globals.centered_section}`}>
      <DataText text={"My phone number is"} />
      <DataValue value="(03)-22-48-30-73"/>
    </div>
  );
};

export default ShowData;