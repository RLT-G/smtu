import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import classes from "./index.module.css";
import Video from "../../Video";

const OpabVideos: React.FC = () => {
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
        <Video src="" caption="Глава I. Вставай, страна огромная!"/>
        <Video src="" caption="Глава II. Ты записался добровольцем?"/>
        <Video src="" caption="Глава III. Батальон Корабелов сформирован"/>
        <Video src="" caption="Глава IV. Подготовка к боям"/>
        <Video src="" caption="Глава V. Строительство укрепрайона"/>
        <Video src="" caption="Глава VI. Боевой путь третьей роты"/>
        <Video src="" caption="Глава VII. Подвиг Юрия Никитина"/>
        <Video src="" caption="Глава VIII. Подвиг Бориса Потапова"/>
        <Video src="" caption="Глава IX. Боевой путь четвертой роты"/>
        <Video src="" caption="Глава X. Боевой путь первой роты"/>
        <Video src="" caption="Глава XI. Боевой путь второй роты"/>
        <Video src="" caption="Глава XII. Штыковая контратака"/>
        <Video src="" caption="Глава XIII. Последний рубеж"/>
      </div>
      <Footer />
    </>
  );
};

export default OpabVideos;
