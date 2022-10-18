import "../styles/otech.css";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

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
      </div>
    </div>
  );
}

export { Otech };
