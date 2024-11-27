import React, { useState, ReactNode } from "react";

interface IDropDownMenu {
    children: ReactNode,
    dropElement: ReactNode, 
    className?: string,
    onClick?: () => void
}

const DropDownMenu: React.FC<IDropDownMenu> = ({ className, children, dropElement, onClick }) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    return (
        <div className={className} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onClick={onClick}>
            {children}
            {isHover && <>{dropElement}</>}
        </div>
    );
};

export default DropDownMenu;