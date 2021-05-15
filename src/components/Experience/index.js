import React from 'react';
import { Card, Popover, OverlayTrigger } from 'react-bootstrap'
import {  Breakpoint, setDefaultBreakpoints, up, down } from 'react-socks';


function Experience(){

  

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Databases I have been using</Popover.Title>
      <Popover.Content>
        MongoDB, SQL, MYSQL, SQlite
      </Popover.Content>
    </Popover>
  );

  const Example = () => (
    <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
      <div className="xpicon databaseicon"></div>
    </OverlayTrigger>
  );
  


    return(

    <div className="experienceflex">

      <Breakpoint large up>
        <div className="experienceTitle"></div>
        <div className="experienceicons1">
        <div className=" xpicon htmlicon"></div>
        <div className="xpicon cssicon"></div>
        <div className="xpicon javascripticon"></div>
        </div>
        <div className="experienceicons2">
        <div className="xpicon npmicon"></div>
        <div className="xpicon jqueryicon"></div>
        <div className="xpicon bootstrapicon"></div>
        <div className="xpicon apiicon"></div>
        </div>
      <div className="xpicon2textflex">
      <div className="xp2icontext"> NPM Packages </div>
      <div className="xp2icontext"><span className="jquerytext">JQuery</span></div>
      <div className="xp2icontext">Boot Strap</div>
      <div className="xp2icontext"><span className="Apitext">Apis</span></div>
      </div>
      <div className="experienceicons3">
        <div className="xpicon nodejsicon"></div>
        <div className="xpicon reacticon"></div>
        <Example />
        <div className="xpicon graphqlicon"></div>
        <div className="xpicon pwaicon"></div>
      </div>
      <div className="xpicon3textflex">
        <div className="xp2icontext">Node.js</div>  
        <div className="xp2icontext">React</div> 
        <div className="xp3icontext">Database</div>
        <div className="xp3icontext">GraphQL</div>
        <div className="xp3icontext">PWA</div>
        </div>
</Breakpoint>

<Breakpoint small down>
<div className="mobileIconFlex">
      <div className="iconCol1">
        <div className="htmlIconMobile"></div>
        <div className="npmIconMobile"></div>
        <div className="nodeIconMobile"></div>
        <div className="reactIconMobile"></div>
      </div>
      <div className="iconCol1">
        <div className="cssIconMobile"></div>
        <div className="jqueryIconMobile"></div>
        <div className="databseIconMobile"></div>
        <div className="graphqlIconMobile"></div>
      </div>
      <div className="iconCol1">
        <div className="javascriptIconMobile"></div>
        <div className="bootstrapIconMobile"></div>
        <div className="apiIconMobile"></div>
        <div className="pwaIconMobile"></div>
      </div>

</div>

</Breakpoint>

        <div className="experienceDivHolder">

        <Card className=" cardExperience bg-dark text-light">
            <Card.Header className="projectTitle">My Experience</Card.Header>
            <Card.Body className="cardflex">
            <Card.Text className="aboutMeCardText">

            <div className="experiencetext">This past year I earned a certificate from the University of Utah in Full Stack Development.
            I have mastered several front and back-end technologies and actively deployed many applications. 
            Creating sharp clean user friendly UIs has become second nature to me. 
            I have worked with multiple CSS frameworks, and I am skilled with both CS Grid and Bootstrap.
            My experience with mobile first applications and designing interactive content for users is extensive.
            <div className="break"></div> I have a deep understanding of Node.js and Database, which I have used for many Full Stack applications.
             I am experienced at creating large scale projects using MVC format and an in depth understanding of testing and object oriented programing in Agile Development.
              I also have experience building full scale projects and have several repeatable builds on hand.   
             </div>

            </Card.Text>
            </Card.Body>
            </Card>

        
        
   
        </div>

         <div className="exoeriencebackgroundflex">



        <Card className=" cardExperience bg-dark text-light">
            <Card.Header className="experienceTitle">Technologies I Use</Card.Header>
            <Card.Body className="cardflex">
            <Card.Text className="aboutMeCardText">

            <div className="techBreakdown">

              <ul><strong>Front-end Technologies</strong>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>JQuery</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Handlebars</li>
                  <li>Bulma</li>
              </ul> 

              <ul className="backend"><strong>Back-end Technologies</strong>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Sequelize.js</li>
              <li>Mongoose</li>
              <li>Jest</li>
              <li>Nodemon</li>
              <li>Apollo-server</li>
              <li>APIs</li>
              <li>GraphQL</li>
              <li>PWA</li>
              </ul>

              <ul className="backend"><strong>Databases</strong>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>SQL</li>
              <li>SQLite</li>
              </ul>
              </div>

            </Card.Text>
            </Card.Body>
            </Card>


        </div>

</div>
    )
}

export default Experience;