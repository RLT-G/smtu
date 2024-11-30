import React from "react";
import classes from './index.module.css';


interface IPopUpFeedback {
    date: string;
    text: string;
    closePopUp: () => void;
    author: string | undefined;
}


const PopUpFeedback: React.FC<IPopUpFeedback> = ({ date, text, author, closePopUp }) => {
    return (
        <>
            <div className={classes.Wrapper} onClick={(e) => {e.stopPropagation()}}>
                <div className={classes.Content}>
                    <div className={classes.TitleAndDate}>
                        <span className={classes.Title}>Отзыв</span>
                        <span className={classes.Date}>{date}</span>
                    </div>
                    <span className={classes.Author}>{author}</span>
                    <span className={classes.Text}>{text}</span>
                    <span className={classes.close} onClick={closePopUp}>Закрыть</span>
                </div>
            </div>
        </>
    )
}


export default PopUpFeedback