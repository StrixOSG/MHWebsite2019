import React from 'react';
import Button from '../components/button';
import Navbar from '../components/navbar';
import HeaderVideo from '../components/headervideo';

export default class Home extends React.Component {
    render(){
        return(
            <div>
                <Navbar/>
                <HeaderVideo/>
            </div>
        )
    }
}