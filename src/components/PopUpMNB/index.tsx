import React from "react";
import classes from './index.module.css';
import { useNavigate } from "react-router-dom";

interface IPopUpMNB {
    PopUpClose: () => void;
    OpenSearch: () => void;
}

const PopUpMNB: React.FC<IPopUpMNB> = ({ PopUpClose, OpenSearch }) => {
    const [personalIsOpen, setPersonalIsOpen] = React.useState<boolean>(false)
    const [fIsOpen, setFIsOpen] = React.useState<boolean>(false)

    const navigate = useNavigate()

    return (
        <>
            <div className={classes.Wrapper} onClick={(e) => {e.stopPropagation()}}>
                <button className={[classes.Button, classes.First].join(' ')}
                    onClick={() => {navigate('/history')}}
                >история</button>

                <button className={classes.Button}
                    onClick={() => {navigate('/opab_calendar')}}
                >календарь событий</button>

                <button className={classes.Button}
                    onClick={() => {navigate('/opab')}}
                >участники</button>

                <button className={classes.Button}
                    onClick={() => {navigate('/opab_video')}}
                >видеопроект</button>

                <button className={[classes.Button, personalIsOpen ? classes.dis : classes.act].join(' ')}
                 onClick={() => {setPersonalIsOpen(!personalIsOpen)}}>Персоналии</button>

                {personalIsOpen && (
                    <>
                        <button className={[classes.Button, classes.Inner].join(' ')}
                            onClick={() => {navigate('/opab')}}
                        >264-й ОПАБ</button>
                        <button className={[classes.Button, classes.Inner].join(' ')}
                            onClick={() => {navigate('/other?filter=hero')}}
                        >Герои</button>
                        <button className={[classes.Button, classes.Inner].join(' ')}
                            onClick={() => {navigate('/faculties')}}
                        >Факультеты</button>
                        <button className={[classes.Button, classes.Inner].join(' ')}
                            onClick={() => {navigate('/other?filter=students')}}
                        >студенты</button>
                        <button className={[classes.Button, classes.Inner].join(' ')}
                            onClick={() => {navigate('/other?filter=graduation')}}
                        >выпускники</button>
                        <button className={[classes.Button, classes.Inner].join(' ')}
                            onClick={() => {navigate('/other?filter=teacher')}}
                        >Преподаватели</button>
                        <button className={[classes.Button, classes.Inner].join(' ')}
                            onClick={() => {navigate('/catalog')}}
                        >Общий каталог</button>
                    </>
                )}


                <button className={classes.Button}
                    onClick={() => {navigate('/contacts')}}
                >Контакты</button>
                <button className={classes.Button}
                    onClick={() => {navigate('/feedbacks')}}
                >Отзывы</button>
                <button className={[classes.Button, fIsOpen ? classes.dis : classes.act].join(' ')}
                    onClick={() => {setFIsOpen(!fIsOpen)}}>Факультеты</button>

                {fIsOpen && (
                    <>
                        <button className={[classes.Button, classes.Inner, classes.big].join(' ')}
                            onClick={() => {navigate('/faculties_detail?f=kio')}}
                        >Кораблестроения и океанотехники</button>
                        <button className={[classes.Button, classes.Inner, classes.big].join(' ')}
                            onClick={() => {navigate('/faculties_detail?f=kaia')}}
                        >корабельной энергетики и автоматики</button>
                        <button className={[classes.Button, classes.Inner, classes.big].join(' ')}
                            onClick={() => {navigate('/faculties_detail?f=mp')}}
                        >морского приборостроения</button>
                        <button className={[classes.Button, classes.Inner, classes.big].join(' ')}
                            onClick={() => {navigate('/faculties_detail?f=ia')}}
                        >Инженерно-экономический</button>
                        <button className={[classes.Button, classes.Inner, classes.big].join(' ')}
                            onClick={() => {navigate('/faculties_detail?f=cpt')}}
                        >цифровых промышленных технологий</button>
                        <button className={[classes.Button, classes.Inner, classes.big].join(' ')}
                            onClick={() => {navigate('/faculties_detail?f=eigo')}}
                        >естественнонаучного и гуманитарного образования</button>
                    </>
                )}
                <button className={classes.Button}
                    onClick={() => {PopUpClose();OpenSearch()}}
                >Поиск</button>
            </div>
        </>
    )
}


export default PopUpMNB