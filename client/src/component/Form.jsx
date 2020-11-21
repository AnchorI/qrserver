import React from 'react';
import s from './main.module.css'
const Header = () => {
    return(
       <form>
           <input className={s.Input} type="text" value="Id"/>
           <input className={s.Input} type="text" value="Фио"/>
           <input  className={s.Input} type="text" value="Пришёл"/>
           <input type="checkbox" checked readOnly/>
       </form>
    );
}
export default Header;