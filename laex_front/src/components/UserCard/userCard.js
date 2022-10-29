import { AiOutlineCalendar } from "react-icons/ai"
import { VscError } from "react-icons/vsc"
import { AiOutlineHeart } from "react-icons/ai"
import { BsChatDots } from "react-icons/bs"
import { FaTelegramPlane } from "react-icons/fa"

import "./style.css";

function UserCard() {
    return (
        <div className="userCard">
            <h1 className="userCard__title">Александр Александров</h1>
            <div className="userCard__actualDate">
                <AiOutlineCalendar />
                <p className="userCard__actualDate__subtitle">На сайте с 11.11.2021</p>
            </div>
            <div className="userCard__status">
                <p className="userCard__status__need">Статус</p>
                <div className="userCard__status__actual">Свободна</div>
            </div>
            <div className="userCard__status">
                <p className="userCard__status__need">Верификация</p>
                <div className="userCard__status__actual">Верифицирован</div>
            </div>
            <a className="userCard__report" href="#">
                <VscError className="userCard__report__logo" size={19} />
                <a href="#" className="userCard__report__button">Пожаловаться</a>
            </a>
            <a className="userCard__favourite" href="#">
                <AiOutlineHeart className="userCard__favourite__logo" size={19} />
                <a href="#" className="userCard__favourite__button">Добавить в избранное</a>
            </a>
            <a className="userCard__chat" href="#">
                <BsChatDots className="userCard__chat__logo" size={19} />
                <a href="#" className="userCard__chat__button">Начать чат</a>
            </a>
            <a className="userCard__deal" href="#">
                <FaTelegramPlane className="userCard__deal__logo" size={19} />
                <a href="#" className="userCard__deal__button">Предложить сделку</a>
            </a>
        </div>
    )
}
export { UserCard };