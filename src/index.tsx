import React, { useState } from "react";
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
import Other from "./components/pages/Other";
import Catalog from "./components/pages/Catalog";
import FacultiesDetail from "./components/pages/FacultiesDetail";
import Contacts from "./components/pages/Contacts";
import ScrollToTop from "./components/ScrollToTop";
import Articles from "./components/pages/Articles";
import History from "./components/pages/History";
import OpabCalendar from "./components/pages/OpabCalendar";
import Opab from "./components/pages/Opab";

interface RouteConfig {
  path: string;
  component: React.ComponentType;
  exact: boolean;
}

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const routes: Array<RouteConfig> = [
    // Главная
    { path: "/", component: Main, exact: true }, // A
    // Страница Персоны
    { path: "/person", component: Person, exact: true },
    // История
    { path: "/history", component: History, exact: true },
    // Каталог
    { path: "/catalog", component: Catalog, exact: true },
    // Факультеты общая
    { path: "/faculties", component: Faculties, exact: true }, // A
    // Факультеты Разделы
    { path: "/faculties_detail", component: FacultiesDetail, exact: true },
    // Раздел ОПАБ
    { path: "/opab", component: Opab, exact: true },
    // ОПАБ календарь
    { path: "/opab_calendar", component: OpabCalendar, exact: true },
    // ОПАБ Видео
    { path: "/opab_video", component: OpabVideos, exact: true },
    // Остальное
    { path: "/other", component: Other, exact: true }, // A
    // Новости/статьи
    { path: "/news_articles", component: NewsArticles, exact: true }, // A
    // Страница статьи
    { path: "/articles", component: Articles, exact: true },
    // Отзывы
    { path: "/feedbacks", component: Feedbacks, exact: true }, // A
    // Контакты
    { path: "/contacts", component: Contacts, exact: true },
    // 404
    { path: "*", component: NotFound, exact: true },
  ];

  return (
    <authContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <ScrollToTop />
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
