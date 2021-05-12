import React, {Component} from 'react';
import Ukulele from "../../assets/Sounds/Ukulele.mp3"
import Guitar from "../../assets/Sounds/Guitar.mp3"
import {Howl, Howler} from 'howler';
import {Button, Card} from 'react-bootstrap'
import {  Breakpoint, setDefaultBreakpoints, up, down } from 'react-socks';

const audioClips =[
    {sound: Ukulele, label: "Ukulele"},
    {sound: Guitar, label: "Guitar"}
    
]

class Hobbylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
    }

    SoundPlay = (src) => {
        const sound = new Howl({
            src
        });

        sound.once('load', function(){
            sound.play();
          });


        
    }

    RenderSoundButtons = () =>{
        return audioClips.map((soundObj, index) => {
            return(
                
                <div className="buttonflex">
                <Breakpoint large up>
                <Button id={index}key={index} className="soundButton" onClick ={() => this.SoundPlay(soundObj.sound)}>
                   {soundObj.label}
                </Button>
                </Breakpoint>
                <Breakpoint small down>
                <Button id={index}key={index} className="soundButtonMobile" onClick ={() => this.SoundPlay(soundObj.sound)}>
                   {soundObj.label}
                </Button>
                </Breakpoint>

                </div>

            )
        })
    }

    render() {
        Howler.volume(1.0)
        
    return (

        <div id="hobbiediv" className="hobbies">



            <Card className=" cardHobby2 bg-dark text-light">
            <Card.Header className="projectTitle"><ul className="cardHobby2Header">Some things that I enjoy</ul></Card.Header>
            <Card.Body className="cardflex">
            <Card.Text className="aboutMeCardText">

            <li> I have a passion for music.
             I play The Ukulele, and The Guitar.</li>
            <li>I love spending time with family and friends</li>
            <li>I enjoy visiting Museums and Landmarks</li>
            <li>I am a huge fan of Sushi</li>
            <li>I also enjoy exploring, and learning new technologies</li>
            </Card.Text>
            </Card.Body>
            </Card>


            <Card className=" cardHobby3 bg-dark text-light">
            <Card.Header className="projectTitle"><div className="music">Check a few of my Songs</div></Card.Header>
            <Card.Body className="cardflex">
            <Card.Text className="aboutMeCardText">
                <div className="buttonflex"></div>
            {this.RenderSoundButtons()}
            </Card.Text>
            </Card.Body>
            </Card>

    </div>
    )

}

}
export default Hobbylist;




