import "./style.css";

function AboutCard() {
    return (
        <div className="aboutCard">
            <h1 className="aboutCard__title">Информация о технике</h1>
            <div className="aboutCard__content">
                <div className="aboutCard__content__row">
                    <div className="aboutCard__content__row__columnLeft">
                        <p className="aboutCard__content__row__columnLeft__title">Тип работ</p>
                        <p className="aboutCard__content__row__columnLeft__about">Землеройные работы</p>
                        <p className="aboutCard__content__row__columnLeft__title">Модель</p>
                        <p className="aboutCard__content__row__columnLeft__about">Гусеничный трактор Т-402-01</p>
                        <p className="aboutCard__content__row__columnLeft__title">Мощность (л.с)</p>
                        <p className="aboutCard__content__row__columnLeft__about">130</p>
                        <p className="aboutCard__content__row__columnLeft__title">Производитель</p>
                        <p className="aboutCard__content__row__columnLeft__about">ОАО «Алтайский тракторный завод»</p>
                    </div>
                    <div className="aboutCard__content__row__columnRight">
                        <p className="aboutCard__content__row__columnLeft__title">Собcтвенник</p>
                        <p className="aboutCard__content__row__columnLeft__about">Нет</p>
                        <p className="aboutCard__content__row__columnLeft__title">Тип техники</p>
                        <p className="aboutCard__content__row__columnLeft__about">Трактор</p>
                        <p className="aboutCard__content__row__columnLeft__title">Год выпуска</p>
                        <p className="aboutCard__content__row__columnLeft__about">2019</p>
                    </div>
                </div>
            </div>
            <div className="aboutCard__content">
                <div className="aboutCard__content__row">
                    <div className="aboutCard__content__row__columnLeft">
                        <p className="aboutCard__content__row__columnLeft__title">Дополнительное оборудование</p>
                        <p className="aboutCard__content__row__columnLeft__about">Нет</p>
                    </div>
                </div>
            </div>
            <div className="aboutCard__content">
                <div className="aboutCard__content__row">
                    <div className="aboutCard__content__row__columnLeft">
                        <p className="aboutCard__content__row__columnLeft__title">Описание техники</p>
                        <p className="aboutCard__content__row__columnLeft__about">Гусеничный трактор общего назначения</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export { AboutCard };