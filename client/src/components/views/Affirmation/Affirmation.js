import Button from '../../common/Button/Button';
import styles from './Affirmation.module.scss';
import clsx from 'clsx';
const Affirmation = (props) => {
    return(
    <div className={clsx(styles.content)}>
        <div className={styles.box}>
            <p>{props.text}</p>
            <Button name="click" action={props.actionBtn}/>
        </div>
        <div className={styles.moon}></div>
        <span className={clsx(props.showStars ? styles.shootingStar : null)}></span>
        <span className={clsx(props.showStars ? styles.shootingStar : null)}></span>
        <span className={clsx(props.showStars ? styles.shootingStar : null)}></span>
        <span className={clsx(props.showStars ? styles.shootingStar : null)}></span>
        <span className={clsx(props.showStars ? styles.shootingStar : null)}></span>
    </div>
    )
};

export default Affirmation;