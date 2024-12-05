import React from "react";
import classes from './index.module.css';
import Header from "../../Header";
import Footer from "../../Footer";
import ArticleTitle from "../../ui/ArticleTitle";
import ArticlePhoto from "../../ui/ArticlePhoto";
import ArticleText from "../../ui/ArticleText";
import ArticleSubtitle from "../../ui/ArticleSubtitle";
import ArticlePhotoCarousel from "../../ui/ArticlePhotoCarousel";
import ArticleQuote from "../../ui/ArticleQuote";
import ArticlePhotoAndText from "../../ui/ArticlePhotoAndText";
import ArticlePhotoAndCaption from "../../ui/ArticlePhotoAndCaption";
import articles from '../../../article.json';
import { useLocation } from "react-router-dom";

interface PageContent {
    type: string;
    content: string | string[][] | { text: string; photo: string; caption: string } | string[];
}

interface ArticleItem {
    id: number;
    page: PageContent[];
    author: string;
    time: string;
    source: string;
}

interface ArticleData {
    items: ArticleItem[];
}
  


const Articles: React.FC = () => {
    const articleData: ArticleData = require('../../../renderingArticlesData.json');
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const get_article_id = (): number => {
        const article_id = Number(params.get('article_id'));
        if (article_id >= articles.items.length || !article_id) {
            return 1
        }
        return article_id
    }
    const article_id = get_article_id()
    const [width, setWidth] = React.useState(window.innerWidth);
  
    React.useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Header isMainPage={false}/>
            <div className={classes.Wrapper}>
                <div className={classes.DateAuthorTime}>
                    <span className={classes.Date}>{articles.items.find(({ id }) => id === article_id)?.date}</span>
                    <span className={classes.subTitle}>автор:</span>
                    <span className={classes.title}>{articleData.items.find(({ id }) => id === article_id)?.author}</span>
                    <span className={classes.subTitle}>время прочтения:</span>
                    <span className={classes.title}>{articleData.items.find(({ id }) => id === article_id)?.time}</span>
                </div>
                <div className={classes.Source}>
                    <span className={classes.title}>ИСТОЧНИК:</span>
                    <span className={classes.subTitle}>{articleData.items.find(({ id }) => id === article_id)?.source}</span>
                </div>
                {articleData.items.find(({ id }) => id === article_id)?.page.map((pageElement, index) => {
                    if (pageElement.type === "title") {
                        if (width > 1200) {
                            return <ArticleTitle text={pageElement.content}/>
                        } else {
                            return <ArticleTitle text={pageElement.content}
                                date={articles.items.find(({ id }) => id === article_id)?.date} 
                                author={articleData.items.find(({ id }) => id === article_id)?.author}
                                time={articleData.items.find(({ id }) => id === article_id)?.time}/>
                        }

                    } else if (pageElement.type === "photo") {
                        return <ArticlePhoto url={pageElement.content}/>

                    } else if (pageElement.type === "text") {
                        return <ArticleText text={pageElement.content}/>

                    }else if (pageElement.type === "subtitle") {
                        return <ArticleSubtitle text={pageElement.content}/>

                    }else if (pageElement.type === "photo_carousel") {
                        return <ArticlePhotoCarousel data={pageElement.content}/>

                    }else if (pageElement.type === "quote") {
                        return <ArticleQuote text={pageElement.content}/>

                    }else if (pageElement.type === "photo_and_text") {
                        return <ArticlePhotoAndText data={pageElement.content}/>

                    }else {
                        return <ArticlePhotoAndCaption data={pageElement.content}/>
                    }
                })}
            </div>
            <Footer />
        </>
    )
}


export default Articles;