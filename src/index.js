import "./sass/bootstrap/scss/bootstrap.scss";
import "./sass/main.scss";
import "./HomePageVideo.mp4"
import "./logo.png"
import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home";

ReactDOM.render(
    <Home title="Title"></Home>,
    document.getElementById('root')
)