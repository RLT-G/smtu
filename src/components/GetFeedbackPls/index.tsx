import React, { CSSProperties } from "react";
import classes from './index.module.css'
import Button from "../ui/Button";

interface IGetFeedbackPls {
    style?: CSSProperties;
    className?: string;
    onClick: () => void;
}

const GetFeedbackPls: React.FC<IGetFeedbackPls> = ({ style, className, onClick }) => {
    return (
        <div className={[classes.Wrapper, className].join(' ')} style={style}>
            <span className={classes.Text}>Пожалуйста, поделитесь впечатлениями от знакомства с историей ЛКИ</span>
            <Button className={classes.Button} onClick={onClick}>Оставить отзыв</Button>
        </div>
    )
}


export default GetFeedbackPls