import React, { useRef } from "react";
import Header from "../../Header";
import classes from './index.module.css';
import SquareLinkText from "../../SquareLinkText";
import SquareText from "../../SquareText";
import MainPageCarusel from "../../MainPageCarusel";
import Footer from "../../Footer";
import { useNavigate } from "react-router-dom";


const Main: React.FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const navigatee = useNavigate()
    const scrollToForm = () => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Header isMainPage={true} fScroll={scrollToForm}/>
            <div className={classes.Wrapper} ref={contentRef}>
                <div className={[classes.Part, classes.Part1].join(' ')}>
                     <div className={classes.Left}>
                        <SquareLinkText className={classes.Part1LeftLink} onClick={() => {navigatee('/other?filter=hero')}}>Герои</SquareLinkText>
                        <SquareLinkText className={classes.Part1LeftLink} onClick={() => {navigatee('/faculties')}}>факультеты</SquareLinkText>
                        <SquareLinkText className={classes.Part1LeftLink} onClick={() => {navigatee('/other?filter=students')}}>студенты</SquareLinkText>
                        <SquareLinkText className={classes.Part1LeftLink} onClick={() => {navigatee('/other?filter=graduation')}}>выпускники</SquareLinkText>

                     </div>
                     <div className={classes.Right}>
                        <SquareText className={classes.Part1RightText}>
                            Мы расскажем не только о студентах, преподавателях и выпускниках ЛКИ, но и о героях Великой отечественной войны, которые жертвовали собой ради мира, ради того, чтобы мы и наши дети могли учиться и жить. <br/><br />Об отважных молодых ребятах, студентах, которые добровольцами вступали в отдельный пулеметно-артиллерийский батальон.
                        </SquareText>
                     </div>
                </div>

                <div className={[classes.Part, classes.Part2].join(' ')}>
                    <SquareLinkText className={classes.Part2LeftLink} onClick={() => {navigatee('/opab')}}>264-й опаб</SquareLinkText>
                </div>

                <div className={[classes.Part, classes.Part3].join(' ')}>
                    <SquareLinkText className={classes.Part3Left} onClick={() => {navigatee('/catalog')}}>алфавитный каталог</SquareLinkText>
                    <div className={classes.Part3Right}>
                        <SquareLinkText className={classes.Part3RightItem1} onClick={() => {navigatee('/other?filter=teacher')}}>преподаватели</SquareLinkText>
                        <SquareText className={classes.Part3RightItem2}>
                        Многие пали смертью храбрых. Многие имена невозможно восстановить. Но мы всегда будем помнить защитников, героев, молодых ребят, отдавших за нас свои жизни.
                        <br />Солдат умирает — когда о нём забывают. Мы — не забудем!
                        </SquareText>
                    </div>
                </div>

                <div className={[classes.Part, classes.Part4].join(' ')}>
                    <MainPageCarusel />
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Main