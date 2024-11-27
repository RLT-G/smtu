import React from "react";
import classes from './index.module.css'


const FirstHeader: React.FC = () => {
    return (
        <div className={classes.HeaderWrapper}>
            <div className={classes.NavBar}>
                <button className={classes.goToOPAB}
                    onClick={() => {console.log('опаб')}}
                >264-й ОПАБ</button>
                <button className={classes.gotToHistory}
                    onClick={() => {console.log('история')}}
                >История</button>
                <button className={classes.goToPersonalities}
                    onClick={() => {console.log('персоны')}}
                >Персоналии</button>
                <button className={classes.goToContacts}
                    onClick={() => {console.log('контактыф')}}
                >контакты</button>
                <button className={classes.goToFeedbacks}
                    onClick={() => {console.log('отзывы')}}
                >отзывы</button>
                <button className={classes.Search}
                    onClick={() => {console.log('посик')}}
                ></button>
            </div>
            <div className={classes.MainText}>
                <span className={classes.Title}>Память Корабелки</span>
                <span className={classes.Content}>История в лицах c 1930 до 1990</span>
            </div>
            <div className={classes.logo}></div>
            <button className={classes.arrow} onClick={() => {console.log('стрелка')}}></button>
        </div>
    )
}


export default FirstHeader