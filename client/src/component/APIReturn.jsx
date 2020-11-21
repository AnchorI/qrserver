import React from 'react';
import * as axios from 'axios'

class APIReturn extends React.Component{


        state = {
            data: []
        }

        gettingData = (id) =>{
            let url = `http://localhost:1234/products/get`;
            axios
                .get(url)
                .then(response => response.json());

     }

        componentDidMount() {
        const data = this.gettingData();



        }

    render() {
    const {data} = this.state.data;
    console.log(data);
        return(

            <div >
                {/*{data.map(function e (data) {*/}
                {/* return(*/}
                {/*     <h1>{data.name} </h1>*/}
                {/*    */}
                {/* )*/}

                {/*} )}*/}



            </div>
        )
    }
}

export default APIReturn;