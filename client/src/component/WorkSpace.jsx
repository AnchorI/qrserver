import React, {Component} from 'react';
import SideBar from './SideBar';
import Footer from './Footer';
import Header from './Header';
import s from './main.module.css'
import {BrowserRouter, Route, Router} from "react-router-dom";
import ClientList from "./ClientList";
import Checked from "./Checked";

class WorkSpace extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={s.WorkSpace}>
                    <Header/>
                    <SideBar/>
                    <div className={s.Space}>
                        <Route path='/clientlist' component={ClientList}/>
                        <Route path='/checked' component={Checked}/>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>

        )
    }


}

export default WorkSpace;