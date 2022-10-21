import "../styles/otech.css";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai"
import { VscError } from "react-icons/vsc"
import { AiOutlineHeart } from "react-icons/ai"
import { BsChatDots } from "react-icons/bs"
import { FaTelegramPlane } from "react-icons/fa"
import { Card } from '../components/card.js';


function Otech() {
  return (
    <div className="main__cont">
      <div className="top__menu__bar">
        <h1 className="logo__asm">АСМ</h1>
        <a href="/birzha" className="top__menu__item">
          Биржа заявок
        </a>
        <a href="/tech" className="top__menu__item">
          Техника
        </a>
        <a href="/areas" className="top__menu__item">
          Поля
        </a>
        <div className="right__bar">
          <a href="#" className="buttons__right__bar">
            <IoChatbubblesOutline />
          </a>
          <a href="#" className="buttons__right__bar">
            <AiOutlineBell />
          </a>
          <a href="#" className="avatar__circle" />
          <a href="#" className="angle__down">
            <FaAngleDown />
          </a>
        </div>
      </div>
      <div class="top" />
      <div className="spaces">
        <div className="pagination">
          <h1 className="hooks__pag">Техника</h1>
          <div className="angle__right">
            <FaAngleRight />
          </div>
          <h1 className="hooks__pag__custom">John Deere 9660STS</h1>
        </div>
        <h1 className="title__page">Комбайн John Deere 9660STS (ID000009)</h1>
        {/* Нужен контейнер большой для 2ух */}
        <div className="container">
          <div className="order__container__pic">
            {/* <div className="picture" /> */}
            <div className="left__right">
              <div className="angle__left__page">
                <FaAngleLeft />
              </div>
              <div className="angle__right__page">
                <FaAngleRight />
              </div>
            </div>
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
              {/* <div className="custom__tech">
                <div className="left__custom__tech">
                  <div className="custom__photo__tech"></div>
                </div>
                <div className="right__custom__tech">
                  <div className="custom__tech__about">
                    <h2 className="otstup">John Deere 9660STS</h2>
                    <p className="otstup">(000009)</p>
                  </div>
                  <p>Василий Пупкин</p>
                  <p className="v__otstup">ЗАО АФ "Рыльская"</p>
                  <div className="card__status__tech">Свободна</div>
                </div>
              </div> */}
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

export {Otech};
