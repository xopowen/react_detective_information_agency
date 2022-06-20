import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import Header from "./componants/header/header";
import reportWebVitals from './reportWebVitals';
import Start_page from "./componants/start_page/Start_page"
import About_us from "./componants/About_us/About_us";
import Services from "./componants/services/Services";
import How_we_work from "./componants/how_we_work/How_we_work";
import Our_clients from "./componants/Our_clients/Our_clients";
import Contact_us from "./componants/contact-us/Contact_us";

const root = ReactDOM.createRoot(document.getElementById('root'));
//набор данных получаемых с сервера
let nav = [
    {
        id: 1,
        name: 'Главный',
        section: "main"

    },
    {
        id: 2,
        name: 'О нас',
        section: "about_us"
    },
    {
        id: 3,
        name: 'Услуги',
        section: "services"
    },
    {
        id: 4,
        name: 'Как мы работаем',
        section: "how_we_work"
    },
    {
        id: 5,
        name: 'Клиенты',
        section: "clients"
    },
    {
        id: 6,
        name: 'Контакты',
        section: "contact-us"
    }]
//получение элемента списка по id обекта
nav.getSectionId = (id) => {
    let result = nav.find((el, i, arr) => el.id == id)
    if (result === undefined) {
        return {
            id: null,
            name: null,
            section: null
        }
    }
    return result
}


root.render([
    <Header nav={nav}/>,
    <main>
        <Start_page sectionData={nav.getSectionId(1)}/>
        <About_us sectionData={nav.getSectionId(2)}/>
        <Services sectionData={nav.getSectionId(3)}/>
        <How_we_work sectionData={nav.getSectionId(4)}/>
        <Our_clients sectionData={nav.getSectionId(5)}/>
        <Contact_us sectionData={nav.getSectionId(6)}/>
    </main>
]);

reportWebVitals();
