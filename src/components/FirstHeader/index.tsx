import React, { useState } from "react";
import classes from './index.module.css'
import { useNavigate } from "react-router-dom";
import PopUpWrapper from "../PopUpWrapper";
import PopUpSearch from "../PopUpSearch";

interface IFirstHeader {
    fScroll?: () => void
}

const FirstHeader: React.FC<IFirstHeader> = ({ fScroll }) => {
    const navigate = useNavigate()
    const [needSearch, setNeedSearch] = useState<boolean>(false)
    const openSearch = (): void => { setNeedSearch(true) }
    const closeSearch = (): void => { setNeedSearch(false) }
    return (
        <div className={classes.HeaderWrapper}>
            {needSearch && <PopUpWrapper closePopUp={closeSearch}>
                <PopUpSearch />
            </PopUpWrapper>}
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
                    onClick={() => {openSearch()}}
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