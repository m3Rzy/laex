import { FaTelegramPlane } from "react-icons/fa"

import "./style.css";

function Calendar() {
    return (
        < div className="calendar" >
            <h1 className="aboutCard__title">Календарь загруженности техники</h1>
            <a className="calendar__button" href="#">
                <FaTelegramPlane className="calendar__button__logo" size={19} />
                <a href="#" className="calendar__button__title">Предложить сделку</a>
            </a>
        </div >
    )
}
export { Calendar };