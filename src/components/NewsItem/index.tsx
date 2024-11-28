import React, { CSSProperties } from "react";
import classes from './index.module.css'

interface INewsItem {
    date: string;
    text: string;
    style?: CSSProperties;
    className?: string;
}

const NewsItem: React.FC<INewsItem> = ({ date, text, style, className }) => {
    return (
        <div className={[classes.Wrapper, className].join(' ')} style={style}>
            <div className={classes.Ico}></div>

            <div className={classes.TextContent}>
                <div className={classes.TitleAndDate}>
                    <span className={classes.Title}>новость</span>
                    <span className={classes.Date}>{date}</span>
                </div>
                <span className={classes.Text}>{text}</span>
                <span className={classes.ReadMore}
                    onClick={() => {}}>Читать полностью</span>
            </div>

        </div>
    )
}


export default NewsItem