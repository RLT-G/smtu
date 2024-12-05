import React, { useEffect, useState } from "react";
import classes from './index.module.css';
import Header from "../../Header";
import Footer from "../../Footer";
import ArticleText from "../../ui/ArticleText";
import ArticlePhotoCarousel from "../../ui/ArticlePhotoCarousel";
import ArticlePhotoAndText from "../../ui/ArticlePhotoAndText";
import ArticlePhotoAndCaption from "../../ui/ArticlePhotoAndCaption";


const History: React.FC = () => {
    const [leftNavIndex, setLeftNavIndex] = useState<number>(0)
    
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(`.${classes.Section1.replace(/\+/g, '\\+')}`);
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

    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Header isMainPage={false}/>
            <div className={classes.Wrapper}>
                <span className={classes.Title}>История ЛКИ </span>
                <div className={classes.InnerWrapper}>
                    {leftNavIndex === 0
                        ? (
                            <div className={classes.LeftNav} style={{transform: 'translateY(64px)'}}>
                                <span className={classes.LeftNavItemDate}>с 1931 по 1941</span>
                                <span className={classes.LeftNavItem} onClick={() => {smoothScrollTo(2000); setLeftNavIndex(1)}}>во время ВОВ</span>
                                <span className={classes.LeftNavItem} onClick={() => {smoothScrollTo(4000); setLeftNavIndex(2)}}>в мирное время</span>
                            </div>
                        )
                        : leftNavIndex === 1
                            ? (
                                <div className={classes.LeftNav}>
                                    <span className={classes.LeftNavItemDate}>с 1941 по 1945</span>
                                    <span className={classes.LeftNavItem} onClick={() => {smoothScrollTo(0); setLeftNavIndex(0)}}>до войны</span>
                                    <span className={classes.LeftNavItem} onClick={() => {smoothScrollTo(4000); setLeftNavIndex(2)}}>в мирное время</span>
                                </div>
                            )
                            : (
                                <div className={classes.LeftNav} style={{transform: 'translateY(-64px)'}}>
                                    <span className={classes.LeftNavItemDate}>с 1945 по 1980</span>
                                    <span className={classes.LeftNavItem} onClick={() => {smoothScrollTo(0); setLeftNavIndex(0)}}>до войны</span>
                                    <span className={classes.LeftNavItem} onClick={() => {smoothScrollTo(2000); setLeftNavIndex(1)}}>во время вов</span>
                                </div>
                            )}
                    {width <= 1230 && <>
                        <div className={classes.LeftNavAdaptive}>
                            <span className={classes.LeftNavItemDate}>с 1931 по 1941</span>
                            <span className={classes.LeftNavItem} onClick={() => {smoothScrollTo(2000); setLeftNavIndex(1)}}>во время ВОВ</span>
                            <span className={classes.LeftNavItem} onClick={() => {smoothScrollTo(4000); setLeftNavIndex(2)}}>в мирное время</span>
                        </div>
                    </>}
                    <ArticleText className={classes.Section1} text={"В 1935 году состоялся первый выпуск ЛКИ первого набора 1930 года. В итоге было выпущено 90 человек, среди которых – две женщины: В.Ф. Волькович с кораблестроительного факультета и Т.З. Аронштам с машиностроительного факультета. Впоследствии они внесли значительный вклад в достижение Победы в Великой Отечественной войне. Зачастую им приходилось заниматься вроде бы неженским делом по созданию и совершенствованию военной техники. Так, Ф.В. Волькович ещё до войны начала работать над проблемой бронирования кораблей под руководством профессора П.Ф. Папковича."}/>
                    <ArticleText text={"В 1939 году по ходатайству Народного комиссариата судостроительной промышленности СССР постановлением правительства был организован инженерно-экономический факультет Ленинградского Кораблестроительного Института (ЛКИ) со специальностью Экономика и организация судостроительной промышленности со сроком обучения 5 лет. Это был четвертый факультет ЛКИ, после кораблестроительного, судомеханического и вечернего."} />
                    <ArticleText text={"Организация и подготовка к его открытию началась на год раньше и осуществлялась директором Кораблестроительного института И.И. Яковлевым и тогда еще доцентом, к.э.н. С.П. Логиновым. В том же году факультет приступил к набору студентов и организации занятий сразу на первых трех курсах, при этом на первый курс приняты отличники и лица успешно сдавшие вступительные экзамены. Второй и третий курсы были укомплектованы 'переводниками' из других вузов и факультетов ЛКИ. Деканом факультета был утвержден к.э.н. доцент С.П. Логинов"} />
                    <ArticleText text={"Инженер-кораблестроитель, оканчивающий курс обучения в ЛКИ или на инженерно-экономическом факультете, должен был владеть в совершенстве как инженерными знаниями по специальности, так и достаточными знаниями в области экономики и организации производства, знать и уметь вести учет работы, выявлять резервы производства, определять экономическую эффективность новой техники и технологий, повышать эффективность производства."} />
                    <ArticlePhotoCarousel data={[
                        ["https://i.imgur.com/0S7TJPj_d.webp?maxwidth=760&fidelity=grand", "Первый выпуск ЛКИ 1935г."],
                        ["https://i.imgur.com/xxDpgLz_d.webp?maxwidth=760&fidelity=grand", "Подпись для фотки 2"],
                        ["https://i.imgur.com/XxFFsd8_d.webp?maxwidth=760&fidelity=grand", "Подпись для фотки 3"]
                    ]}/>

                    {width <= 1230 && <>
                        <div className={classes.LeftNavAdaptive}>
                            <span className={classes.LeftNavItemDate}>с 1941 по 1945</span>
                            <span className={classes.LeftNavItem} onClick={() => {smoothScrollTo(0); setLeftNavIndex(0)}}>до войны</span>
                            <span className={classes.LeftNavItem} onClick={() => {smoothScrollTo(4000); setLeftNavIndex(2)}}>в мирное время</span>
                        </div>
                    </>}

                    <ArticleText className={classes.Section1} text={"С началом Второй мировой войны, постановление правительства СССР отменило отсрочку от армии для учащихся высшей школы. В октябре 1939 г. студенты ЛКИ пополнили ряды Красной армии. Часть молодых людей оказалась в составе 189-го зенитно-артиллерийского полка, другие – в танковых или пехотных войсках. Около года ребята проходили военную подготовку, и в 1940 г. получили погоны сержантов. Большинство из них погибло – именно они стояли на пути гитлеровских армий осенью 1941 г. После объявления приказа о всеобщей мобилизации, одним их первых ушел добровольцем на фронт ректор ЛКИ Иван Ионович Яковлев, а вместе с ним еще 1200 студентов. В это же время в институте стали формироваться отряды местной противовоздушной обороны (МПВО) и отдельный пулеметно-артиллерийский батальон (ОПАБ). В блокадном Ленинграде корабелы самоотверженно трудились на судостроительных заводах. Так профессор В.Ф. Попов был главным инженером Балтийского, а доцент С.М. Турунов Адмиралтейского заводов, на производстве работали – профессор П.А. Дорошенко, доцент Б.А. Плисов, В.Я. Мицкевич и многие другие."} />
                    <ArticlePhotoAndText data={{
                        text: "В 1942 г. создана первая отечественная электроторпеда ЭТ-80, выдержавшая боевое применение в годы войны и ряд последующих модернизаций. В создании ЭТ-46 участвовали Ю. В. Саунин, В. В. Селезнёв. В создании усовершенствованной самонаводящейся электроторпеды САЭТ-60 участвовали И. С. Павлов, М. П. Балуев, А. А. Апрелков, Б. Н. Старовойтов.",
                        photo: "https://i.imgur.com/AHKuxr9_d.webp?maxwidth=760&fidelity=grand",
                        caption: "Первая отечественная электроторпеда"
                    }}/>
                    
                    <ArticleText text={"В сентябре 1943 года возобновились занятия на Лоцманской улице. К осени 1944 г. из Горького вернулось 160 студентов старших курсов, а в ноябре заработал опытный бассейн кафедры теории корабля – его крышу своими руками восстановил аспирант кафедры Я.И. Войткунский."} />
                    <ArticleText text={"11 марта  1945 года в ЛКИ открылся новый факультет, впоследствии названный приборостроительным, а 15 июня вышло постановление Совета народных комиссаров СССР о возобновлении занятий в Корабелке."} />
                    <ArticlePhotoAndCaption data={[
                        "https://i.imgur.com/7orwK5q_d.webp?maxwidth=760&fidelity=grand",
                        "Возобновление занятий в блокадном Ленинграде"
                    ]}/>
                    {width <= 1230 && <>
                        <div className={classes.LeftNavAdaptive}>
                            <span className={classes.LeftNavItemDate}>с 1945 по 1980</span>
                            <span className={classes.LeftNavItem} onClick={() => {smoothScrollTo(0); setLeftNavIndex(0)}}>до войны</span>
                            <span className={classes.LeftNavItem} onClick={() => {smoothScrollTo(2000); setLeftNavIndex(1)}}>во время вов</span>
                        </div>
                    </>}
                    <ArticleText className={classes.Section1} text={"В октябре 1947 г. на первой конференции участников студенческих научных кружков было провозглашено создание студенческого научно-технического общества (СНО) ЛКИ. Председателем СНО был избран профессор В.К. Васильев, заместителем председателя стал студент А.Н. Холодилин (в будущем – профессор ЛКИ), учёным секретарём – студент В.С. Дорин (впоследствии – лауреат Государственной премии). Общество имело свою печать и обладало юридическим статусом самостоятельной организации. Вторая конференция СНО прошла в марте 1948 г., на ней выступили с докладами студенты, многие из которых впоследствии стали видными учёными"} />
                    
                    <ArticlePhotoAndText data={{
                        text: "5 декабря 1957 года спущен на воду первый в мире атомный ледокол «Ленин». Ядерная энергетическая установка смонтирована в 1958—1959 годах. 6 августа 1959 года осуществлен физический пуск ядерного реактора. 12 сентября 1959 года уже с верфи Адмиралтейского завода отправился на ходовые испытания под командованием П. А. Пономарёва.",
                        photo: "https://i.imgur.com/I2ki5CA_d.webp?maxwidth=760&fidelity=grand",
                        caption: "Атомный ледокол “Ленин”"
                    }}/>
                    <ArticleText text={"Проект атомохода был разработан в ЦКБ-15 (ныне «Айсберг») в 1953—1955 годах (проект № 92) после принятия решения о строительстве атомного ледокола 20 ноября 1953 года Советом министров СССР. Главным конструктором был В. И. Неганов (1899-1978) главный конструктор первого советского линейного ледокола «И. Сталин» и других кораблей, участник Гражданской войны, доктор технических наук, Герой Социалистического Труда (1960), лауреат Сталинской (1940) и Государственной (1966) премий, выпускник ЛКИ 1931 года."} />
                    <ArticleText text={"В 1957 году в рамках Студенческого научного общества (СНО) ЛКИ было сформировано Студенческое конструкторское бюро (СКБ) «Океан». Многие годы оно успешно работало под руководством преподавателя кафедры конструкции судов Бориса Николаевича Ушакова. Деятельность СКБ не ограничивалась рамками вуза, а выходила на общегородские масштабы. К примеру, СКБ разработало проект консольного поворотного крана грузоподъёмностью 3 тонны для обслуживания демонтажных камер второй очереди строительства Ленинградского метрополитена. Этой работой студентов руководил преподаватель Г.Р. Кипарский, над проектом трудились студенты 4-го курса. Новые краны были изготовлены на машиностроительном заводе имени И.Е. Котлякова, о чём 28 марта 1961 года написала «Ленинградская правда»."} />
                </div>
            </div>
            <Footer />
        </>
    )
}


export default History