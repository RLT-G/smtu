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
    return (
        <>
            <Header isMainPage={false}/>
            <div className={classes.Wrapper}>
                <ArticleTitle text={articleData.items[1].page[0].content}/>
                <ArticlePhoto url={articleData.items[1].page[1].content}/>
                <ArticleText text={articleData.items[1].page[2].content}/>
                <ArticleSubtitle text={articleData.items[1].page[3].content}/>
                <ArticleText text={articleData.items[1].page[4].content}/>
                <ArticlePhotoCarousel data={articleData.items[1].page[5].content}/>
                <ArticleText text={articleData.items[1].page[6].content}/>
                <ArticleQuote text={articleData.items[1].page[7].content}/>
                <ArticleText text={articleData.items[1].page[8].content}/>
                <ArticlePhotoAndText data={articleData.items[1].page[9].content}/>
                <ArticleText text={articleData.items[1].page[10].content}/>
                <ArticleQuote text={articleData.items[1].page[11].content}/>
                <ArticleSubtitle text={articleData.items[1].page[12].content}/>
                <ArticleText text={articleData.items[1].page[13].content}/>
                <ArticleText text={articleData.items[1].page[14].content}/>
                <ArticleText text={articleData.items[1].page[15].content}/>
                <ArticlePhotoAndCaption data={articleData.items[1].page[16].content}/>
                <ArticleText text={articleData.items[1].page[17].content}/>
                <ArticleText text={articleData.items[1].page[18].content}/>
                <ArticleQuote text={articleData.items[1].page[19].content}/>
                <ArticlePhotoCarousel data={articleData.items[1].page[20].content}/>
            </div>
            <Footer />
        </>
    )
}


export default Articles;