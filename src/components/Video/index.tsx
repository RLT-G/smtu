import React, { useState } from "react";
import classes from "./index.module.css";
import ReactPlayer from "react-player";

interface IVideo{
    src: string;
    caption: string;
    photo?: string;
    className?: string;
}

const Video: React.FC<IVideo> = ({src, caption, photo, className}) =>{
    const [neeedPlayer, setNeeedPlayer] = useState<boolean>(false)

    return(
        <>
            <div className={classes.Text}>{caption}</div>
            
            {neeedPlayer
                ? (
                    <div className={[classes.Block, classes.PlayerWrapper, className].join(' ')} style={{
                        background: photo ? `url(${photo}) no-repeat center/cover` : '#cccccc'
                    }}>
                        <ReactPlayer
                            url={src}
                            controls
                            width="100%"
                            height="100%"
                        />
                    </div>
                )
                : (
                    <div className={[classes.Block, className].join(' ')}
                        onClick={() => {setNeeedPlayer(true)}} style={{
                            background: photo ? `url(${photo}) no-repeat center/cover` : '#cccccc'
                        }}>

                        <div className={classes.Svg}></div>
                    </div>
                )}

        </>
    )
}

export default Video;