import React, { Component, useState} from 'react';
import { render } from "react-dom";
import Hobbylist from "../Hobbylist"



class About extends Component {

    constructor(props){
        super(props);
        this.state = {
        showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick(){
        this.setState({
            showComponent: true,
        });

        const bt1 = document.getElementById("aboutbutton").style.visibility = "hidden"


    }

    _offButtonClick(){
        this.setState({
            showComponent: false,
        });

        const bt1 = document.getElementById("aboutbutton").style.visibility = "visible"
        
    }

    render(){

    return (
    <div className="background">
        <div className="aboutmetextflex">
            <div className="mypic"></div>
            <div className="aboutmeText">
           I was born in Redwood City California. Over the course of my life.
           I have had the opportunity to work around the country. I am a passionate individual that loves life. 
           I have a strong work ethic, and emphasize an out of the box style approach to problem solving. 
           <div className="break"></div>I enjoy being creative.
            I bring a vast and diverse set of experience and expertise. For the past 5 years, I have been in supervisor and management positions. 
            I am a great team player, and love to collaborate with others I also enjoy tackling projects solo.
            <div className="break"></div> 
             I am looking for a reputable company that shares my desire to strive for excellence.  
             </div>
            </div>

            <button id="aboutbutton" onClick={this._onButtonClick}className="hobbiebutton"> Some of my hobbies</button>

            {this.state.showComponent ?
            <Hobbylist />:null}


            
    </div>
     )
}

}




export default About