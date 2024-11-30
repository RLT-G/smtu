import React, { CSSProperties, useState } from "react";
import classes from './index.module.css'
import PopUpWrapper from "../PopUpWrapper";
import PopUpFeedback from "../PopUpFeedback";

interface IFeedbacksItem {
    date: string;
    text: string;
    author: string | undefined;
    style?: CSSProperties;
    className?: string;
}

const FeedbacksItem: React.FC<IFeedbacksItem> = ({ date, text, author, style, className }) => {
    const [popUpIsOpen, setPopUpIsOpen] = useState<boolean>(false)
    const closePopUp = (): void => {
        setPopUpIsOpen(false)
    }
    const openPopUp = (): void => {
        setPopUpIsOpen(true)
    }
    return (
        <>
            {popUpIsOpen && <PopUpWrapper closePopUp={closePopUp}>
                <PopUpFeedback date={date} text={text} author={author} closePopUp={closePopUp}/>
            </PopUpWrapper>}        

            <div className={[classes.Wrapper, className].join(' ')} style={style}>
                <div className={classes.TitleAndDate}>
                    <span className={classes.Title}>отзыв</span>
                    <span className={classes.Date}>{date}</span>
                </div>
                <span className={classes.Author}>{author}</span>
                <span className={classes.Content}>{text}</span>
                <span className={classes.ReadMore} 
                    onClick={openPopUp}>Читать полностью</span>
            </div>
        </>
    )
}


export default FeedbacksItem