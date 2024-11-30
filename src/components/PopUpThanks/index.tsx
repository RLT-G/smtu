import React from "react";
import classes from './index.module.css';


interface IPopUpThanks {
    closePopUp: () => void;
}


const PopUpThanks: React.FC<IPopUpThanks> = ({ closePopUp }) => {
    return (
        <div className={classes.Wrapper} onClick={(e) => {e.stopPropagation()}}>
            <span className={classes.Text1}>Спасибо за  отзыв! </span>
            <span className={classes.Text2}>Он появится на сайте после проверки модератором.</span>
            <svg className={classes.Close} 
                onClick={closePopUp} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.25 18.75L18.75 6.25M6.25 6.25L18.75 18.75" stroke="#00AEEF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    )
}

export default PopUpThanks