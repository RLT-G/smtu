import React from "react";
import Header from "../../Header";
import classes from './index.module.css';
import SquareLinkText from "../../SquareLinkText";
import SquareText from "../../SquareText";



const Main: React.FC = () => {
    return (
        <>
            <Header isMainPage={true}/>
            <div className={classes.Wrapper}>
                <div className={[classes.Part, classes.Part1].join(' ')}>
                     <div className={classes.Left}>
                        <SquareLinkText className={classes.Part1LeftLink} onClick={() => {}}>Герои</SquareLinkText>
                        <SquareLinkText className={classes.Part1LeftLink} onClick={() => {}}>факультеты</SquareLinkText>
                        <SquareLinkText className={classes.Part1LeftLink} onClick={() => {}}>студенты</SquareLinkText>
                        <SquareLinkText className={classes.Part1LeftLink} onClick={() => {}}>выпускники</SquareLinkText>

                     </div>
                     <div className={classes.Right}>
                        <SquareText className={classes.Part1RightText}>
                            Мы расскажем не только о студентах, преподавателях и выпускниках ЛКИ, но и о героях Великой отечественной войны, которые жертвовали собой ради мира, ради того, чтобы мы и наши дети могли учиться и жить. <br/><br />Об отважных молодых ребятах, студентах, которые добровольцами вступали в отдельный пулеметно-артиллерийский батальон.
                        </SquareText>
                     </div>
                </div>

                <div className={[classes.Part, classes.Part2].join(' ')}>
                    <SquareLinkText className={classes.Part2LeftLink} onClick={() => {}}>264-й опаб</SquareLinkText>
                </div>

                <div className={[classes.Part, classes.Part3].join(' ')}>
                    <SquareLinkText className={classes.Part3Left} onClick={() => {}}>алфавитный каталог</SquareLinkText>
                    <div className={classes.Part3Right}>
                        <SquareLinkText className={classes.Part3RightItem1} onClick={() => {}}>преподаватели</SquareLinkText>
                    </div>
                </div>

                <div className={[classes.Part, classes.Part4].join(' ')}>

                </div>

            </div>
            {/* TODO: footer */}
        </>
    )
}

export default Main