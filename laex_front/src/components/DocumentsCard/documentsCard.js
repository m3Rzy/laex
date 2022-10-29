import "./style.css";

function DocumentsCard() {
    return (
        <div className="documentsCard">
            <h1 className="documentsCard__title">Документы по технике</h1>
            <div className="documentsCard__container">
                <div className="documentsCard__container__row">
                    <div className="documentsCard__container__row__column1">
                        <p className="documentsCard__container__row__column__title">Название</p>
                    </div>
                    <div className="documentsCard__container__row__column2">
                        <p className="documentsCard__container__row__column__title">Файл</p>
                    </div>
                    <div className="documentsCard__container__row__column3">
                        <p className="documentsCard__container__row__column__title">Дата загрузки</p>
                    </div>
                </div>
            </div>
            <div className="documentsCard__container">
                <div className="documentsCard__container__row">
                    <div className="documentsCard__container__row__column1">
                        <p className="documentsCard__container__row__column__title">Документ</p>
                    </div>
                    <div className="documentsCard__container__row__column2">
                        <p className="documentsCard__container__row__column__title">document.word</p>
                    </div>
                    <div className="documentsCard__container__row__column3">
                        <p className="documentsCard__container__row__column__title">20.09.2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { DocumentsCard };