import { Card } from '../components/Card/card.js';
import { Header } from '../components/HeaderPage/header.js'
import { Pagination } from '../components/Pagination/pagination.js'
import { Slider } from '../components/Slider/slider.js'

import { AboutCard } from "../components/AboutCard/aboutCard.js"
import { Calendar } from "../components/Calendar/calendar.js"
import { UserCard } from "../components/UserCard/userCard.js"

import "../styles/otech.css";
import { DocumentsCard } from '../components/DocumentsCard/documentsCard.js';


function Otech() {
  return (
    <div className="main">
      <Header />
      <div class="main__otstup" />
      <div className="main__padding">
        <Pagination />
        <h1 className="main__padding__title">Комбайн John Deere 9660STS (ID000009)</h1>
        {/* Нужен контейнер большой для 2ух */}
        <div className="main__padding__row">
          <div className="main__padding__row__columnLeft">
            <Slider />
            <AboutCard />
            <Calendar />
            <DocumentsCard />
          </div>
          <div className="main__padding__row__columnRight">
            <UserCard />
            <div className="list__tech__container">
              <h1 className="">Другая техника</h1>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Otech };
