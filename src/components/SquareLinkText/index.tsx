import React, { ReactNode } from "react";
import classes from './index.module.css';


interface ISquareLinkText{
    children: ReactNode;
    width?: string;
    height?: string;
    className?: string;
    onClick?: () => void;
}


const SquareLinkText: React.FC<ISquareLinkText> = ({ children, width, height, className, onClick }) => {
    return (
        <div className={[classes.Wrapper, className].join(' ')}
            style={{width: width, height: height}}
            onClick={onClick}>

            <span className={classes.Text}>{children}</span>
        </div>
    )
}


export default SquareLinkText