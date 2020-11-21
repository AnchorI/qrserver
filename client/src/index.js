import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import WebPage from "./component/WebPage";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
         <WebPage/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
