import React, { useState } from "react";
import classes from './index.module.css';
import SquareLinkText from "../../SquareLinkText";
import PopUpWrapper from "../../PopUpWrapper";
import PopUpImage from "../../PopUpImage";

interface IArticlePhotoCarousel {
    data: any // Array<Array<string>>
}

const ArticlePhotoCarousel: React.FC<IArticlePhotoCarousel> = ({ data }) => {
    const [dataIndex, setDataIndex] = useState<number>(0)
    const [popUpIsOpen, setPopUpIsOpen] = useState<boolean>(false)
    const openPopUp = (): void => { setPopUpIsOpen(true) }
    const closePopUp = (): void => { setPopUpIsOpen(false) }
    const leftArrowhandler = (): void => {
        const newDataIndex = dataIndex - 1
        if (newDataIndex >= 0) {
            setDataIndex(newDataIndex)
        }
    }
    const rightArrowHandler = (): void => {
        const newDataIndex = dataIndex + 1
        if (newDataIndex < data.length) {
            setDataIndex(dataIndex + 1)
        }
    }
    return (
        <>
            {popUpIsOpen && <PopUpWrapper closePopUp={closePopUp}>
                <PopUpImage photoUrl={data[dataIndex][0]} closePopUp={closePopUp} photoCaption={data[dataIndex][1]}/>
            </PopUpWrapper>}

            <div className={classes.Wrapper}>
                <SquareLinkText className={classes.Photo} style={{
                    background: `url(${data[dataIndex][0]}) no-repeat center/cover`
                }} onClick={openPopUp}>

                </SquareLinkText>
                <div className={classes.Wrapper2}>
                    <span className={classes.Caption}>{data[dataIndex][1]}</span>
                    <div className={classes.Arrows}>
                        <button className={classes.ArrowLeft} disabled={dataIndex - 1 < 0}
                            onClick={leftArrowhandler}></button>
                        <button className={classes.ArrowRight} disabled={dataIndex + 1 >= data.length}
                            onClick={rightArrowHandler}></button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ArticlePhotoCarousel;