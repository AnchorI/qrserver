import React from 'react';
import {NavLink} from "react-router-dom";

const SideBar = () => {
    return(
        <nav>

            <div><NavLink to="/clientlist">Список гостей</NavLink> </div>
            <div> <NavLink to='/checked'> Проверка билета</NavLink></div>
        </nav>
    );
}
export default SideBar;