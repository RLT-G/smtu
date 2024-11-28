import React, { ReactNode } from "react";
import classes from './index.module.css';

interface IButton {
    children: ReactNode;
    className: string;
    onClick: () => void;
}

const Button: React.FC<IButton> = ({ children, className, onClick }) => {
    return (
        <button className={[className, classes.Button].join(' ')}
            onClick={onClick}>

                {children}

        </button>
    )
}

export default Button