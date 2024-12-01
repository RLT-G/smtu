import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import classes from "./index.module.css";
import Video from "../../Video";

const OpabVideos: React.FC = () => {
  const [leftNavIndex, setLeftNavIndex] = useState<number>(0)
  const [navIsFixed, setNavIsFixed] = useState<boolean>(false)
    
  useEffect(() => {
      const handleScroll = () => {
          const sections = document.querySelectorAll(`.${classes.Section}`);
          const scrollPosition = window.scrollY + window.innerHeight / 2;
          if (window.scrollY > 1125) {
            setNavIsFixed(true)
          } else {
            setNavIsFixed(false)
          }
          console.log(window.scrollY)
          sections.forEach((section, index) => {
              const rect = section.getBoundingClientRect();
              const sectionTop = rect.top + window.scrollY;
              const sectionBottom = sectionTop + rect.height;

              if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                console.log(index)
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
      <Header isMainPage={false} />
      <div className={classes.Wrapper}>
        <div className={classes.HeaderText}>
          <span className={classes.Text1}>Хронология 264-го ОПАБа.<br />Подвиг судостроителей</span>
          <span className={classes.Text2}>Исторический видеопроект</span>
        </div>
        <div className={classes.MainText}>
          <span className={classes.UpText}>Над проектом работали:</span>
          <div className={classes.ProjectAutors}>
            <div className={classes.Left}>
                <span>Авторы проекта</span>
            </div>
            <div className={classes.Right}>
                <span className={classes.Span1}>проректор по воспитательной работе</span>
                <span className={classes.Span2}>Акопян Альберт Беникович</span>
                <span className={classes.Span3}>начальник отдела по воспитательной деятельности</span>
                <span className={classes.Span4}>Чурзина Светлана Юрьевна</span>
            </div>
          </div>
          <div className={classes.Students}>
            <div className={classes.Left}>
                <span>Рабочая группа<br />студентов СПбГМТУ</span>
            </div>
            <div className={classes.Right}>
                <span>Мальцев Никита Андреевич<br />Жаркова Алина Александровна<br />Рудеев Игорь Русланович</span>
            </div>
          </div>
          <div className={classes.TextAutors}>
            <div className={classes.Left}>
                <span>Авторы текста</span>
            </div>
            <div className={classes.Right}>
                <span className={classes.SpanR1}>заведующая библиотекой Центра культуры и спорта Низинского сельского поселения</span>
                <span className={classes.SpanR2}>Тарасова Лариса Рудольфовна</span>
                <span className={classes.SpanR3}>А также авторы книги «Корабелы в боях за город Ленина»  Л.М.Видуцкий, Н.И.Семьянов,<br /> М.Д.Утюжников, В.Б.Чернобривец.</span>
            </div>
          </div>
        </div>
        <div className={classes.LeftNav} style={{
          top: `${25 - 1.5 * leftNavIndex}%`,
          left: navIsFixed ? '200px' : '-400px'
        }}>
          <button className={[classes.NavButton, leftNavIndex === 0 && classes.Active].join(' ')} 
            onClick={() => {smoothScrollTo(1250)}}>глава i</button>
          <button className={[classes.NavButton, leftNavIndex === 1 && classes.Active].join(' ')}
            onClick={() => {smoothScrollTo(1954)}}>глава ii</button>
          <button className={[classes.NavButton, leftNavIndex === 2 && classes.Active].join(' ')}
            onClick={() => {smoothScrollTo(2658)}}>глава iii</button>
          <button className={[classes.NavButton, leftNavIndex === 3 && classes.Active].join(' ')}
            onClick={() => {smoothScrollTo(3362)}}>глава iV</button>
          <button className={[classes.NavButton, leftNavIndex === 4 && classes.Active].join(' ')}
            onClick={() => {smoothScrollTo(4066)}}>глава V</button>
          <button className={[classes.NavButton, leftNavIndex === 5 && classes.Active].join(' ')}
            onClick={() => {smoothScrollTo(4770)}}>глава Vi</button>
          <button className={[classes.NavButton, leftNavIndex === 6 && classes.Active].join(' ')}
            onClick={() => {smoothScrollTo(5474)}}>глава Vii</button>
          <button className={[classes.NavButton, leftNavIndex === 7 && classes.Active].join(' ')}
            onClick={() => {smoothScrollTo(6178)}}>глава Viii</button>
          <button className={[classes.NavButton, leftNavIndex === 8 && classes.Active].join(' ')}
            onClick={() => {smoothScrollTo(6882)}}>глава iX</button>
          <button className={[classes.NavButton, leftNavIndex === 9 && classes.Active].join(' ')}
            onClick={() => {smoothScrollTo(7586)}}>глава X</button>
          <button className={[classes.NavButton, leftNavIndex === 10 && classes.Active].join(' ')}
            onClick={() => {smoothScrollTo(8290)}}>глава Xi</button>
          <button className={[classes.NavButton, leftNavIndex === 11 && classes.Active].join(' ')}
            onClick={() => {smoothScrollTo(8994)}}>глава Xii</button>
          <button className={[classes.NavButton, leftNavIndex === 12 && classes.Active].join(' ')}
            onClick={() => {smoothScrollTo(9698)}}>глава Xiii</button>
        </div>
        <Video className={classes.Section} src="" caption="Глава I. Вставай, страна огромная!"/>
        <Video className={classes.Section} src="" caption="Глава II. Ты записался добровольцем?"/>
        <Video className={classes.Section} src="" caption="Глава III. Батальон Корабелов сформирован"/>
        <Video className={classes.Section} src="" caption="Глава IV. Подготовка к боям"/>
        <Video className={classes.Section} src="" caption="Глава V. Строительство укрепрайона"/>
        <Video className={classes.Section} src="" caption="Глава VI. Боевой путь третьей роты"/>
        <Video className={classes.Section} src="" caption="Глава VII. Подвиг Юрия Никитина"/>
        <Video className={classes.Section} src="" caption="Глава VIII. Подвиг Бориса Потапова"/>
        <Video className={classes.Section} src="" caption="Глава IX. Боевой путь четвертой роты"/>
        <Video className={classes.Section} src="" caption="Глава X. Боевой путь первой роты"/>
        <Video className={classes.Section} src="" caption="Глава XI. Боевой путь второй роты"/>
        <Video className={classes.Section} src="" caption="Глава XII. Штыковая контратака"/>
        <Video className={classes.Section} src="" caption="Глава XIII. Последний рубеж"/>
      </div>
      <Footer />
    </>
  );
};

export default OpabVideos;
