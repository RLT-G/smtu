import React, { ReactNode } from "react";
import classes from './index.module.css';

interface IPopUpWrapper {
    children?: ReactNode;
    closePopUp?: () => void;
}

const PopUpWrapper: React.FC<IPopUpWrapper> = ({ children, closePopUp }) => {
    return (
        <>
            <div className={classes.Wrapper} onClick={closePopUp}>
                {children}
            </div>
        </>
    )
}


export default PopUpWrapper