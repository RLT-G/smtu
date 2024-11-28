import React, { useState, forwardRef } from "react";
import classes from './index.module.css'
import Button from "../ui/Button";

interface IFeedbackForm {
    className?: string;
}

const FeedbackForm = forwardRef<HTMLDivElement, IFeedbackForm>(({ className }, ref) => {
    const [name, setName] = useState<string>('');
    const [msg, setMsg] = useState<string>('');

    const doSomething = () => {
        console.log(name, msg);
        setName('');
        setMsg('');
    };

    return (
        <div className={[classes.Wrapper, className].join(' ')} ref={ref}>
            <input
                className={classes.Input}
                value={name}
                type="text"
                placeholder="Имя *"
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                className={classes.TextArea}
                value={msg}
                placeholder="Ваше сообщение *"
                onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <Button className={classes.Button} onClick={doSomething}>отправить</Button>
        </div>
    );
});

export default FeedbackForm;
