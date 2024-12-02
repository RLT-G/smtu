import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import classes from './index.module.css';
import SquareLinkText from "../../SquareLinkText";
import { useNavigate } from "react-router-dom";


const Faculties: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header isMainPage={false}/>
            <div className={classes.Wrapper}>
                <span className={classes.Title}>Факультеты</span>
                <div className={classes.Links}>
                    
                    <div className={classes.first}>
                        <div className={classes.fitstleft}>
                            <SquareLinkText onClick={() => {navigate('/faculties_detail?f=kio')}} className={[classes.slink, classes.kia].join(' ')}>кораблестроения <br />и океанотехники</SquareLinkText>
                            <div className={classes.firstleftbottom}>
                                <SquareLinkText onClick={() => {navigate('/faculties_detail?f=cpt')}} className={[classes.slink, classes.cpt].join(' ')}>цифровых <br />промышленных <br />технологий</SquareLinkText>
                                <SquareLinkText onClick={() => {navigate('/faculties_detail?f=ia')}} className={[classes.slink, classes.ia].join(' ')}>инженерно- <br/>экономический</SquareLinkText>
                            </div>
                        </div>
                        <SquareLinkText onClick={() => {navigate('/faculties_detail?f=kaia')}} className={[classes.slink, classes.kaia].join(' ')} >корабельной<br />энергетики<br />и автоматики</SquareLinkText>
                    </div>

                    <div className={classes.second}>
                        <SquareLinkText onClick={() => {navigate('/faculties_detail?f=mp')}} className={[classes.slink, classes.endSLink].join(' ')} >морского<br />приборостроения</SquareLinkText>
                    </div>

                    <div className={classes.third}>
                        <SquareLinkText onClick={() => {navigate('/faculties_detail?f=eigo')}} className={[classes.slink, classes.eigo].join(' ')} >естественнонаучного<br />и гуманитарного<br />образования</SquareLinkText>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}


export default Faculties;