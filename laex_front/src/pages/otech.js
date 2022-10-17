import '../styles/otech.css'
import { FaAngleDown } from 'react-icons/fa'
import { AiOutlineBell } from 'react-icons/ai'
import { IoChatbubblesOutline } from 'react-icons/io5'

function Otech() {
    return (
      <div className='main__cont'>
        <div className='top__menu__bar'>
            <h1 className='logo__asm'>АСМ</h1>
            <a href='#' className='top__menu__item'>Биржа заявок</a>
            <a href='#' className='top__menu__item'>Техника</a>
            <a href='#' className='top__menu__item'>Поля</a>
            <div className='right__bar'>
                <a href='#' className='buttons__right__bar'>
                    <IoChatbubblesOutline />
                </a>
                <a href='#' className='buttons__right__bar'>
                    <AiOutlineBell />
                </a>
                <a href='#' className='avatar__circle'>
                    {/* <img src={avatar} className='avatar__logo'/> */}
                </a>
                <a href='#' className='angle__down'>
                    <FaAngleDown />
                </a>
            </div>
        </div>
      </div>
    );
  }
  
  export {Otech};
  