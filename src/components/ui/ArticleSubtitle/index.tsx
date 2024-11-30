import React from "react";
import classes from './index.module.css';

interface IArticleSubtitle {
    text: any
}

const ArticleSubtitle: React.FC<IArticleSubtitle> = ({ text }) => {
    return (
        <>
            <div className={classes.Wrapper}>
                <span className={classes.text}>{text}</span>
            </div>
        </>
    )
}


export default ArticleSubtitle;