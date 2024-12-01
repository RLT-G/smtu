import React from "react";
import classes from './index.module.css'


interface ICalendarBoldText {
    text: string
    marginBottom?: string
    orientation?: string
}


const CalendarBoldText: React.FC<ICalendarBoldText> = ({ text, marginBottom, orientation = 'start' }) => {
    return (
        <>
            <div className={classes.Text} style={{
                // textAlign: orientation === 'start' ? 'start' : 'end',
                left: orientation === 'start' ? '20px' : 'none',
                right: orientation === 'end' ? '20px' : 'none',
                marginBottom: marginBottom
            }}>{text}</div>
        </>
    )
}


export default CalendarBoldText
