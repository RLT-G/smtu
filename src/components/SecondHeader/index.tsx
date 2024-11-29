import React from "react";
import classes from './index.module.css'
import DropDownMenu from "../ui/DropDownMenu";
import HeaderDropMenu from "../HeaderDropMenu";
import { useNavigate } from "react-router-dom";


interface IMenuItem {
    text: string;
    onClick: () => void;
}


const SecondHeader: React.FC = () => {
    const navigate = useNavigate()
    
    const opabItems: Array<IMenuItem> = [
        { text: 'История', onClick: () => {navigate('/history')} },
        { text: 'календарь событий', onClick: () => {navigate('/opab_calendar')} },
        { text: 'участники', onClick: () => {navigate('/opab')} },
        { text: 'видеопроект', onClick: () => {navigate('/opab_video')} },
    ]

    const fuckItems: Array<IMenuItem> = [
        { text: 'Кораблестроения и океанотехники', onClick: () => {navigate('/faculties_detail?f=kio')} },
        { text: 'корабельной энергетики и автоматики', onClick: () => {navigate('/faculties_detail?f=kaia')} },
        { text: 'морского приборостроения ', onClick: () => {navigate('/faculties_detail?f=mp')} },
        { text: 'Инженерно-экономический', onClick: () => {navigate('/faculties_detail?f=ia')} },
        { text: 'цифровых промышленных технологий', onClick: () => {navigate('/faculties_detail?f=cpt')} },
        { text: 'естественнонаучного и гуманитарного образования', onClick: () => {navigate('/faculties_detail?f=eigo')} },
    ]

    return (
        <div className={classes.HeaderWrapper}>
            <div className={classes.HeaderTop}>

                <div className={classes.LogoAndText}
                    onClick={() => {navigate('/')}}>
                    <div className={classes.Logo}></div>
                    <div className={classes.Text}>
                        <span className={classes.Title}>Память Корабелки</span>
                        <span className={classes.Content}>История в лицах <span>1930–1990</span></span>
                    </div>
                </div>

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

            </div>
            <div className={classes.HeaderDown}>
                
                <DropDownMenu className={classes.DownNavBarItem} dropElement={<></>} onClick={() => {navigate('/other')}}>
                    <span className={classes.DownNavBarText}>герои</span>
                </DropDownMenu>

                <DropDownMenu className={classes.DownNavBarItem} 
                    dropElement={<HeaderDropMenu data={opabItems} isSmall={true} left="-50px"/>}>
                    <span className={classes.DownNavBarText}>264-й ОПАБ</span>
                </DropDownMenu>

                <DropDownMenu className={classes.DownNavBarItem} 
                    dropElement={<HeaderDropMenu data={fuckItems} isSmall={false} left="-60px"/>}>
                    <span className={classes.DownNavBarText}>факультеты</span>
                </DropDownMenu>

                <DropDownMenu className={classes.DownNavBarItem} dropElement={<></>} onClick={() => {navigate('/other')}}>
                    <span className={classes.DownNavBarText}>студенты</span>
                </DropDownMenu>

                <DropDownMenu className={classes.DownNavBarItem} dropElement={<></>} onClick={() => {navigate('/other')}}>
                    <span className={classes.DownNavBarText}>преподаватели</span>
                </DropDownMenu>

                <DropDownMenu className={classes.DownNavBarItem} dropElement={<></>} onClick={() => {navigate('/other')}}>
                    <span className={classes.DownNavBarText}>выпускники</span>
                </DropDownMenu>
            </div>
        </div>
    )
}


export default SecondHeader