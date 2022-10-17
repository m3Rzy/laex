import '../styles/otech.css'

function Otech() {
    return (
      <div className='main__cont'>
        <div className='top__menu__bar'>
            <h1 className='logo__asm'>АСМ</h1>
            <a href='#' className='top__menu__item'>Биржа заявок</a>
            <a href='#' className='top__menu__item'>Техника</a>
            <a href='#' className='top__menu__item'>Поля</a>
            <div className='angle__down'>v</div>
        </div>
      </div>
    );
  }
  
  export {Otech};
  