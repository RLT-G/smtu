import React, { useEffect, useState } from "react";
import classes from './index.module.css';
import Header from "../../Header";
import Footer from "../../Footer";
import persons from '../../../persons.json';
import { useLocation, useNavigate } from "react-router-dom";
import PersonItem from "../../PersonItem";
import Button from "../../ui/Button";

interface IPerson {
    id: number;
    fio: string;
    photo: string;
    life_time: string;
    rank: string;
    faculty: string;
    show_on_hero_page: boolean;
    show_on_students_page: boolean;
    show_on_teacher_page: boolean;
    show_on_graduation_page: boolean;
    bio: {
        d39_40: Array<string>;
        d41_45: Array<string>;
        RKKA: Array<string>;
        after: Array<string>;
    }
    opab: Array<string>;
    memory: Array<string>;
    awards: Array<string>;
    sources: Array<string>;
}


const Other: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    let title: string = 'Персоналии';
    const get_filtered_persons = (): Array<IPerson> => {
        const filter = String(params.get('filter'));
        if (filter === 'hero') {
            title = 'Герои войны'
            return persons.items.filter(({ show_on_hero_page }) => show_on_hero_page).slice(0, 9)
            
        } else if (filter === 'students') {
            title = 'Студенты'
            return persons.items.filter(({ show_on_students_page }) => show_on_students_page).slice(0, 9)

        } else if (filter === 'teacher') {
            title = 'Преподаватели'
            return persons.items.filter(({ show_on_teacher_page }) => show_on_teacher_page).slice(0, 9)

        } else if (filter === 'graduation') {
            title = 'Выпускники'
            return persons.items.filter(({ show_on_graduation_page }) => show_on_graduation_page).slice(0, 9)

        } else if (filter === 'kio') {
            return persons.items.filter(({ faculty }) => faculty === 'kio').slice(0, 9)

        } else if (filter === 'kaia') {
            return persons.items.filter(({ faculty }) => faculty === 'kaia').slice(0, 9)

        } else if (filter === 'cpt') {
            return persons.items.filter(({ faculty }) => faculty === 'cpt').slice(0, 9)

        } else if (filter === 'ia') {
            return persons.items.filter(({ faculty }) => faculty === 'ia').slice(0, 9)

        } else if (filter === 'mp') {
            return persons.items.filter(({ faculty }) => faculty === 'mp').slice(0, 9)

        } else if (filter === 'eigo') {
            return persons.items.filter(({ faculty }) => faculty === 'eigo').slice(0, 9)
        }
        return persons.items.slice(0, 9)
    }
    const filtered_persons = get_filtered_persons()

    return (
        <>
            <Header isMainPage={false}/>
            <div className={classes.Wrapper}>
                <div className={classes.Title}>{title}</div>
                <div className={classes.PersonContainer}>
                    {filtered_persons.map(({ id, fio, rank, photo }, index) => 
                        <PersonItem key={index} id={id} fio={fio} rank={rank} photo={photo}/>)}
                </div>
                <Button className={classes.Button} onClick={() => {navigate('/catalog')}}>Каталог</Button>
            </div>
            <Footer />
        </>
    )
}


export default Other