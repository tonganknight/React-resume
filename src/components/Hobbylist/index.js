import React, {Component} from 'react';
import { render } from "react-dom";
import Ukulele from "../../assets/Sounds/Ukulele.mp3"
import Guitar from "../../assets/Sounds/Guitar.mp3"
import {Howl, Howler} from 'howler';
import {Button} from 'react-bootstrap'


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
        }) 
        sound.once('load', function(){
        sound.play()
        })
        
    }

    RenderSoundButtons = () =>{
        return audioClips.map((soundObj, index) => {
            return(
                <Button key={index} className="soundButton" onClick ={() => this.SoundPlay(soundObj.sound)}>
                   {soundObj.label}
                </Button>
            )
        })
    }

    render() {
        Howler.volume(1.0)
        
    return (

        <div id="hobbiediv" className="hobbies">



        <ul className="hobbielisttext"><strong>Some things that I enjoy</strong>
            <li> I have a passion for music.
             I play The Ukulele, and The Guitar.</li>

        <li>I love spending time with family and friends</li>
        <li>I enjoy visiting Museums and Landmarks</li>
        <li>I am a huge fan of Sushi</li>
        <li>I also enjoy exploring, and learning new technologies</li>
        </ul>

        <div className="music"><strong>Check a few of my Songs</strong>
                {this.RenderSoundButtons()}
                  </div>
            
       
       
           
    </div>
    )

}

}
export default Hobbylist;




