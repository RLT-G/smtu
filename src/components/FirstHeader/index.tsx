import React from "react";
import classes from './index.module.css'
import { useNavigate } from "react-router-dom";

interface IFirstHeader {
    fScroll?: () => void
}

const FirstHeader: React.FC<IFirstHeader> = ({ fScroll }) => {
    const navigate = useNavigate()

    return (
        <div className={classes.HeaderWrapper}>
            <div className={classes.NavBar}>
                <button className={classes.goToOPAB}
                    onClick={() => {navigate('/opab')}}
                >264-й ОПАБ</button>
                <button className={classes.gotToHistory}
                    onClick={() => {navigate('/history')}}
                >История</button>
                <button className={classes.goToPersonalities}
                    onClick={() => {navigate('/other')}}
                >Персоналии</button>
                <button className={classes.goToContacts}
                    onClick={() => {navigate('/contacts')}}
                >контакты</button>
                <button className={classes.goToFeedbacks}
                    onClick={() => {navigate('/feedbacks')}}
                >отзывы</button>
                <button className={classes.Search}
                    onClick={() => {}}
                ></button>
            </div>
            <div className={classes.MainText}>
                <span className={classes.Title}>Память Корабелки</span>
                <span className={classes.Content}>История в лицах c 1930 до 1990</span>
            </div>
            <div className={classes.logo}></div>
            <button className={classes.arrow} onClick={fScroll}></button>
        </div>
    )
}


export default FirstHeader