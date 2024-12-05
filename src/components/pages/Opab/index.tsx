import React, { useEffect, useState } from "react";
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
import SquareLinkText from "../../SquareLinkText";
import videoData from '../../../video.json';

const Opab: React.FC = () => {
    const navigate = useNavigate()
    const toRoman = (num: number): string | undefined => {
        const romanNumerals = [
            { value: 13, numeral: 'XIII' },
            { value: 12, numeral: 'XII' },
            { value: 11, numeral: 'XI' },
            { value: 10, numeral: 'X' },
            { value: 9, numeral: 'IX' },
            { value: 8, numeral: 'VIII' },
            { value: 7, numeral: 'VII' },
            { value: 6, numeral: 'VI' },
            { value: 5, numeral: 'V' },
            { value: 4, numeral: 'IV' },
            { value: 3, numeral: 'III' },
            { value: 2, numeral: 'II' },
            { value: 1, numeral: 'I' },
        ];
    
        return romanNumerals.find(r => r.value === num)?.numeral;
    }
    const [leftNavIndex, setLeftNavIndex] = useState<number>(0)
    
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(`.${clases.LeftPanelSection.replace(/\+/g, '\\+')}`);
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top + window.scrollY;
                const sectionBottom = sectionTop + rect.height;

                if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                    setLeftNavIndex(index);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const smoothScrollTo = (targetY: number) => {
        window.scrollTo({
          top: targetY,
          behavior: 'smooth',
        });
      };

    return (
        <>
            <Header isMainPage={false}/>
            <div className={clases.Wrapper}>
                <span className={clases.Title}>264-й ОПАБ</span>
                <div className={clases.InnerWrapper}>
                    {leftNavIndex === 0
                        ? (
                            <div className={clases.LeftNav} style={{transform: 'translateY(64px)'}}>
                                <span className={clases.LeftNavItemDate}>История</span>
                                <span className={clases.LeftNavItem} onClick={() => {smoothScrollTo(2000); setLeftNavIndex(1)}}>Календарь событий</span>
                                <span className={clases.LeftNavItem} onClick={() => {smoothScrollTo(2500); setLeftNavIndex(2)}}>Участники</span>
                                <span className={clases.LeftNavItem} onClick={() => {smoothScrollTo(3250); setLeftNavIndex(2)}}>Видеопроект</span>
                            </div>
                        )
                        : leftNavIndex === 1
                            ? (
                                <div className={clases.LeftNav}>
                                    <span className={clases.LeftNavItemDate}>Календарь событий</span>
                                    <span className={clases.LeftNavItem} onClick={() => {smoothScrollTo(0); setLeftNavIndex(0)}}>История</span>
                                    <span className={clases.LeftNavItem} onClick={() => {smoothScrollTo(2500); setLeftNavIndex(2)}}>Участники</span>
                                    <span className={clases.LeftNavItem} onClick={() => {smoothScrollTo(3250); setLeftNavIndex(2)}}>Видеопроект</span>
                                </div>
                            )
                            : leftNavIndex === 2 
                                ? (
                                    <div className={clases.LeftNav} style={{transform: 'translateY(-64px)'}}>
                                        <span className={clases.LeftNavItemDate}>Участники</span>
                                        <span className={clases.LeftNavItem} onClick={() => {smoothScrollTo(0); setLeftNavIndex(0)}}>История</span>
                                        <span className={clases.LeftNavItem} onClick={() => {smoothScrollTo(2000); setLeftNavIndex(1)}}>Календарь событий</span>
                                        <span className={clases.LeftNavItem} onClick={() => {smoothScrollTo(3250); setLeftNavIndex(1)}}>Видеопроект</span>
                                    </div>
                                ) 
                                : (
                                <div className={clases.LeftNav} style={{transform: 'translateY(-128px)'}}>
                                    <span className={clases.LeftNavItemDate}>Видеопроект</span>
                                    <span className={clases.LeftNavItem} onClick={() => {smoothScrollTo(0); setLeftNavIndex(0)}}>История</span>
                                    <span className={clases.LeftNavItem} onClick={() => {smoothScrollTo(2000); setLeftNavIndex(1)}}>Календарь событий</span>
                                    <span className={clases.LeftNavItem} onClick={() => {smoothScrollTo(2500); setLeftNavIndex(1)}}>Участники</span>
                                </div>
                            )}

                    <ArticleText className={clases.LeftPanelSection} text={"В июле 1941 года был сформирован 264-й отдельный пулемётно-артиллерийский батальон, состоящий примерно из 1100 ополченцев-добровольцев. В батальон было отобрано примерно 450 студентов и сотрудников Ленинградского кораблестроительного института, около 650 добровольцев с завода им. Андре Марти (нынешние «Адмиралтейские верфи») и завода по обработке цветных металлов им. К.Е. Ворошилова."}/>
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
                    <ArticleText className={clases.LeftPanelSection} text={"Вся история 264-го ОПАБ от набора добовровольцев в ополчение и до его расформирования после потери 95% личного состава умещается в три месяца.  Наши сотрудники по крупицам собрали информацию из различных источников и смогли восстановить полную хронологию событий 264-го батальона. "}/>
                    <ArticleText text={"Основные вехи мы собрали в небольшой инфографике, с которой можно познакомиться по кнопке ниже. "}/>
                    <div className={clases.ButtonContainer}>
                        <Button className={clases.Button} onClick={() => {navigate('/opab_calendar')}}>
                            временная шкала
                        </Button>
                    </div>
                    <OpabCarusel className={clases.LeftPanelSection}>
                        {persons.items.map(({ id, rank, photo, fio }, index) => <PersonItem key={index} id={id} rank={rank} photo={photo} fio={fio}/>)}
                    </OpabCarusel>
                    <div className={clases.ButtonContainer2}>
                        <Button className={clases.Button} onClick={() => {navigate('/other')}}>
                            Посмотреть всех
                        </Button>
                    </div>
                    <ArticleText className={clases.LeftPanelSection} text={"«Хронология 264-го ОПАБа. Подвиг Героев судостроителей» — это видеопроект, созданный студентами СПбГМТУ в память о подвиге студентов и сотрудников Ленинградского кораблестроительного института."}/>
                    
                    <OpabCarusel>
                        {videoData.items.map(({ caption, src, photo }, index) => 
                            <SquareLinkText className={clases.VideoItem} onClick={() => {navigate('/opab_video')}}>
                                <span className={clases.VideoCaption}>{`Глава ${toRoman(index + 1)}`}</span>
                                <div className={clases.VideoCenter}></div>
                            </SquareLinkText>
                        )}
                    </OpabCarusel>
                    <div className={clases.ButtonContainer2}>
                        <Button className={clases.Button2} onClick={() => {navigate('/opab_video')}}>
                            Смотреть полностью
                        </Button>
                    </div>

                </div>
                    

            </div>
            <Footer />
        </>
    )
}


export default Opab