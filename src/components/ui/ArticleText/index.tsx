import React from "react";
import classes from './index.module.css';

interface IArticleText {
    className?: string
    text: any
}

const ArticleText: React.FC<IArticleText> = ({ className, text }) => {
    return (
        <>
            <div className={[classes.Wrapper, className].join(' ')}>
                <span className={classes.text}>{text}</span>
            </div>
        </>
    )
}


export default ArticleText;