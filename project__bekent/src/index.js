import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import Header from './header/header';
import { BrowserRouter } from 'react-router-dom';
import App from './main/rount';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <App/>
  </BrowserRouter>
)