import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import classes from './index.module.css';
import SquareLinkText from "../../SquareLinkText";


const Faculties: React.FC = () => {
    return (
        <>
            <Header isMainPage={false}/>
            <div className={classes.Wrapper}>
                <span className={classes.Title}>Факультеты</span>
                <div className={classes.Links}>
                    
                    <div className={classes.first}>
                        <div className={classes.fitstleft}>
                            <SquareLinkText className={classes.slink} width="793px" height="383px">кораблестроения <br />и океанотехники</SquareLinkText>
                            <div className={classes.firstleftbottom}>
                                <SquareLinkText className={classes.slink} width="386px" height="383px">цифровых <br />промышленных <br />технологий</SquareLinkText>
                                <SquareLinkText className={classes.slink} width="386px" height="383px">инженерно- <br/>экономический</SquareLinkText>
                            </div>
                        </div>
                        <SquareLinkText className={classes.slink} width="386px">корабельной<br />энергетики<br />и автоматики</SquareLinkText>
                    </div>

                    <div className={classes.second}>
                        <SquareLinkText className={[classes.slink, classes.endSLink].join(' ')} width="793px" height="383px">морского<br />приборостроения</SquareLinkText>
                    </div>

                    <div className={classes.third}>
                        <SquareLinkText className={classes.slink} width="793px" height="383px">естественнонаучного<br />и гуманитарного<br />образования</SquareLinkText>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}


export default Faculties;