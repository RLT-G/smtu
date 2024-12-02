import React, { useState } from "react";
import classes from './index.module.css';
import Button from "../ui/Button";
import persons from '../../persons.json';
import { useNavigate } from "react-router-dom";

interface IPerson {
    id: number;
    fio: string;
    photo: string;
    life_time: string;
    rank: string;
    faculty: string;
    show_on_hero_page: boolean;
    show_on_students_page: boolean;
    show_on_teacher_page: boolean;
    show_on_graduation_page: boolean;
    bio: {
        d39_40: string[];
        d41_45: string[];
        RKKA: string[];
        after: string[];
    };
    opab: string[];
    memory: string[];
    awards: string[];
    sources: string[];
}

const PopUpSearch: React.FC = () => {
    const [searchedPersons, setSearchedPersons] = useState<IPerson[]>([]);
    const [showPersons, setShowPersons] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");

    const searchPerson = (searchedValue: string) => {
        const result = persons.items.filter(({ fio }) =>
            fio.toLowerCase().includes(searchedValue.toLowerCase())
        );
        setSearchedPersons(result);
        setShowPersons(true);
    };

    const buttonHandler = () => {
        if (inputValue.trim()) {
            searchPerson(inputValue);
        } else {
            setSearchedPersons([]);
            setShowPersons(false);
        }
    };
    const navigate = useNavigate()
    return (
        <div className={classes.Wrapper} onClick={(e) => e.stopPropagation()}>
            <div className={classes.InnerWrapper}>
                <input
                    className={classes.Input}
                    type="text"
                    placeholder="Введите текст для поиска"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button className={classes.Button} onClick={buttonHandler}>
                    Найти
                </Button>
            </div>
            <div className={classes.Persons}>
                {showPersons && (
                    <>
                        {searchedPersons.length === 0 ? (
                            <div className={classes.NoResults}>
                                <span className={classes.NRText}>
                                    По вашему запросу «{inputValue}» ничего не найдено.
                                    Попробуйте уточнить запрос или воспользуйтесь
                                </span>
                                <span className={classes.Link} onClick={() => {navigate("/catalog")}}>Каталогом</span>
                            </div>
                        ) : (
                            <div className={classes.YesResults}>
                                <span className={classes.FindCount}>
                                    {`Найдено: ${searchedPersons.length}`}
                                </span>
                                {searchedPersons.map(({ id, fio }) => (
                                    <span
                                        className={classes.Fio}
                                        key={id}
                                        onClick={() => {navigate(`/person?person_id=${id}`)}}
                                    >
                                        {fio}
                                    </span>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default PopUpSearch;
