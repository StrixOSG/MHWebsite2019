import React from 'react';

export default class Header extends React.Component{

    render(){
        return (
            <div class="embed-responsive embed-responsive-16by9">
                <video class="embed-responsive-item" muted autoPlay loop playsInline src='../HomePageVideo.mp4'/>
            </div>
        )
    }

}