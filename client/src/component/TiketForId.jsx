import React from 'react';

 function TiketForId(props) {
     const idFind = props.id;
     let result = undefined;
     if(idFind == 0){
         result = <div> <h1>Отсканируйте QR-code</h1></div>;
     }else if (idFind !==0){
         result = <div> <h3>{props.id}</h3> <p>{props.name}</p> </div>;
     }else {     result = <div> <h1>Отсканируйте QR-code</h1></div>;

 }


     return(
        <div>
            {result}
        </div>
     );
}

export default TiketForId;