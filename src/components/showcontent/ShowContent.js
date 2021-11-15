import styles from "./ShowContent.module.css";
import globals from '../../App.module.css';
import ContentText from '../Content/ContentText';
import ContentValue from '../Content/ContentValue';

const ShowContent = (props) => {
  const {text, value} = props;
  return (
    <div className={`${styles.showcontent_section} ${globals.centered_section}`}>
      <ContentText text={text} />
      <ContentValue value={value} />
    </div>
  );
};

export default ShowContent;