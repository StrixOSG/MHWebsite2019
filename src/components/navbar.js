import React from 'react';
import Navbar from "react-bootstrap/Navbar"

export default class MyNavbar extends React.Component{

    render(){
        return (
                <Navbar className="navbar">
                    <Navbar.Brand href="#">
                    <img
                        alt=""
                        src="../logo.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />
                    </Navbar.Brand>
                </Navbar>
        )
    }

}