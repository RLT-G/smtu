import React, { CSSProperties } from "react";
import classes from './index.module.css'

interface IFeedbacksItem {
    date: string;
    text: string;
    author: string | undefined;
    style?: CSSProperties;
}

const FeedbacksItem: React.FC<IFeedbacksItem> = ({ date, text, author, style }) => {
    return (
        <div className={classes.Wrapper} style={style}>
            <div className={classes.TitleAndDate}>
                <span className={classes.Title}>отзыв</span>
                <span className={classes.Date}>{date}</span>
            </div>
            <span className={classes.Author}>{author}</span>
            <span className={classes.Content}>{text}</span>
            <span className={classes.ReadMore}>Читать полностью</span>
        </div>
    )
}


export default FeedbacksItem