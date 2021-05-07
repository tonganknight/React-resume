import React from 'react';
import {Card} from 'react-bootstrap';

function Projects() {

    return(
       
    <div className="ProjectBackground">

        <div className="pane">

        <Card className=" card bg-dark text-light">
    <Card.Header className="projectTitle">Artist Portfolio</Card.Header>
    <Card.Body className="cardflex">

        <div className="featureList">
            <ul className="features"><strong>Features:</strong>
                <li className="featureItem">Interactive Art Gallery</li>
                <li className="featureItem">Custom built modals</li>
                <li className="featureItem">Mobile First interface</li>
        <div className="projectLinks">Check out the Repo for this project. <a target ="Blank" href="https://github.com/tonganknight/Katie-Portfolio">Click here</a></div>
            </ul>
        </div>
     
            <Card.Text className="card1text">
                This is a custom portfolio I built for a Graphic Design graduate.
                It runs on  a React engine and uses components for easy navigation.
                It also uses react-bootstrap's colum system for its lay out. 
                I built a custom modal layout for this app that utilizes reacts state management for multiple view options.

            </Card.Text>
        
        <div className="ProjectWindow"></div>

    </Card.Body>

  </Card>


</div>


<div className="paneBody">

<Card className=" cardBody bg-dark text-light">
<Card.Header className="projectTitle">Leftovers</Card.Header>
<Card.Body className="cardflex">

      <div className="featureList">
            <ul className="features"><strong>Features:</strong>
            <li className="featureItem">Edamon API Calls</li>
            <li className="featureItem">Custom Health Filters</li>
            <li className="featureItem">Recipe Favorites List </li>
            <li className="featureItem">Drag and Drop UI</li>
            <li className="featureItem">TP Mobile Interface</li>
            <li className="featureItem">Bulma CSS Styling</li>
            <div className="projectLinks">Check out the Repo for this project. <a target ="Blank" href="https://github.com/tonganknight/awesome-sauce">Click here</a></div>
            </ul>
        </div>

    <Card.Text className="card1text">
        Leftovers is an application I built to help Users see required ingredients for recipes  before going to a  recipe site
        This app builds and executes  API calls from a user search and builds results which then users can chose to locally store in a favorites list.
        I used JQuery, and Jquery-UI to give this app a drag and drop functionality. I also utilized a package called touch punch so the JQuery would work on mobile   
        I used a mobile CSS frame work called Bulma to build the front end  of this app.

    </Card.Text>

    
  <div className="ProjectWindow"></div>


</Card.Body>
</Card>


</div>

<div className="paneBody">

<Card className=" card bg-dark text-light">
<Card.Header className="projectTitle">TaskMaster</Card.Header>
<Card.Body className="cardflex">

    <div className="featureList">
            <ul className="features"><strong>Features:</strong>
                <li className="featureItem">Interactive Art Gallery</li>
                <li className="featureItem">Custom built modals</li>
                <li className="featureItem">Mobile First interface</li>
            </ul>
        </div>

    <Card.Text className="card1text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
    </Card.Text>

<div className="ProjectWindow"></div>

</Card.Body>
</Card>


</div>

<div className="paneBody">


<Card className=" card bg-dark text-light">
<Card.Header className="projectTitle">Runbuddy</Card.Header>
<Card.Body className="cardflex">

        <div className="featureList">
            <ul className="features"><strong>Features:</strong>
                <li className="featureItem">Interactive Art Gallery</li>
                <li className="featureItem">Custom built modals</li>
                <li className="featureItem">Mobile First interface</li>
            </ul>
        </div>

    <Card.Text className="card1text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
    </Card.Text>

<div className="ProjectWindow"></div>

</Card.Body>
</Card>


</div>

<div className="paneBody">

<Card className=" card bg-dark text-light">
<Card.Header className="projectTitle">Work Scheduler</Card.Header>
<Card.Body className="cardflex">

        <div className="featureList">
            <ul className="features"><strong>Features:</strong>
                <li className="featureItem">Interactive Art Gallery</li>
                <li className="featureItem">Custom built modals</li>
                <li className="featureItem">Mobile First interface</li>
            </ul>
        </div>

    <Card.Text className="card1text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
    </Card.Text>

<div className="ProjectWindow"></div>

</Card.Body>
</Card>


</div>


    </div>


           


    )

}


export default Projects