import React from 'react';
import Typing from 'react-typing-animation';

export default class HeaderVideo extends React.Component{

    render(){
        return (
            <div className="headerVidContainer">
                <div className="embed-responsive embed-responsive-16by9">
                    <video className="embed-responsive-item" muted autoPlay loop playsInline src='../HomePageVideo.mp4'/>
                    <div className="headerVidTextOverlay">
                        <h1 className="headerVidNameText">Matthew Hamilton</h1>
                        <Typing>
                            <h1 className="headerVidDescText">Web, App, Game Developer</h1>
                        </Typing>
                    </div>
                </div>
            </div>
        )
    }

}