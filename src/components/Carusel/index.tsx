import React, { useState } from "react";
import classes from './index.module.css'
import NewsItem from "../NewsItem";
import ArticleItem from "../ArticleItem";
import FeedbacksItem from "../FeedbacksItem";

interface INews {
    date: string;
    id?: number;
    text: string;
    author?: string;
}

interface IArticle {
    id?: number;
    date: string;
    text: string;
    author?: string;
}

interface IFeedbacks {
    id?: number;
    date: string;
    author: string;
    text: string;
}

interface ICarusel {
    caruselItems: Array<INews> | Array<IArticle> | Array<IFeedbacks>;
    getCaruselType: () => string;
}

const Carusel: React.FC<ICarusel> = ({ caruselItems, getCaruselType }) => {
    caruselItems = caruselItems.slice(0, 6)

    const [offset, setOffset] = useState<number>(0)

    const moveLeft = (): void => {
        let newOffset = offset + 400
        if (newOffset < 0 ) {
            setOffset(offset + 400)
        }

    }

    const moveRight = (): void => {
        let newOffset = offset - 400
        if (newOffset >= -(caruselItems.length - 2) * 400){
            setOffset(offset - 400)
        }
    }
    
    return (
        <div className={classes.Wrapper}>
            {
                getCaruselType() === 'news' 
                ? caruselItems.map(({ date, text }) => <NewsItem style={{transform: `translateX(${offset}px)`}} date={date} text={text}/>)
                : getCaruselType() === 'article' 
                    ?  caruselItems.map(({ id, date, text }) => <ArticleItem style={{transform: `translateX(${offset}px)`}} id={id} date={date} text={text}/>)
                    :  caruselItems.map(({ date, author, text }) => <FeedbacksItem style={{transform: `translateX(${offset}px)`}} date={date} text={text} author={author}/>)
            }

            <button className={classes.ArrowLeft}
                onClick={() => {moveLeft()}}
            ></button>
            <button className={classes.ArrowRight}
                onClick={() => {moveRight()}}
            ></button>
        </div>
    )
}


export default Carusel