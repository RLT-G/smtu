import React, { useState } from "react";
import classes from './index.module.css'
import { useNavigate } from "react-router-dom";
import PopUpWrapper from "../PopUpWrapper";
import PopUpSearch from "../PopUpSearch";
import PopUpMNB from "../PopUpMNB";

interface IFirstHeader {
    fScroll?: () => void
}

const FirstHeader: React.FC<IFirstHeader> = ({ fScroll }) => {
    const navigate = useNavigate()
    const [needSearch, setNeedSearch] = useState<boolean>(false)
    const openSearch = (): void => { setNeedSearch(true) }
    const closeSearch = (): void => { setNeedSearch(false) }
    const [MNBIsOpen, setMNBIsOpen] = useState<boolean>(false)
    const openMNB = (): void => { setMNBIsOpen(true) }
    const closeMNB = (): void => { setMNBIsOpen(false) }
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
            {MNBIsOpen && <PopUpWrapper closePopUp={closeMNB}>
                <PopUpMNB PopUpClose={closeMNB} OpenSearch={openSearch}/>
            </PopUpWrapper>}
            <svg className={classes.MobileNavbar} 
                onClick={openMNB}
                width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10H35M5 20H35M5 30H35" stroke="white" stroke-width="3" stroke-linecap="round" />
            </svg>

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