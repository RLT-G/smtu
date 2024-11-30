import React from "react";
import classes from './index.module.css';

interface IArticlePhoto {
    url: any
}

const ArticlePhoto: React.FC<IArticlePhoto> = ({ url }) => {
    return (
        <>
            <div className={classes.Wrapper}>
                <div className={classes.Photo} style={{
                    background: `url(${url}) no-repeat center/cover`
                }}></div>
            </div>
        </>
    )
}


export default ArticlePhoto;