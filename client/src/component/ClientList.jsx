import React from 'react';



const ClientList = (props) => {
    return(
        <div className="client main">
            <h2>Номер вашего билета: {props.id}</h2>
            <h2> Название мероприятия: None</h2>
            <h2> Имя владельца билета {props.name}</h2>
        </div>
    )
}

export default ClientList;