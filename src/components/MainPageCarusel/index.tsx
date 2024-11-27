import React, { useState } from "react";
import classes from './index.module.css';
import Carusel from "../Carusel";
import news from "../../news.json";
import article from "../../article.json";
import feedbacks from "../../feedbacks.json";


const MainPageCarusel: React.FC = () => {
    const [caruselType, setCaruselType] = useState<string>("news")

    const getCaruselType = ():string => {
        return caruselType
    }

    return (
        <>
            <div className={classes.Wrapper}>
                <div className={classes.CaruseltypeButtons}>
                    
                    <button className={[classes.btnNews, caruselType === 'news' ? classes.active : ''].join(' ')}
                        onClick={() => {setCaruselType('news')}}>новости</button>

                    <button className={[classes.btnArticle, caruselType === 'article' ? classes.active : ''].join(' ')}
                        onClick={() => {setCaruselType('article')}}>статьи</button>

                    <button className={[classes.btnFeedbacks, caruselType === 'feedbacks' ? classes.active : ''].join(' ')}
                        onClick={() => {setCaruselType('feedbacks')}}>отзывы</button>

                </div>

                <span className={classes.AllLinks}
                    onClick={() => {}}>
                    {caruselType === 'news' ? 'Все новости' : caruselType === 'article' ? 'Все статьи' : 'Все отзывы'}    
                </span>                
            </div>
            
            {
                caruselType === 'news' 
                ? <Carusel caruselItems={news.items} getCaruselType={getCaruselType}/> 
                : caruselType === 'article' 
                    ? <Carusel caruselItems={article.items} getCaruselType={getCaruselType}/>  
                    : <Carusel caruselItems={feedbacks.items} getCaruselType={getCaruselType}/>
            }    
        </>
    )
}


export default MainPageCarusel