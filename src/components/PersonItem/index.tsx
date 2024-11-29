import React, { CSSProperties } from "react";
import classes from './index.module.css'
import { Navigate, useNavigate } from "react-router-dom";

interface IPersonItem {
    id: number;
    fio: string;
    rank: string;
    photo?: string;
    className?: string;
}

const PersonItem: React.FC<IPersonItem> = ({ id, fio, rank, photo, className }) => {
    const navigate = useNavigate()

    return (
        <div className={[classes.Wrapper, className].join(' ')} onClick={() => {navigate(`/person?person_id=${id}`)}}>
            <div className={classes.Ico} style={{
                background: `url(${photo}) no-repeat`,
                backgroundSize: 'cover'
            }}></div>

            <div className={classes.TextContent}>
                <span className={classes.fio}>{fio}</span>
                <span className={classes.rank}>{rank}</span>
                <div className={classes.Tags}>
                    <span className={classes.Tag}>#264-й ОПАБ</span>
                    <span className={classes.Tag}>#студент</span>
                </div>
            </div>
            
        </div>
    )
}


export default PersonItem