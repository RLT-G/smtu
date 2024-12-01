import React from "react";
import classes from "./index.module.css";

interface IVideo{
    src: string, 
    caption: string
}
const Video: React.FC<IVideo> = ({src, caption}) =>{
    return(
        <>
        <div className={classes.Text}>{caption}</div>
        <div className={classes.Block}>
            <div className={classes.Svg}></div>
        </div>
        </>
    )
}

export default Video;