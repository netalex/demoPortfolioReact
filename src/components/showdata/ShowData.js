import styles from "./ShowData.module.css";
import globals from '../../App.module.css';
import DataText from '../data/DataText';
import DataValue from '../data/DataValue';

const ShowData = (props) => {
  return (
    <div className={`${styles.showdata_section} ${globals.centered_section}`}>
      <DataText text={props.text} />
      <DataValue value={props.value} />
    </div>
  );
};

export default ShowData;