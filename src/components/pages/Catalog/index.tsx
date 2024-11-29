import React from "react";
import classes from './index.module.css';
import Header from "../../Header";
import Footer from "../../Footer";
import persons from '../../../persons.json'
import InnerCatalog from "../../InnerCatalog";
import Button from "../../ui/Button";

const Catalog: React.FC = () => {
    const getFios = (): Array<[string, number]> => {
        let fios: Array<[string, number]> = []
        persons.items.forEach((person) => {
            fios.push([person.fio, person.id])
        })
        return fios
    }
    return (
        <>
            <Header isMainPage={false}/>
            <div className={classes.Wrapper}>
                <span className={classes.Title}>Алфавитный каталог</span>
                <InnerCatalog fios={getFios()}/>
                <Button className={classes.Button}
                    onClick={() => {}}>полный каталог</Button>
            </div>
            <Footer />
        </>
    )
}


export default Catalog