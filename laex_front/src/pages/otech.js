import { FaAngleLeft } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai"
import { VscError } from "react-icons/vsc"
import { FaAngleRight } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai"
import { BsChatDots } from "react-icons/bs"
import { FaTelegramPlane } from "react-icons/fa"

import { Card } from '../components/Card/card.js';
import { Header } from '../components/HeaderPage/header.js'
import { Pagination } from '../components/Pagination/pagination.js'

import "../styles/otech.css";


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
            <div className="order__container__pic">
              <div className="left__right">
                <div className="angle__left__page">
                  <FaAngleLeft />
                </div>
                <div className="angle__right__page">
                  <FaAngleRight />
                </div>
              </div>
            </div>
            <div className="info__card">
              <h1 className="title__page__card">Информация о технике</h1>
              <div className="first__type__card">
                <div className="double__columns__card">
                  <div className="first__about">
                    <p className="title__card__p">Тип работ</p>
                    <p className="about__card">Землеройные работы</p>
                    <p className="title__card__p">Модель</p>
                    <p className="about__card">Гусеничный трактор Т-402-01</p>
                    <p className="title__card__p">Мощность (л.с)</p>
                    <p className="about__card">130</p>
                    <p className="title__card__p">Производитель</p>
                    <p className="about__card">ОАО «Алтайский тракторный завод»</p>
                  </div>
                  <div className="second__about">
                    <p className="title__card__p">Собcтвенник</p>
                    <p className="about__card">Нет</p>
                    <p className="title__card__p">Тип техники</p>
                    <p className="about__card">Трактор</p>
                    <p className="title__card__p">Год выпуска</p>
                    <p className="about__card">2019</p>
                  </div>
                </div>
              </div>
              <div className="first__type__card">
                <div className="double__columns__card">
                  <div className="first__about">
                    <p className="title__card__p">Дополнительное оборудование</p>
                    <p className="about__card">Нет</p>
                  </div>
                </div>
              </div>
              <div className="first__type__card">
                <div className="double__columns__card">
                  <div className="first__about">
                    <p className="title__card__p">Описание техники</p>
                    <p className="about__card">Гусеничный трактор общего назначения</p>
                  </div>
                </div>
              </div>

            </div>
            {/* Календарь загруженности техники */}
            <div className="info__card__calendar">
              <h1 className="title__page__card">Календарь загруженности техники</h1>
              <a className="card__button__chat__about" href="#">
                <FaTelegramPlane className="deal" size={19} />
                <a href="#" className="card__button__a__chat">Предложить сделку</a>
              </a>
            </div>
            {/* Документы по технике */}
            <div className="info__card__doc">
              <h1 className="title__page__card">Документы по технике</h1>
              <div className="first__type__card">
                <div className="double__columns__card">
                  <div className="first__about__doc">
                    <p className="title__card__doc">Название</p>
                  </div>
                  <div className="second__about__doc">
                    <p className="title__card__doc">Файл</p>
                  </div>
                  <div className="third__about__doc">
                    <p className="title__card__doc">Дата загрузки</p>
                  </div>
                </div>
              </div>
              <div className="first__type__card">
                <div className="double__columns__card">
                  <div className="first__about__doc">
                    <p className="title__card__doc">Документ</p>
                  </div>
                  <div className="second__about__doc">
                    <p className="title__card__doc">document.word</p>
                  </div>
                  <div className="third__about__doc">
                    <p className="title__card__doc">20.09.2022</p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          <div className="right__container">
            <div className="card__container">
              <h1 className="card__title">Александр Александров</h1>
              <div className="card__subs">
                <AiOutlineCalendar />
                <p className="card__subs__p">На сайте с 11.11.2021</p>
              </div>
              <div className="card__status__container">
                <p className="card__status_p">Статус</p>
                <div className="card__status">Свободна</div>
              </div>
              <div className="card__status__container">
                <p className="card__status_p">Верификация</p>
                <div className="card__status">Верифицирован</div>
              </div>
              <a className="card__button__report" href="#">
                <VscError className="vsc__error" size={19} />
                <a href="#" className="card__button__a">Пожаловаться</a>
              </a>
              <a className="card__button__fav" href="#">
                <AiOutlineHeart className="heart" size={19} />
                <a href="#" className="card__button__a__fav">Добавить в избранное</a>
              </a>
              <a className="card__button__chat" href="#">
                <BsChatDots className="chat" size={19} />
                <a href="#" className="card__button__a__chat">Начать чат</a>
              </a>
              <a className="card__button__deal" href="#">
                <FaTelegramPlane className="deal" size={19} />
                <a href="#" className="card__button__a__deal">Предложить сделку</a>
              </a>
            </div>
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
