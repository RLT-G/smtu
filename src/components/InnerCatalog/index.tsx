import React from "react";
import classes from './index.module.css';
import CatalogItem from "../CatalogItem";

interface IInnerCatalog {
    fios: Array<[string, number]>
}

const InnerCatalog: React.FC<IInnerCatalog> = ({ fios }) => {
    const alphabet = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯ"
    
    const getFiosStartsWith = ( letter: string ): Array<[string, number]> => {
        let result: Array<[string, number]> = []
        fios.forEach(([fio, id]) => {
            if (letter.toLowerCase() === fio.at(0)?.toLowerCase()) {
                result.push([fio, id])
            }
        })
        return result
    }

    return (
        <>
            <div className={classes.Wrapper}>
                <div className={classes.AlfBtn}>
                    {alphabet.split('').map((letter, index) => <button key={index} className={classes.letterBtn}>{letter}</button>)}
                </div>
                <div className={classes.Catalog}>
                    {alphabet.split('').map((letter, index) => 
                        <CatalogItem key={index} letter={letter} fios={getFiosStartsWith(letter = letter)}/>
                    )}
                </div>
            </div>
        </>
    )
}


export default InnerCatalog