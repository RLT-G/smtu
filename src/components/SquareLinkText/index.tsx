import React, { CSSProperties, ReactNode } from "react";
import classes from './index.module.css';


interface ISquareLinkText{
    children?: ReactNode;
    width?: string;
    height?: string;
    className?: string;
    onClick?: () => void;
    style?: CSSProperties;
}


const SquareLinkText: React.FC<ISquareLinkText> = ({ children, width, height, className, onClick, style }) => {
    return (
        <div className={[classes.Wrapper, className].join(' ')}
            style={{width: width, height: height, ...style}}
            onClick={onClick}>

            <span className={classes.Text}>{children}</span>
        </div>
    )
}


export default SquareLinkText