import React from "react";
import classes from './index.module.css';

interface IArticleText {
    text: any
}

const ArticleText: React.FC<IArticleText> = ({ text }) => {
    return (
        <>
            <div className={classes.Wrapper}>
                <span className={classes.text}>{text}</span>
            </div>
        </>
    )
}


export default ArticleText;