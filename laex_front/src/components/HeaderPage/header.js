import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";
import { IoChatbubblesOutline } from "react-icons/io5";

import "./style.css";

function Header() {
    return (
        <div className="main__header">
            <h1 className="main__header__logo">АСМ</h1>
            <a href="/birzha" className="main__header__link">
                Биржа заявок
            </a>
            <a href="/tech" className="main__header__link">
                Техника
            </a>
            <a href="/areas" className="main__header__link">
                Поля
            </a>
            <div className="main__header__right">
                <a href="#" className="main__header__right__element">
                    <IoChatbubblesOutline />
                </a>
                <a href="#" className="main__header__right__element">
                    <AiOutlineBell />
                </a>
                <a href="#" className="main__header__right__avatar" />
                <a href="#" className="main__header__right__angledown">
                    <FaAngleDown />
                </a>
            </div>
        </div>
    )
}
export { Header };