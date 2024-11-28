import React, { useState } from "react";
import classes from './index.module.css'
import Header from "../../Header";
import Footer from "../../Footer";
import news from '../../../news.json';
import articles from '../../../article.json';
import NewsItem from "../../NewsItem";
import { useLocation } from "react-router-dom";
import ArticleItem from "../../ArticleItem";
import Button from "../../ui/Button";


const NewsArticles: React.FC = () => {
    
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const isNewsPage = params.get('isNewsPage') === 'true';
    const allCount = isNewsPage ? news.items.length : articles.items.length
    const [itemsCount, setItemsCount] = useState<number>(9)
    const [needButton, setNeedButton] = useState<boolean>(true)

    const loadMore = (): void => {
        const newItemsCount = itemsCount + 3
        
        setItemsCount(newItemsCount)
        if (newItemsCount >= allCount) {
            setNeedButton(false)
        }
    }

    return (
        <>
            <Header isMainPage={false}/>
            <div className={classes.wrapper}>
                <span className={classes.title}>{ isNewsPage ? 'Новости' : 'Статьи' }</span>
                <div className={classes.ItemsContainer}>
                    {
                        isNewsPage
                        ? news.items.slice(0, itemsCount).map(({ text, date }, index) => <NewsItem className={classes.cart} key={index} date={date} text={text}/>)
                        : articles.items.slice(0, itemsCount).map(({ text, date }, index) => <ArticleItem className={classes.cart} key={index} date={date} text={text}/>)
                    }
                </div>
                
                {needButton && <Button className={classes.Button}
                    onClick={loadMore}>
                    Показать еще
                </Button>}
                
            </div>
            <Footer />
        </>
    )
}


export default NewsArticles