import React from "react";
import classes from './index.module.css';
import { useNavigate } from "react-router-dom";

interface ICatalogItem {
    letter: string
    fios: Array<[string, number]>
}

const CatalogItem: React.FC<ICatalogItem> = ({ letter, fios }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className={classes.Wrapper}>
                <span className={classes.Letter}>{letter}</span>
                {fios.map(([fio, id], index) => 
                    <span key={index} className={classes.fio}
                        onClick={() => {navigate(`/person?person_id=${id}`)}}
                    >{fio}</span>)}
            </div>
        </>
    )
}


export default CatalogItem