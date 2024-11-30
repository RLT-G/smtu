import React from "react";
import classes from './index.module.css';

interface IArticleQuote {
    text: any
}

const ArticleQuote: React.FC<IArticleQuote> = ({ text }) => {
    return (
        <>
            <div className={classes.Wrapper}>
                <span className={classes.text}>{text}</span>
            </div>
        </>
    )
}


export default ArticleQuote;