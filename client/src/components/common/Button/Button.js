import styles from './Button.module.scss';

const Button = (props) => {
    return(
        <button onClick={props.action} className={styles.btn}>{props.name}</button>
    )
};

export default Button;