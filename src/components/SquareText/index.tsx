import React, { ReactNode } from "react";
import classes from './index.module.css';


interface ISquareText{
    children: ReactNode;
    width?: string;
    height?: string;
    className?: string;
}


const SquareText: React.FC<ISquareText> = ({ children, width, height, className }) => {
    return (
        <div className={[classes.Wrapper, className].join(' ')}
            style={{width: width, height: height}}>

            <span className={classes.Text}>{children}</span>
        </div>
    )
}


export default SquareText