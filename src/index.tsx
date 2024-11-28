import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { authContext } from "./context";
import Main from "./components/pages/Main";
import NotFound from "./components/pages/NotFound";
import OpabVideos from "./components/pages/OpabVideos";
import Faculties from "./components/pages/Faculties";
import NewsArticles from "./components/pages/NewsArticles";
import Feedbacks from "./components/pages/Feedbacks";
import Person from "./components/pages/Person";

interface RouteConfig {
  path: string;
  component: React.ComponentType;
  exact: boolean;
}

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const routes: Array<RouteConfig> = [
    // Главная
    { path: "/", component: Main, exact: true },
    // Страница Персоны
    { path: "/person", component: Person, exact: true },
    // История
    { path: "/history", component: NotFound, exact: true },
    // Каталог
    { path: "/catalog", component: NotFound, exact: true },
    // Факультеты общая
    { path: "/faculties", component: Faculties, exact: true },
    // Факультеты Разделы
    { path: "/faculties_detail", component: NotFound, exact: true },
    // Раздел ОПАБ
    { path: "/opab", component: NotFound, exact: true },
    // ОПАБ календарь
    { path: "/opab_calendar", component: NotFound, exact: true },
    // ОПАБ Видео
    { path: "/opab_video", component: OpabVideos, exact: true },
    // Остальное
    { path: "/other", component: NotFound, exact: true },
    // Новости/статьи
    { path: "/news_articles", component: NewsArticles, exact: true },
    // Страница статьи
    { path: "/articles", component: NotFound, exact: true },
    // Отзывы
    { path: "/feedbacks", component: Feedbacks, exact: true },
    // Контакты
    { path: "/contacts", component: NotFound, exact: true },
    // 404
    { path: "*", component: NotFound, exact: true },
  ];

  return (
    <authContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, component: Component, exact }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </authContext.Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
