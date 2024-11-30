import React, { useState } from "react";
import classes from './index.module.css';
import SquareLinkText from "../../SquareLinkText";
import PopUpWrapper from "../../PopUpWrapper";
import PopUpImage from "../../PopUpImage";

interface IArticlePhotoAndText {
    data: any // { text photo caption }
}

const ArticlePhotoAndText: React.FC<IArticlePhotoAndText> = ({ data }) => {
    const [popUpIsOpen, setPopUpIsOpen] = useState<boolean>()
    const openPopUp = (): void => { setPopUpIsOpen(true) }
    const closePopUp = (): void => { setPopUpIsOpen(false) }
    return (
        <>
            {popUpIsOpen && <PopUpWrapper closePopUp={closePopUp}>
                <PopUpImage photoUrl={data.photo} closePopUp={closePopUp} photoCaption={data.caption}/>
            </PopUpWrapper>}

            <div className={classes.Wrapper}>
                <div className={classes.PhotoContainer}>
                    <SquareLinkText className={classes.Photo} style={{
                        background: `url(${data.photo}) no-repeat center/cover`
                    }} onClick={openPopUp}>

                    </SquareLinkText>
                    <span className={classes.Caption}>{data.caption}</span>
                </div>
                <span className={classes.Text}>{data.text}</span>
            </div>
        </>
    )
}


export default ArticlePhotoAndText;