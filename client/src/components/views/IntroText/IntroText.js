import Button from '../../common/Button/Button';
import styles from './IntroText.module.scss';
import clsx from 'clsx';


const IntroText = (props) => {
  
    return(
        <>
        <div className={clsx(styles.box, styles.boxOne)}>
            <p>Welcome! This website exists to help you fight your anxiety. Feel free to try. Remember you are not alone with this.</p>
        </div>
        <div className={clsx(styles.box, styles.boxTwo)}>
            <p>Just breath and click at the button.</p>
            <Button action= {props.actionBtn} name="click"/>
        </div>
        </>
    )
};

export default IntroText;