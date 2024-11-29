import React, { useState } from "react";
import classes from './index.module.css';
import SquareLinkText from "../SquareLinkText";


const AboutCart: React.FC = () => {
    return (
        <>
            <div className={classes.AboutCart}>
                <SquareLinkText className={classes.AboutPhoto}></SquareLinkText>
                <div className={classes.AboutTextWrapper}>
                    <div className={classes.AboutText}>
                        <span className={classes.AboutsecondText}>Начальник Управления воспитательной деятельности</span>
                        <span className={classes.AboutthirdText}>Добряк Инна Владимировна</span>
                        <span className={classes.AboutsecondText}>E-MAIL</span>
                        <span className={classes.AboutfirstText}>dobryak@corp.smtu.ru</span>
                        <span className={classes.AboutsecondText}>Телефон</span>
                        <span className={classes.AboutfirstText}>+7 (812) 757-24-55</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCart