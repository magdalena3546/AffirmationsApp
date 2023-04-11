import styles from './Button.module.scss';

const Button = (props) => {
    return(
        <button className={styles.btn}>{props.name}</button>
    )
};

export default Button;