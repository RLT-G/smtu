import React, { useEffect, useState } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import classes from "./index.module.css";
import Video from "../../Video";

interface IbuttonContent {
  scrollTo: number;
  text: string;
}
interface IvideoContent {
  src: string;
  caption: string;
  photo?: string
}

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

  const buttonContent: Array<IbuttonContent> = [
    { scrollTo: 1250, text: 'глава i' },
    { scrollTo: 1954, text: 'глава ii' },
    { scrollTo: 2658, text: 'глава iii' },
    { scrollTo: 3362, text: 'глава iV' },
    { scrollTo: 4066, text: 'глава V' },
    { scrollTo: 4770, text: 'глава Vi' },
    { scrollTo: 5474, text: 'глава Vii' },
    { scrollTo: 6178, text: 'глава Viii' },
    { scrollTo: 6882, text: 'глава iX' },
    { scrollTo: 7586, text: 'глава X' },
    { scrollTo: 8290, text: 'глава Xi' },
    { scrollTo: 8994, text: 'глава Xii' },
    { scrollTo: 9698, text: 'глава Xiii' },
  ]
  const videoContent: Array<IvideoContent> = [
      { caption: 'Глава I. Вставай, страна огромная!', src: 'https://www.youtube.com/watch?v=w-WsJ6FezlA', photo: 'https://i.ytimg.com/vi/w-WsJ6FezlA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5XOW2v2AQEvftrYnkceJW4Rzorg'},
      { caption: 'Глава II. Ты записался добровольцем?', src: '', photo: ''},
      { caption: 'Глава III. Батальон Корабелов сформирован', src: '', photo: ''},
      { caption: 'Глава IV. Подготовка к боям', src: '', photo: ''},
      { caption: 'Глава V. Строительство укрепрайона', src: '', photo: ''},
      { caption: 'Глава VI. Боевой путь третьей роты', src: '', photo: ''},
      { caption: 'Глава VII. Подвиг Юрия Никитина', src: '', photo: ''},
      { caption: 'Глава VIII. Подвиг Бориса Потапова', src: '', photo: ''},
      { caption: 'Глава IX. Боевой путь четвертой роты', src: '', photo: ''},
      { caption: 'Глава X. Боевой путь первой роты', src: '', photo: ''},
      { caption: 'Глава XI. Боевой путь второй роты', src: '', photo: ''},
      { caption: 'Глава XII. Штыковая контратака', src: '', photo: ''},
      { caption: 'Глава XIII. Последний рубеж', src: '', photo: ''},
  ]
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
          {buttonContent.map(({ scrollTo, text }, index) => 
            <button className={[classes.NavButton, leftNavIndex === index && classes.Active].join(' ')}
              onClick={() => {smoothScrollTo(scrollTo)}}>{text}</button>)}
        </div>

        {videoContent.map(({caption, src, photo}) => 
          <Video className={classes.Section} src={src} caption={caption} photo={photo}/>)}

      </div>
      <Footer />
    </>
  );
};

export default OpabVideos;
