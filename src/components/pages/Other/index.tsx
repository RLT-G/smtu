import React from "react";
import classes from './index.module.css';
import Header from "../../Header";
import Footer from "../../Footer";
import persons from '../../../persons.json';
import { useLocation } from "react-router-dom";
import PersonItem from "../../PersonItem";
import Button from "../../ui/Button";


const Other: React.FC = () => {
    return (
        <>
            <Header isMainPage={false}/>
            <div className={classes.Wrapper}>
                <div className={classes.Title}>Герои войны\Студенты\<br/>Преподаватели\Выпускники</div>
                <div className={classes.PersonContainer}>
                    {persons.items.slice(0, 9).map(({ id, fio, rank, photo }, index) => 
                        <PersonItem key={index} id={id} fio={fio} rank={rank} photo={photo}/>)}
                </div>
                <Button className={classes.Button} onClick={() => {}}>Каталог</Button>
            </div>
            <Footer />
        </>
    )
}


export default Other