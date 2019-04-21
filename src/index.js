import './sass/bootstrap/scss/bootstrap.scss';
import "./sass/main.scss";
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import HomePageVideo from './HomePageVideo.mp4';

ReactDOM.render(
    <Home title="Title"></Home>,
    document.getElementById('root')
)