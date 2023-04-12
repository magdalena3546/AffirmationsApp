import Affirmation from "../../views/IntroText/Affirmation/Affirmation";
import IntroText from "../../views/IntroText/IntroText";
import { useState } from "react";

const ShowAffirmation = () => {
    const [showAffirmation, setShowAffirmation] = useState(false);
    const actionBtn = () => {
        document.body.classList.add('blue');
        setShowAffirmation(true);
    };
    return(
        <>
        {!showAffirmation &&<IntroText actionBtn={actionBtn}/>}
        {showAffirmation && <Affirmation />}
        </>
    );
};

export default ShowAffirmation;