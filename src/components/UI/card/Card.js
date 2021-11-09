import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={`${styles.card} ${styles.card_content}`}>
        {props.children}
    </div>
  );
};


export default Card;