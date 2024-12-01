import React, { useState } from "react";
import classes from './index.module.css';
import SquareLinkText from "../../SquareLinkText";
import PopUpImage from "../../PopUpImage";
import PopUpWrapper from "../../PopUpWrapper";

interface ICalendarPhoto {
    photo: string;
    className: string;
    caption: string;
    orientation?: string;
    marginBottom?: string
}

const CalendarPhoto: React.FC<ICalendarPhoto> = ({ photo, className, caption, marginBottom, orientation = 'start' }) => {
    const [popUpIsOpen ,setPopUpIsOpen] = useState<boolean>(false)
    const openPopUp = (): void => { setPopUpIsOpen(true) }
    const closePopUp = (): void => { setPopUpIsOpen(false) }
    return (
        <>
            {popUpIsOpen && <PopUpWrapper closePopUp={closePopUp}>
                <PopUpImage photoUrl={photo} closePopUp={closePopUp} photoCaption={caption}/>
            </PopUpWrapper>}

            <div className={classes.Wrapper} style={{
                marginBottom: marginBottom
            }}>
                <SquareLinkText className={className} style={{
                    background: `url(${photo}) no-repeat center/cover`,
                    left: orientation === 'start' ? '20px' : 'none',
                    right: orientation === 'end' ? '20px' : 'none'
                }} onClick={openPopUp}>

                </SquareLinkText>
                <span className={classes.caption} style={{
                    left: orientation === 'start' ? '20px' : 'none',
                    right: orientation === 'end' ? '20px' : 'none'
                }}>{caption}</span>
            </div>
        </>
    )
}

export default CalendarPhoto