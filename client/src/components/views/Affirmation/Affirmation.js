import styles from './Affirmation.module.scss';

const Affirmation = (props) => {
    
    return(
    <div  className={styles.content}>
        <div className={styles.box}><p>{props.text}</p></div>
        <div className={styles.moon}></div>
    </div>
    )
};

export default Affirmation;