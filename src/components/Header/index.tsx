import React from "react";
import FirstHeader from "../FirstHeader";
import SecondHeader from "../SecondHeader";


interface IHeader {
    isMainPage: boolean;
    fScroll?: () => void;
}


const Header: React.FC<IHeader> = ({ isMainPage, fScroll }) => {
    if (isMainPage) {
        return ( <FirstHeader fScroll={fScroll}/> )
    }
    return ( <SecondHeader /> )
}


export default Header;
