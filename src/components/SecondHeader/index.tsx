import React from "react";
import classes from './index.module.css'
import DropDownMenu from "../ui/DropDownMenu";
import HeaderDropMenu from "../HeaderDropMenu";


interface IMenuItem {
    text: string;
    onClick: () => void;
}


const SecondHeader: React.FC = () => {
    const opabItems: Array<IMenuItem> = [
        { text: 'История', onClick: () => {console.log('История в вкл')} },
        { text: 'календарь событий', onClick: () => {console.log('календ в вкл')} },
        { text: 'участники', onClick: () => {console.log('участники в вкл')} },
        { text: 'видеопроект', onClick: () => {console.log('видеопроект в вкл')} },
    ]

    const fuckItems: Array<IMenuItem> = [
        { text: 'Кораблестроения и океанотехники', onClick: () => {console.log('океан')} },
        { text: 'корабельной энергетики и автоматики', onClick: () => {console.log('энерг')} },
        { text: 'морского приборостроения ', onClick: () => {console.log('приб')} },
        { text: 'Инженерно-экономический', onClick: () => {console.log('инжир')} },
        { text: 'цифровых промышленных технологий', onClick: () => {console.log('цифра')} },
        { text: 'естественнонаучного и гуманитарного образования', onClick: () => {console.log('ест')} },
    ]

    return (
        <div className={classes.HeaderWrapper}>
            <div className={classes.HeaderTop}>

                <div className={classes.LogoAndText}>
                    <div className={classes.Logo}></div>
                    <div className={classes.Text}>
                        <span className={classes.Title}>Память Корабелки</span>
                        <span className={classes.Content}>История в лицах <span>1930–1990</span></span>
                    </div>
                </div>

                <div className={classes.NavBar}>
                    <button className={classes.goToOPAB}
                        onClick={() => {console.log('опаб')}}
                    >264-й ОПАБ</button>
                    <button className={classes.gotToHistory}
                        onClick={() => {console.log('истор')}}
                    >История</button>
                    <button className={classes.goToPersonalities}
                        onClick={() => {console.log('персоны')}}
                    >Персоналии</button>
                    <button className={classes.goToContacts}
                        onClick={() => {console.log('контакт')}}
                    >контакты</button>
                    <button className={classes.goToFeedbacks}
                        onClick={() => {console.log('отзывы')}}
                    >отзывы</button>
                    <button className={classes.Search}
                        onClick={() => {console.log('поиск')}}
                    ></button>
                </div>

            </div>
            <div className={classes.HeaderDown}>
                
                <DropDownMenu className={classes.DownNavBarItem} dropElement={<></>} onClick={() => {console.log('герои снизу')}}>
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

                <DropDownMenu className={classes.DownNavBarItem} dropElement={<></>} onClick={() => {console.log('студенты снизу')}}>
                    <span className={classes.DownNavBarText}>студенты</span>
                </DropDownMenu>

                <DropDownMenu className={classes.DownNavBarItem} dropElement={<></>} onClick={() => {console.log('препод снизу')}}>
                    <span className={classes.DownNavBarText}>преподаватели</span>
                </DropDownMenu>

                <DropDownMenu className={classes.DownNavBarItem} dropElement={<></>} onClick={() => {console.log('выпускн снизу')}}>
                    <span className={classes.DownNavBarText}>выпускники</span>
                </DropDownMenu>
            </div>
        </div>
    )
}


export default SecondHeader