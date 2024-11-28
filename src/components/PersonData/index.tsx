import React, { useState } from "react";
import classes from './index.module.css'

interface IBio {
    d39_40: Array<string> | undefined
    d41_45: Array<string> | undefined
    RKKA: Array<string> | undefined
    after: Array<string> | undefined
}

interface IPersonData {
    bio: IBio | undefined;
    opab: Array<string> | undefined
    memory: Array<string> | undefined
    awards: Array<string> | undefined
    sources: Array<string> | undefined
}


const PersonData: React.FC<IPersonData> = ({ bio, opab, memory, awards, sources }) => {
    const [tabType, setTabType] = useState<string>('bio') // bio opab memory awards sources
    const [bioType, setBioType] = useState<string>('d39_40') 
    const [PageIndex, setPageIndex] = useState<number>(0)
    const [maxPageIndex, setMaxPageIndex] = useState<number>( bio?.d39_40?.length ? bio?.d39_40?.length : 0 )

    const arrowLeftHandler = () => {
        if (PageIndex - 1 >= 0) {
            setPageIndex(PageIndex - 1)
        }
    }

    const arrowRightHandler = () => {
        if (PageIndex + 1 <= maxPageIndex - 1) {
            setPageIndex(PageIndex + 1)
        }
    }
    
    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.TabSelector}>
                    <button className={[classes.Button, tabType === 'bio' && classes.Acctive].join(' ')}
                        onClick={() => {setTabType('bio');setPageIndex(0);setMaxPageIndex(bio?.d39_40?.length ? bio?.d39_40?.length : 0);setBioType('d39_40')}}
                    >Биография</button>
                    <button className={[classes.Button, tabType === 'opab' && classes.Acctive].join(' ')}
                        onClick={() => {setTabType('opab');setPageIndex(0);setMaxPageIndex(opab?.length ? opab.length : 0)}}
                    >264-й ОПАБ</button>
                    <button className={[classes.Button, tabType === 'memory' && classes.Acctive].join(' ')}
                        onClick={() => {setTabType('memory');setPageIndex(0);setMaxPageIndex(memory?.length ? memory.length : 0)}}
                    >Память</button>
                    <button className={[classes.Button, tabType === 'awards' && classes.Acctive].join(' ')}
                        onClick={() => {setTabType('awards');setPageIndex(0);setMaxPageIndex(awards?.length ? awards.length : 0)}}
                    >Награды</button>
                    <button className={[classes.Button, tabType === 'sources' && classes.Acctive].join(' ')}
                        onClick={() => {setTabType('sources');setPageIndex(0);setMaxPageIndex(sources?.length ? sources.length : 0)}}
                    >Источники</button>
                </div>
                {tabType === 'bio' && (
                    <>
                        <div className={classes.TabWrapper}>
                            <div className={classes.Tab}>
                                <div className={classes.BioButtons}>
                                    <button className={[classes.BioButton, bioType === 'd39_40' && classes.BioBtnActive].join(' ')}
                                        onClick={() => {
                                            setBioType('d39_40');
                                            setPageIndex(0);
                                            bio?.d39_40 && setMaxPageIndex(bio.d39_40.length)}}
                                    >Советско-финская война (1939—1940)</button>
                                    
                                    <button className={[classes.BioButton, bioType === 'd41_45' && classes.BioBtnActive].join(' ')}
                                        onClick={() => {
                                            setBioType('d41_45');
                                            setPageIndex(0);
                                            bio?.d41_45 && setMaxPageIndex(bio.d41_45.length)}}
                                    >Великая Отечественная война (1941-1945)</button>
                                    
                                    <button className={[classes.BioButton, bioType === 'RKKA' && classes.BioBtnActive].join(' ')}
                                        onClick={() => {
                                            setBioType('RKKA');
                                            setPageIndex(0);
                                            bio?.RKKA && setMaxPageIndex(bio.RKKA.length)}}
                                    >Дальнейшая служба в РККА</button>
                                    
                                    <button className={[classes.BioButton, bioType === 'after' && classes.BioBtnActive].join(' ')}
                                        onClick={() => {
                                            setBioType('after');
                                            setPageIndex(0);
                                            bio?.after && setMaxPageIndex(bio.after.length)}}
                                    >После Великой Отечественной войны</button>
                                    
                                </div>
                                <span className={classes.BioContent}>
                                    {bioType === 'd39_40' && bio?.d39_40 && bio.d39_40[PageIndex]}
                                    {bioType === 'd41_45' && bio?.d41_45 && bio.d41_45[PageIndex]}
                                    {bioType === 'RKKA' && bio?.RKKA && bio.RKKA[PageIndex]}
                                    {bioType === 'after' && bio?.after && bio.after[PageIndex]}
                                </span>
                                <div className={classes.Arrows}>
                                    <div className={classes.ArrowsContainer}>
                                        <span className={classes.ArrowsNumber}>{`${PageIndex + 1}/${maxPageIndex}`}</span>
                                        <div className={classes.ArrowsWrapper}>
                                            <button className={classes.ArrowLeft} onClick={arrowLeftHandler}></button>
                                            <button className={classes.ArrowRight} onClick={arrowRightHandler}></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {!(tabType === 'bio') && (
                    <>
                        <div className={classes.TabWrapper}>
                            <div className={classes.Tab}>
                                <span className={classes.BioContent}>
                                    {tabType === 'opab' && opab && opab[PageIndex]}
                                    {tabType === 'memory' && memory && memory[PageIndex]}
                                    {tabType === 'awards' && awards && awards[PageIndex]}
                                    {tabType === 'sources' && sources && sources[PageIndex]}
                                </span>
                                <div className={classes.Arrows}>
                                    <div className={classes.ArrowsContainer}>
                                        <span className={classes.ArrowsNumber}>{`${PageIndex + 1}/${maxPageIndex}`}</span>
                                        <div className={classes.ArrowsWrapper}>
                                            <button className={classes.ArrowLeft} onClick={arrowLeftHandler}></button>
                                            <button className={classes.ArrowRight} onClick={arrowRightHandler}></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </>
    )
}


export default PersonData