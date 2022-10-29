import { FaAngleRight } from "react-icons/fa";

import "./style.css";

function Pagination() {
    return (
        <div className="pagination">
            <h1 className="pagination__title">Техника</h1>
            <div className="pagination__angleright">
                <FaAngleRight />
            </div>
            <h1 className="pagination__subtitle">John Deere 9660STS</h1>
        </div>
    )
}
export { Pagination };