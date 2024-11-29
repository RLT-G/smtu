import React from "react";
import Header from "../../Header";
import classes from './index.module.css'
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header isMainPage={false}/>
            
            <div className={classes.E404Container}>
                <span className={classes.E404}>404</span>
                <span className={classes.E404Text}>Страница не найдена</span>
                <Button className={classes.Button} 
                    onClick={() => {navigate('/')}}>Вернуться на главную</Button>
            </div>
        </>
    )
}


export default NotFound