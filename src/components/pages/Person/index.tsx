import React from "react";
import classes from './index.module.css'
import { useLocation } from "react-router-dom";
import Header from "../../Header";
import Footer from "../../Footer";
import persons from "../../../persons.json";
import SquareLinkText from "../../SquareLinkText";
import PersonData from "../../PersonData";
import Button from "../../ui/Button";
import PersonItem from "../../PersonItem";

const Person: React.FC = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const get_person_id = (): number => {
        const person_id = Number(params.get('person_id'));
        if (person_id >= persons.items.length) {
            return 1
        }
        return person_id
    }
    const person_id = get_person_id()
    return (
        <>
            <Header isMainPage={false}/>
            <div className={classes.Wrapper}>
                <div className={classes.Person}>
                    <div className={classes.PersonMainData}>
                        <span className={classes.Name}>
                            {persons.items.find(({ id }) => id === person_id)?.fio}
                        </span>
                        <span className={classes.LifeTime}>
                            {persons.items.find(({ id }) => id === person_id)?.life_time}
                        </span>
                        <span className={classes.Rank}>
                            {persons.items.find(({ id }) => id === person_id)?.rank}
                        </span>
                        <div className={classes.tags}>
                            <span className={classes.tag}>#студент</span>
                            <span className={classes.tag}>#264-й ОПАБ</span>
                            <span className={classes.tag}>#кораблестроительный</span>
                        </div>
                    </div>
                    <SquareLinkText className={classes.PersonPhoto}
                        style={
                            {
                                background: `url(${persons.items.find(({ id }) => id === person_id)?.photo}) no-repeat`,
                                backgroundSize: 'cover'
                            }}
                    ></SquareLinkText>
                </div>
                <PersonData 
                    bio={persons.items.find(({ id }) => id ===  person_id)?.bio}
                    opab={persons.items.find(({ id }) => id === person_id)?.opab}
                    memory={persons.items.find(({ id }) => id === person_id)?.memory}
                    awards={persons.items.find(({ id }) => id === person_id)?.awards}
                    sources={persons.items.find(({ id }) => id === person_id)?.sources}
                    />

                <div className={classes.RecommendedWrapper}>
                    <span className={classes.RecommendedTitle}>Рекомендации</span>
                    <Button className={classes.RecommendedButton}
                        onClick={() => {}}>
                        посмотреть всех
                    </Button>
                </div>
                <div className={classes.RecommendedPersonWrapper}>
                    {persons.items.slice(0, 3).map(({ id, fio, rank, photo }) => <PersonItem className={classes.PersonCart} id={id} fio={fio} rank={rank} photo={photo}/>)}
                </div>
            </div>
            <Footer />
        </>
    )
}


export default Person