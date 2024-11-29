import React, { useState } from "react";
import classes from './index.module.css';
import Header from "../../Header";
import Footer from "../../Footer";
import faculties from '../../../faculties.json';
import Button from "../../ui/Button";
import persons from '../../../persons.json'
import PersonItem from "../../PersonItem";


const FacultiesDetail: React.FC = () => {
    const [facultet, setFacultet] = useState<string>('kio') // {kio kaia cpt ia mp eigo}
    const titles = {
        kio: 'Факультет кораблестроения и океанотехники', 
        kaia: 'Корабельной энергетики и автоматики', 
        cpt: 'Цифровых промышленных технологий', 
        ia: 'Инженерно-экономический', 
        mp: 'Морского приборостроения', 
        eigo: 'Естественнонаучного и гуманитарного образования'
    }
    const getPersonsViaF = (): Array<[number, string, string, string, string]> => {
        let result: Array<[number, string, string, string, string]> = []
        persons.items.forEach(({ id, fio, rank, photo, faculty }) => {
            if (faculty === facultet) {
                result.push([id, fio, rank, photo, faculty])
            }
        })
        return result
    }

    return (
        <>
            <Header isMainPage={false}/>
            <div className={classes.Wrapper}>
                <div className={classes.TabsSelector}>
                    <button className={[classes.TabsBtn, facultet === 'kio' && classes.Active].join(' ')}
                        onClick={() => {setFacultet('kio')}}
                    >Кораблестроения и океанотехники</button>
                    <button className={[classes.TabsBtn, facultet === 'kaia' && classes.Active].join(' ')}
                        onClick={() => {setFacultet('kaia')}}
                    >корабельной энергетики и автоматики</button>
                    <button className={[classes.TabsBtn, facultet === 'cpt' && classes.Active].join(' ')}
                        onClick={() => {setFacultet('cpt')}}
                    >цифровых промышленных технологий</button>
                    <button className={[classes.TabsBtn, facultet === 'ia' && classes.Active].join(' ')}
                        onClick={() => {setFacultet('ia')}}
                    >Инженерно-экономический</button>
                    <button className={[classes.TabsBtn, facultet === 'mp' && classes.Active].join(' ')}
                        onClick={() => {setFacultet('mp')}}
                    >морского приборостроения</button>
                    <button className={[classes.TabsBtn, facultet === 'eigo' && classes.Active].join(' ')}
                        onClick={() => {setFacultet('eigo')}}
                    >естественнонаучного и гуманитарного образования</button>
                </div>
                <span className={classes.Title}>
                    {facultet === 'kio' && titles.kio}
                    {facultet === 'kaia' && titles.kaia}
                    {facultet === 'cpt' && titles.cpt}
                    {facultet === 'ia' && titles.ia}
                    {facultet === 'mp' && titles.mp}
                    {facultet === 'eigo' && titles.eigo}
                </span>
                <div className={classes.FTextAndPhoto}>
                    <span className={classes.Text}>
                        {facultet === 'kio' && faculties.kio.text}
                        {facultet === 'kaia' && faculties.kaia.text}
                        {facultet === 'cpt' && faculties.cpt.text}
                        {facultet === 'ia' && faculties.ia.text}
                        {facultet === 'mp' && faculties.mp.text}
                        {facultet === 'eigo' && faculties.eigo.text}
                    </span>
                    <div className={classes.Photo} style={{
                        background: `url(${faculties.kio.photo}) no-repeat`,
                        backgroundSize: 'cover'
                    }}>

                    </div>
                </div>
                <div className={classes.Personality}>
                    <span className={classes.PersonalityTitle}>Персоналии</span>
                    <Button className={classes.PersonalityBtn} onClick={() => {}}>посмотреть всех</Button>
                </div>
                <div className={classes.PersonsContainer}>
                    {getPersonsViaF().slice(0, 3).map(([id, fio, rank, photo, faculty]) => <PersonItem id={id} fio={fio} rank={rank} photo={photo}/>)}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FacultiesDetail