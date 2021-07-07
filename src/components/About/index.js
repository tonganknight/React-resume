import React, { Component } from 'react';
import {Card,} from 'react-bootstrap';
import {  Breakpoint, setDefaultBreakpoints, up, down } from 'react-socks';
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

            <Card className=" cardHobby bg-dark text-light">
            <Card.Header className="projectTitle">Hello My name is Malachi</Card.Header>
            <Card.Body className="cardflex">
            <Card.Text className="aboutMeCardText">

           Over the course of my life,
           I have had the opportunity to work around the country. I am a passionate individual that loves life. 
           I have a strong work ethic and emphasize an out of the box style approach to problem solving. 
           As a Web Developer, I have created multiple applications that can easily be repurposed.
           <div className="break"></div>
            I bring a vast and diverse set of experience and expertise to the work place.
            I received a certificate in Full Stack Development from the University of Utah.
             Over the past year, I have produced creative web based solutions to real world problems. 
            I am a great team player and love to collaborate with others. I also enjoy tackling projects solo.
            <div className="break"></div> 
             I am looking for a reputable company that shares my desire for excellence.  

        
            </Card.Text>
            </Card.Body>
            </Card>

            

    </div>

    <Breakpoint large up>
    
        <button id="aboutbutton" class ="projectButtonsLarge" onClick={this._onButtonClick}className=" bg-dark projectButtonsLargehobby">Hobbies</button>

            {this.state.showComponent ?
            <Hobbylist />:null}


    </Breakpoint>
            
    <Breakpoint small down>
    <button id="aboutbutton" onClick={this._onButtonClick}className="hobbiebuttonMobile">Hobbies</button>

    {this.state.showComponent ?
    <Hobbylist />:null}

    </Breakpoint>


    </div>

     )
}

}




export default About