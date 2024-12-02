import React, { ReactNode, useState } from "react";
import classes from './index.module.css';

interface IOpabCarusel {
    children: ReactNode;
}

const OpabCarusel: React.FC<IOpabCarusel> = ({ children }) => {
    const [startIndex, setStartIndex] = useState<number>(0);

    const childrenArray = React.Children.toArray(children);

    const visibleCount = 3;

    const visibleItems = childrenArray.slice(startIndex, startIndex + visibleCount);

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const handleNext = () => {
        if (startIndex + 1 < childrenArray.length) {
            setStartIndex(startIndex + 1);
        }
    };

    return (
        <div className={classes.Wrapper}>
            <div className={classes.ItemsWrapper}>
                {visibleItems.map((child, index) => (
                    <div
                        key={index}
                        className={classes.Item}
                        style={{ opacity: 1 - index * 0.4 }}
                    >
                        {child}
                    </div>
                ))}
            </div>

            <button className={classes.ArrowLeft} onClick={handlePrev} disabled={startIndex === 0}>

            </button>
            <button className={classes.ArrowRight} onClick={handleNext} disabled={startIndex + 1 >= childrenArray.length}>

            </button>
        </div>
    );
};

export default OpabCarusel;
