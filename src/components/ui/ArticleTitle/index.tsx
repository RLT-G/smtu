import React from "react";
import classes from './index.module.css';

interface IArticleTitle {
    text: any,
    date?: string;
    author?: string;
    time?: string;
}

const ArticleTitle: React.FC<IArticleTitle> = ({ text, date, author, time }) => {
    return (
        <>
            <div className={classes.Wrapper}>
                {date && (
                    <>
                        <span className={classes.Date}>{date}</span>
                    </>
                )}
                <span className={classes.Title}>{text}</span>
                {author && time && (
                    <>
                        <div className={classes.AuthorTimeContainer}>
                            <div className={classes.AuthorContainer}>
                                <span className={classes.AuthorTitle}>автор:</span>
                                <span className={classes.Author}>{author}</span>
                            </div>
                            <div className={classes.TimeContainer}>
                                <span className={classes.TimeTitle}>время прочтения:</span>
                                <span className={classes.Time}>{time}</span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}


export default ArticleTitle;