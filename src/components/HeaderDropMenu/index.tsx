import React from "react";
import classes from './index.module.css';


interface IMenuItem {
    text: string;
    onClick: () => void;
}


interface IHeaderDropMenu {
    data: IMenuItem[];
    isSmall: boolean;
    left: string;
}


const HeaderDropMenu: React.FC<IHeaderDropMenu> = ({ data, isSmall, left}) => {
    return (
        <div className={classes.wrapper} style={{left: left, width: isSmall ? '218px' : '270px'}}>
            {data.map(({ text, onClick }, index) => 
                <button className={classes.MenuButton}
                    onClick={onClick}
                    key={index}
                >{text}</button>
            )}
        </div>
    )
}


export default HeaderDropMenu