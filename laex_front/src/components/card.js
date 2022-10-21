import "../styles/otech.css";

function Card() {
    return (
        <div className="custom__tech">
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
        </div>
    )
}
export { Card };