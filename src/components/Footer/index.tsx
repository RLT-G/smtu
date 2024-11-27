import React from "react";
import classes from './index.module.css'


const Footer: React.FC = () => {
    return (
        <div className={classes.content}>
            <div className={classes.top}>
                {/* <a href="page1.html"> */}
                    <div className={classes.img_block}>
                        <div className={classes.LogoFooter}></div>
                    </div>
                {/* </a> */}
                <div className={classes.right}>
                    <div className={[classes.container, classes.first].join(' ')}>
                        <span><div><h1>264-ОПАБ</h1></div></span>
                        <span><div>История</div></span>
                        <span><div>Календарь событий</div></span>
                        <span><div>Участники</div></span>
                        <span><div>Видеопроект</div></span>
                    </div>
                    <div className={[classes.container, classes.second].join(' ')}>
                        <span><div><h1>ПЕРСОНАЛИИ</h1></div></span>
                        <span><div>Герои</div></span>
                        <span><div>264-ОПАБ</div></span>
                        <span><div>Студенты</div></span>
                        <span><div>Выпускники</div></span>
                        <span><div>Преподователи</div></span>
                        <span><div>Факультеты</div></span>
                    </div>
                    <div className={[classes.container, classes.thirt].join(' ')}>
                        <span><div><h1>ИСТОРИЯ</h1></div></span>
                        <span><div><h1>СТАТЬИ</h1></div></span>
                        <span><div><h1>КОНТАКТЫ</h1></div></span>
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