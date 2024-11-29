import React, { useState } from "react";
import classes from './index.module.css';
import Header from "../../Header";
import Footer from "../../Footer";
import Button from "../../ui/Button";


const Contacts: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [numberphone, setNumberphone] = useState<string>('')
    const [msg, setMsg] = useState<string>('')
    const [agree, setAgree] = useState<boolean>(false)

    return (
        <>
            <Header isMainPage={false}/>
            <div className={classes.Wrapper}>
                <div className={classes.Title}>Контакты</div>
                <div className={classes.Title2}>Свяжитесь с нами</div>
                <div className={classes.TextForm}>
                    <div className={classes.blablabla}>
                        <span className={classes.firstText}>Если у вас есть вопросы, предложения или пожелания (или вы просто хотите сказать «Привет!») — отправьте нам сообщение через эту небольшую форму или свяжитесь с нами напрямую:</span>
                        <span className={classes.secondText}>E-MAIL</span>
                        <span className={classes.firstText}>dobryak@corp.smtu.ru</span>
                        <span className={classes.secondText}>Телефон</span>
                        <span className={classes.firstText}>+7 (812) 757-24-55</span>
                    </div>
                    <div className={classes.Form}>
                        <input className={classes.InputText} type="text" placeholder="имя*" value={name} onChange={(e) => {setName(e.target.value)}}/>
                        <input className={classes.InputText} type="text" placeholder="E-mail*" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        <input className={classes.InputText} type="text" placeholder="телефон*" value={numberphone} onChange={(e) => {setNumberphone(e.target.value)}}/>
                        <textarea className={classes.InputTextArea} placeholder="Ваше сообщение*" value={msg} onChange={(e) => {setMsg(e.target.value)}}></textarea>
                        <div className={classes.CheckboxWrapper}>
                            <button className={[classes.Checkbox, agree && classes.Active].join(' ')}
                                onClick={() => {setAgree(!agree)}}
                            ></button>
                            <span className={classes.LabelForCheckbox}>Я согласен с условиями</span>
                            <span className={classes.LinkCheckbox} onClick={() => {}}>Политики Конфиденциальности </span>
                        </div>
                        <Button className={classes.FormBtn} onClick={() => {
                            setAgree(false);setEmail('');setMsg('');setName('');setNumberphone('')
                        }}>Отправить</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contacts