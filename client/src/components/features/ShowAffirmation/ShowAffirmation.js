import Affirmation from "../../views/Affirmation/Affirmation";
import IntroText from "../../views/IntroText/IntroText";
import { useState } from "react";
import { API_URL } from "../../../config";

const ShowAffirmation = () => {
    const [showAffirmation, setShowAffirmation] = useState(false);
    const [showStars, setShowStars] = useState(false);
    const [text, setText] = useState('');
    const actionBtn = () => {
        fetch(`${API_URL}/affirmation`)
        .then(res => res.json())
        .then(elm => {
            setText(elm[0].content);
            document.body.classList.add('blue');
            setShowAffirmation(true);
        })
    };

    const actionBtnAff = () => {
        fetch(`${API_URL}/affirmation`)
        .then(res => res.json())
        .then(elm => {
            setText(elm[0].content);
            setShowStars(true);
        })
        setShowStars(false);
    };
    return(
        <>
        {!showAffirmation &&<IntroText actionBtn={actionBtn}/>}
        {(showAffirmation) && <Affirmation  text={text} actionBtn={actionBtnAff} showStars={showStars}/>}
        </>
    );
};

export default ShowAffirmation;