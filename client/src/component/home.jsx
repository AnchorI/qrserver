import React, { useState, useEffect } from "react";

import UserService from "../service/user.service";
import TiketForId from "./TiketForId";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import Connect from "../service/connect";
import ClientList from "./ClientList";


const Home = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        UserService.getPublicContent().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);



    return (
        <div className="container">

                <Switch>
                    <Route exact path="/home" component={homeDefault} />
                    <Route  path="/home/:id" children={<Child />} />
                </Switch>


        </div>
    );


};

const Child =  () => {
    const [ data , setData] = useState("");
    let {id}  =  useParams();
    console.log(id);
    useEffect(() => {
        Connect(id).then(
            (response) => {
                setData(response.data);

            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();

                console.log(_content)
            }
        );
    }, []);

    return (
        <div>
            <ClientList name={data.name} id={data._id}/>
        </div>
    );

};

const homeDefault = () => {
    return(
        <div>
            <h2>Отсканируйте QR</h2>
        </div>
    )
};







export default Home;
