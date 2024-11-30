import React, { useState } from "react";
import classes from './index.module.css';
import SquareLinkText from "../../SquareLinkText";
import PopUpWrapper from "../../PopUpWrapper";
import PopUpImage from "../../PopUpImage";

interface IArticlePhotoAndCaption {
    data: any
}

const ArticlePhotoAndCaption: React.FC<IArticlePhotoAndCaption> = ({ data }) => {
    const [popUpIsOpen, setPopUpIsOpen] = useState<boolean>() 
    const openPopUp = (): void => { setPopUpIsOpen(true) }
    const closePopUp = (): void => { setPopUpIsOpen(false) }
    return (
        <>
            {popUpIsOpen && <PopUpWrapper closePopUp={closePopUp}>
                <PopUpImage photoUrl={data[0]} photoCaption={data[1]} closePopUp={closePopUp}/>
            </PopUpWrapper>}
            <div className={classes.Wrapper}>
                <SquareLinkText className={classes.Photo} style={{
                    background: `url(${data[0]}) no-repeat center/cover`
                }} onClick={openPopUp}>
                </SquareLinkText>
                <span className={classes.Text}>{data[1]}</span>
            </div>
        </>
    )
}


export default ArticlePhotoAndCaption;