import React from 'react';
import {Card} from 'react-bootstrap';

function ProjectInterface() {

    return(

        
       
    <div className="ProjectBackground">

        <div className="pane">

        <Card className=" card bg-dark text-light">
    <Card.Header className="projectTitle"><a href="http://www.alusadesign.com/" target="Blank" className="ProjectTitleLink">Graphic Designer Portfolio</a></Card.Header>
    <Card.Body className="cardflex">

        <div className="featureList">
            <ul className="features"><strong>Features:</strong>
                <li className="featureItem">Interactive Art Gallery</li>
                <li className="featureItem">React Application</li>
                <li className="featureItem">Custom built modals</li>
                <li className="featureItem">Mobile First interface</li>
        <div className="projectLinks">Check out the Repo for this project. <a target ="Blank" href="https://github.com/tonganknight/Katie-Portfolio">Click here</a></div>
            </ul>
        </div>
     
            <Card.Text className="card1text">
                This is a custom portfolio I built for a Graphic Design graduate.
                Its a  React application and uses components for easy navigation.
                It also uses react-bootstrap's colum system for its lay out. 
                I built a custom modal layout for this app that utilizes reacts state management for multiple view options.

            </Card.Text>
        
        <a href="http://www.alusadesign.com/" target="Blank" className="ProjectWindowPortfolio"></a>

    </Card.Body>

  </Card>


</div>


<div className="paneBody">

<Card className=" cardBody bg-dark text-light">
<Card.Header className="projectTitle"><a href="https://tonganknight.github.io/awesome-sauce/" target="Blank" className="ProjectTitleLink">Leftovers</a> 
</Card.Header>
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

    
  <a href="https://tonganknight.github.io/awesome-sauce/" target="Blank" className="ProjectWindowLeftovers"></a>


</Card.Body>
</Card>


</div>

<div className="paneBody">

<Card className=" card bg-dark text-light">
<Card.Header className="projectTitle"><a href="https://tonganknight.github.io/taskmaster-pro/" target="Blank" className="ProjectTitleLink">TaskMaster</a>
</Card.Header>
<Card.Body className="cardflex">

    <div className="featureList">
            <ul className="features"><strong>Features:</strong>
                <li className="featureItem">Drag and Drop UI</li>
                <li className="featureItem">Locally Stored Data</li>
                <li className="featureItem">Mobile Touch Interface</li>
                <li className="featureItem">Bootstrap Layout </li>
                <div className="projectLinks">Check out the Repo for this project. <a target ="Blank" href="https://github.com/tonganknight/taskmaster-pro">Click here</a></div>
            </ul>
        </div>

    <Card.Text className="card1text">
        Taskmaster is a sharp responsive app that lets users organize daily tasks quickly.
        This application looks really good on mobile. I used JQuery UI/ UX, and an interesting package 
        called TouchPunch that allows its drag and drop features to work really well on mobile.
    </Card.Text>

<a href="https://tonganknight.github.io/taskmaster-pro/" target="Blank" className="ProjectWindowTaskMaster"></a>

</Card.Body>
</Card>


</div>

<div className="paneBody">


<Card className=" card bg-dark text-light">
<Card.Header className="projectTitle"><a href="https://tonganknight.github.io/run-buddy/" target="Blank" className="ProjectTitleLink">Runbuddy</a>
</Card.Header>
<Card.Body className="cardflex">

        <div className="featureList">
            <ul className="features"><strong>Features:</strong>
                <li className="featureItem">Custom Animations</li>
                <li className="featureItem">Sharp interface</li>
                <li className="featureItem">CS Grid</li>
                <div className="projectLinks">Check out the Repo for this project. <a target ="Blank" href="https://github.com/tonganknight/run-buddy/blob/master/README.md">Click here</a></div>
            </ul>
        </div>

    <Card.Text className="card1text">
        Runbuddy is a mock up project for a fictional company. 
        This is a static webpage that was designed to showcase some of the CSS skills I have mastered. 
        It is a landing page that uses some interesting from-end features such as: CS Grid, and custom animations,
    </Card.Text>

<a href="https://tonganknight.github.io/run-buddy/" target="Blank" className="ProjectWindowRunbuddy"></a>

</Card.Body>
</Card>


</div>

<div className="paneBody">

<Card className=" card bg-dark text-light">
<Card.Header className="projectTitle"><a href="https://tonganknight.github.io/Work-Scheduler/" target="Blank" className="ProjectTitleLink">Work Scheduler</a>
</Card.Header>
<Card.Body className="cardflex">

        <div className="featureList">
            <ul className="features"><strong>Features:</strong>
                <li className="featureItem">Interactive Hourly Scheduler</li>
                <li className="featureItem">Dynamically Updated Interface </li>
                <li className="featureItem">Moment.JS Structure</li>
                <div className="projectLinks">Check out the Repo for this project. <a target ="Blank" href="https://github.com/tonganknight/Work-Scheduler">Click here</a></div>
            </ul>
        </div>

    <Card.Text className="card1text">
        This application uses Moment.JS to create an hourly schedule for a work day. 
        It lets users set up custom tasks for each hour of the day. 
        As each hour passes through the day, the interface will update to reflect how far along you are in your day, and which hours have passed.
        
    </Card.Text>

<a href="https://tonganknight.github.io/Work-Scheduler/" target="Blank" className="ProjectWindowWorkScheduler"></a>

</Card.Body>
</Card>


</div>


    </div>


           


    )

}


export default ProjectInterface