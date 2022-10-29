import "./style.css"

function Card() {
    return (
        <div className="card">
            <div className="card__columnLeft">
                <div className="card__columnLeft__photo"></div>
            </div>
            <div className="card__columnRight">
                <div className="card__columnRight__info">
                    <h2 className="card__columnRight__info__title">John Deere 9660STS</h2>
                    <p className="card__columnRight__info__title">(000009)</p>
                </div>
                <p>Василий Пупкин</p>
                <p className="card__columnRight__company">ЗАО АФ "Рыльская"</p>
                <div className="card__columnRight__status">Свободна</div>
            </div>
        </div>
    )
}
export { Card };