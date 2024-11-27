import React from "react";
import FirstHeader from "../FirstHeader";
import SecondHeader from "../SecondHeader";


interface IHeader {
    isMainPage: boolean
}


const Header: React.FC<IHeader> = ({ isMainPage }) => {
    if (isMainPage) {
        return ( <FirstHeader /> )
    }
    return ( <SecondHeader /> )
}


export default Header;
