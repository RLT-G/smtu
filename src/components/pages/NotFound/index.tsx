import React from "react";
import Header from "../../Header";
import classes from './index.module.css'

const NotFound: React.FC = () => {
    return (
        <>
            <Header isMainPage={false}/>
            
            <div className={classes.Text}>Not Found 404</div>
        </>
    )
}


export default NotFound