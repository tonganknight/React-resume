import React from 'react';
import {Card} from 'react-bootstrap';

function ProjectFullstack() {

    return(

    <div className="ProjectBackground">

        <div className="pane">

        <Card className=" card bg-dark text-light">
    <Card.Header className="projectTitle"><a href="https://boostme-0421.herokuapp.com/" target="Blank" className="ProjectTitleLink">Boost Me</a></Card.Header>
    <Card.Body className="cardflex">

        <div className="featureList">
            <ul className="features"><strong>Features:</strong>
                <li className="featureItem2">MongoDB, Express.js Server</li>
                <li className="featureItem2">User Login, and Authorization</li>
                <li className="featureItem2">JS Webtokens</li>
                <li className="featureItem2">Bycrpt Password Hashing</li>
                <li className="featureItem2">GraphQL: Relations, Queries, and Mutations</li>
                <li className="featureItem2">Stripe Checkout System</li>
        <div className="projectLinks">Check out the Repo for this project. <a target ="Blank" href="https://github.com/tonganknight/Katie-Portfolio">Click here</a></div>
            </ul>
        </div>
     
            <Card.Text className="card1text">
               Boost Me is a donation platform that was built for the 4H community.
                It provides a solid user integrated experience for financial backing.
                Due to its malleable data structure it was created with an emphasis on repeatable builds in mind.
                It uses Mongo Database, Express.js, and Apollo for the Server side, and react and bootstrap for the front end.
                I was responsible for working on the back end of this project, and helped intergrade it to our front End


            </Card.Text>
        
            <a href="https://boostme-0421.herokuapp.com/" target="Blank" className="ProjectWindowBoostMe"></a>

    </Card.Body>

  </Card>


</div>

<div className="paneBody">

        <Card className=" card bg-dark text-light">
    <Card.Header className="projectTitle"><a target="Blank" href="https://readviews-022021.herokuapp.com/" className="ProjectTitleLink">Readviews</a> 
    </Card.Header>
    <Card.Body className="cardflex">

        <div className="featureList">
            <ul className="features"><strong>Features:</strong>
                <li className="featureItem2">Express.js, Sequelize Server</li>
                <li className="featureItem2">User login, with Sessions</li>
                <li className="featureItem2">User Posts, and Comments</li>
                <li className="featureItem2">User Upvote System</li>
                <li className="featureItem2">Password Hashing</li>
                <li className="featureItem2">Handlebars Interface</li>
                <li className="featureItem2">Sass and Bulma Layout</li>
                

        <div className="projectLinks">Check out the Repo for this project. <a target ="Blank" href="https://github.com/tonganknight/Katie-Portfolio">Click here</a></div>
            </ul>
        </div>
     
            <Card.Text className="card1text">
            Readviews is Project with the idea of creating a interactive website for book reviews.
               It allows users to sign up and login and post reviews for books they have read. 
               They can also explore other users reviews. It also lets users intact with each others posts 
               through comments and upvotes. This project utilizes: MySQL database, Express, and Sequelize for the backend and 
               handlebars, Sass and Bulma for the front end. 

            </Card.Text>
        
        <a href="https://readviews-022021.herokuapp.com/" target="Blank" className="ProjectWindowReadViews"></a>

    </Card.Body>

  </Card>


</div>

<div className="paneBody">

        <Card className=" card bg-dark text-light">
    <Card.Header className="projectTitle"><a href="https://the-tech-book.herokuapp.com/" target="Blank" className="ProjectTitleLink">Tech Book</a></Card.Header>
    <Card.Body className="cardflex">

        <div className="featureList">
            <ul className="features"><strong>Features:</strong>
                <li className="featureItem2">Express.js, Sequelize Server</li>
                <li className="featureItem2">MYSQL Database</li>
                <li className="featureItem2">User Posts, and Comments</li>
                <li className="featureItem2">User Upvote System</li>
                <li className="featureItem2">Password Hashing</li>
                <li className="featureItem2">Friends List</li>
                <li className="featureItem2">Handlebars Interface</li>
                <li className="featureItem2">Bootstrap Layout</li>
                

        <div className="projectLinks">Check out the Repo for this project. <a target ="Blank" href="https://github.com/tonganknight/Katie-Portfolio">Click here</a></div>
            </ul>
        </div>
     
            <Card.Text className="card1text">
            Tech Book is a full stack social media site. That uses MYSQL as a Database, and leverages its strict 
            data relations to create a comment and post system. This current build of it is for New Technology posts.
            However, this can easily be rebuilt as a Social Media application of any kind.

            </Card.Text>
        
        <a href="https://the-tech-book.herokuapp.com/" target="Blank" className="ProjectWindowTechBook"></a>

    </Card.Body>

  </Card>


</div>


</div>

)

}

export default ProjectFullstack