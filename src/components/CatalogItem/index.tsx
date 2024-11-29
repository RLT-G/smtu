import React from "react";
import classes from './index.module.css';

interface ICatalogItem {
    letter: string
    fios: Array<[string, number]>
}

const CatalogItem: React.FC<ICatalogItem> = ({ letter, fios }) => {

    return (
        <>
            <div className={classes.Wrapper}>
                <span className={classes.Letter}>{letter}</span>
                {fios.map(([fio, id], index) => 
                    <span key={index} className={classes.fio}
                        onClick={() => {}}
                    >{fio}</span>)}
            </div>
        </>
    )
}


export default CatalogItem