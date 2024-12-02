import React from "react";
import clases from './index.module.css';
import Header from "../../Header";
import Footer from "../../Footer";
import ArticleText from "../../ui/ArticleText";
import ArticlePhotoCarousel from "../../ui/ArticlePhotoCarousel";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import Carusel from "../../Carusel";
import OpabCarusel from "../../OpabCarusel";
import persons from '../../../persons.json'
import PersonItem from "../../PersonItem";


const Opab: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <Header isMainPage={false}/>
            <div className={clases.Wrapper}>
                <span className={clases.Title}>264-й ОПАБ</span>
                <div className={clases.InnerWrapper}>
                    <ArticleText text={"В июле 1941 года был сформирован 264-й отдельный пулемётно-артиллерийский батальон, состоящий примерно из 1100 ополченцев-добровольцев. В батальон было отобрано примерно 450 студентов и сотрудников Ленинградского кораблестроительного института, около 650 добровольцев с завода им. Андре Марти (нынешние «Адмиралтейские верфи») и завода по обработке цветных металлов им. К.Е. Ворошилова."}/>
                    <ArticleText text={"Перед батальоном была поставлена боевая задача, создать полосу обороны, протяжённостью около 10 километров. Линия обороны начиналась у ж/д платформы «Фонтаны», захватывала Бабигонские высоты, где раскинулись деревни Сашино, Костино, Низино, Санино, а также населённые пункты Марьино, Ольгино, Владимировка и Мишино."}/>
                    <ArticleText text={"Система обороны включала в себя возведение дотов (долговременная огневая точка) и дзотов (деревоземляная огневая точка). С раннего утра и до позднего вечера ополченцы 264-ого ОПАБа рыли котлованы для дзотов, устанавливали орудия и пулемёты, копали траншеи, создавали противотанковые надолбы, натягивали колючую проволоку. Помогало вести земляные работы гражданское население."}/>
                    <ArticlePhotoCarousel data={[
                        ["https://i.imgur.com/a8jeZIH_d.webp?maxwidth=760&fidelity=grand", "Подпись для фотки 1"],
                        ["https://i.imgur.com/xxDpgLz_d.webp?maxwidth=760&fidelity=grand", "Подпись для фотки 2"],
                        ["https://i.imgur.com/XxFFsd8_d.webp?maxwidth=760&fidelity=grand", "Подпись для фотки 3"]
                    ]}/>
                    <ArticleText text={"Благодаря героизму и храбрости ополченцев, в ходе контратаки батальон продвинулся вперед, захватил пленных и трофеи: батарею легких пушек, танкетки, пулеметы, полевые передвижные радиостанции. Но успех закрепить не удалось, так как в живых в батальоне осталось не более 5% личного состава: из 1100 человек-ополченцев выжили не более 100 человек. Батальон был расформирован, но выполнил свою боевую задачу - с этого дня на этом участке обороны враг не продвинулся ни на шаг!"}/>
                    <ArticleText text={"Многие пали смертью храбрых. Многие имена невозможно восстановить. Но мы всегда будем помнить защитников, героев, молодых ребят, отдавших за нас свои жизни. Солдат умирает-когда о нём забывают. Мы не забудем!"}/>
                    <br/><br/>
                    <ArticleText text={"Вся история 264-го ОПАБ от набора добовровольцев в ополчение и до его расформирования после потери 95% личного состава умещается в три месяца.  Наши сотрудники по крупицам собрали информацию из различных источников и смогли восстановить полную хронологию событий 264-го батальона. "}/>
                    <ArticleText text={"Основные вехи мы собрали в небольшой инфографике, с которой можно познакомиться по кнопке ниже. "}/>
                    <div className={clases.ButtonContainer}>
                        <Button className={clases.Button} onClick={() => {navigate('/opab_calendar')}}>
                            временная шкала
                        </Button>
                    </div>
                    <OpabCarusel>
                        {persons.items.map(({ id, rank, photo, fio }, index) => <PersonItem key={index} id={id} rank={rank} photo={photo} fio={fio}/>)}
                    </OpabCarusel>
                </div>
                

            </div>
            <Footer />
        </>
    )
}


export default Opab