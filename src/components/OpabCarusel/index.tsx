import React, { ReactNode, useState } from "react";
import classes from './index.module.css';

interface IOpabCarusel {
    children: ReactNode;
    className?: string
}

const OpabCarusel: React.FC<IOpabCarusel> = ({ children, className }) => {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [startIndex, setStartIndex] = useState<number>(0);

    const childrenArray = React.Children.toArray(children);

    const visibleCount = width > 1024 ? 3 : childrenArray.length;

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
        <div className={[classes.Wrapper, className].join(' ')}>
            <div className={classes.ItemsWrapper}>
                {visibleItems.map((child, index) => (
                    <div
                        key={index}
                        className={classes.Item}
                        style={width > 1024 ? { opacity: 1 - index * 0.4 } : { opacity: 1 }}
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
