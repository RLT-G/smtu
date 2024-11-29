import React from "react";
import classes from './index.module.css'
import { useNavigate } from "react-router-dom";


const Footer: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className={classes.content}>
            <div className={classes.top}>
                {/* <a href="page1.html"> */}
                    <div className={classes.img_block}
                        onClick={() => {navigate('/')}}>
                        <div className={classes.LogoFooter}></div>
                    </div>
                {/* </a> */}
                <div className={classes.right}>
                    <div className={[classes.container, classes.first].join(' ')}>
                        <span onClick={() => {navigate('/opab')}}><div><h1>264-ОПАБ</h1></div></span>
                        <span onClick={() => {navigate('/history')}}><div>История</div></span>
                        <span onClick={() => {navigate('/opab_calendar')}}><div>Календарь событий</div></span>
                        <span onClick={() => {navigate('/other')}}><div>Участники</div></span>
                        <span onClick={() => {navigate('/opab_video')}}><div>Видеопроект</div></span>
                    </div>
                    <div className={[classes.container, classes.second].join(' ')}>
                        <span onClick={() => {navigate('/other')}}><div><h1>ПЕРСОНАЛИИ</h1></div></span>
                        <span onClick={() => {navigate('/other')}}><div>Герои</div></span>
                        <span onClick={() => {navigate('/opab')}}><div>264-ОПАБ</div></span>
                        <span onClick={() => {navigate('/other')}}><div>Студенты</div></span>
                        <span onClick={() => {navigate('/other')}}><div>Выпускники</div></span>
                        <span onClick={() => {navigate('/other')}}><div>Преподователи</div></span>
                        <span onClick={() => {navigate('/faculties')}}><div>Факультеты</div></span>
                    </div>
                    <div className={[classes.container, classes.thirt].join(' ')}>
                        <span onClick={() => {navigate('/history')}}><div><h1>ИСТОРИЯ</h1></div></span>
                        <span onClick={() => {navigate('/news_articles')}}><div><h1>СТАТЬИ</h1></div></span>
                        <span onClick={() => {navigate('/contacts')}}><div><h1>КОНТАКТЫ</h1></div></span>
                    </div>
                </div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.left}>
                    <span><div><img src="../../static/img/index/vk.svg" alt="" /></div></span>
                    <span><div><img src="../../static/img/index/tg.svg" alt="" /></div></span>
                    <span><div><img src="../../static/img/index/insta.svg" alt="" /></div></span>
                    <span><div><img src="../../static/img/index/in.svg" alt="" /></div></span>
                </div>
                <div className={classes.right}>
                    При перепечатке материалов сайта<br />
                    ссылка на первоисточник обязательна
                </div>
            </div>
        </div>
    )
}


export default Footer;