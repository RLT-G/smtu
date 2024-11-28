import React, { useRef, useState } from "react";
import classes from './index.module.css';
import feedbacks from '../../../feedbacks.json';
import Header from "../../Header";
import Footer from "../../Footer";
import FeedbacksItem from "../../FeedbacksItem";
import Button from "../../ui/Button";
import GetFeedbackPls from "../../GetFeedbackPls";
import FeedbackForm from "../../FeedbackForm";


const Feedbacks: React.FC = () => {
    const [showAllFeedbacks, setShowAllFeedbacks] = useState<boolean>(false)
    
    const feedbackRef = useRef<HTMLDivElement>(null);

    const scrollToForm = () => {
        feedbackRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const seeAll = () => {
        setShowAllFeedbacks(!showAllFeedbacks)
    }

    return (
        <>
            <Header isMainPage={false}/>
            <div className={classes.Wrapper}>
                <span className={classes.Title}>Отзывы</span>
                <div className={classes.FeedbacksContainer}>

                    {showAllFeedbacks
                        ? feedbacks.items.map(({ date, text, author }, index) => 
                            <FeedbacksItem className={classes.Feedback} key={index} date={date} text={text} author={author}/>)

                        : feedbacks.items.slice(0, 5).map(({ date, text, author }, index) => 
                            <FeedbacksItem className={classes.Feedback} key={index} date={date} text={text} author={author}/>)
                    }

                    {!showAllFeedbacks && <GetFeedbackPls onClick={scrollToForm} className={classes.Feedback}/>}

                </div>
                <Button className={classes.Button}
                    onClick={seeAll}>
                    {showAllFeedbacks ? 'СКРЫТЬ ВСЕ' : 'ПОКАЗАТЬ ВСЕ'}
                </Button>
                <span className={classes.Title}>Оставьте отзыв!</span>
                <FeedbackForm ref={feedbackRef} />
            </div>
            <Footer />
        </>
    )
}


export default Feedbacks;