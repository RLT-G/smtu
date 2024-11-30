import React from "react";
import classes from './index.module.css';

interface IArticleTitle {
    text: any
}

const ArticleTitle: React.FC<IArticleTitle> = ({ text }) => {
    return (
        <>
            <div className={classes.Wrapper}>
                <span className={classes.Title}>{text}</span>
            </div>
        </>
    )
}


export default ArticleTitle;