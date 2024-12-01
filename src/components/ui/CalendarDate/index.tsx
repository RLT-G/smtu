import React from "react";
import classes from './index.module.css'


interface ICalendarDate {
    date: string
    marginBottom?: string
    orientation?: string
}


const CalendarDate: React.FC<ICalendarDate> = ({ date, marginBottom, orientation = 'start' }) => {
    return (
        <>
            <span className={classes.text} style={{
                textAlign: orientation === 'start' ? 'start' : 'end',
                left: orientation === 'start' ? '20px' : 'none',
                right: orientation === 'end' ? '20px' : 'none'
            }}>{date}</span>
            <div className={classes.Line} style={{
                marginBottom: marginBottom
            }}>
                <div className={classes.SubLine} style={{
                    left: orientation === 'start' ? '0' : 'none',
                    right: orientation === 'end' ? '0' : 'none',
                }}></div>
            </div>
        </>
    )
}


export default CalendarDate
