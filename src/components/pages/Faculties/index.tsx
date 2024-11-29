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
                            <SquareLinkText onClick={() => {navigate('/faculties_detail?f=kio')}} className={classes.slink} width="793px" height="383px">кораблестроения <br />и океанотехники</SquareLinkText>
                            <div className={classes.firstleftbottom}>
                                <SquareLinkText onClick={() => {navigate('/faculties_detail?f=cpt')}} className={classes.slink} width="386px" height="383px">цифровых <br />промышленных <br />технологий</SquareLinkText>
                                <SquareLinkText onClick={() => {navigate('/faculties_detail?f=ia')}} className={classes.slink} width="386px" height="383px">инженерно- <br/>экономический</SquareLinkText>
                            </div>
                        </div>
                        <SquareLinkText onClick={() => {navigate('/faculties_detail?f=kaia')}} className={classes.slink} width="386px">корабельной<br />энергетики<br />и автоматики</SquareLinkText>
                    </div>

                    <div className={classes.second}>
                        <SquareLinkText onClick={() => {navigate('/faculties_detail?f=mp')}} className={[classes.slink, classes.endSLink].join(' ')} width="793px" height="383px">морского<br />приборостроения</SquareLinkText>
                    </div>

                    <div className={classes.third}>
                        <SquareLinkText onClick={() => {navigate('/faculties_detail?f=eigo')}} className={classes.slink} width="793px" height="383px">естественнонаучного<br />и гуманитарного<br />образования</SquareLinkText>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}


export default Faculties;