import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

import "./style.css";

function Slider() {
    return (
        <div className="slider">
            <div className="slider__content">
                <div className="slider__content__left">
                    <FaAngleLeft />
                </div>
                <div className="slider__content__right">
                    <FaAngleRight />
                </div>
            </div>
        </div>
    )
}
export { Slider };