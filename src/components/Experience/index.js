import React from 'react';
import { Card } from 'react-bootstrap'


function Experience(){


    return(
    <div className="experienceflex">

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

        <div className="xpicon databaseicon"></div>

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





      
    


        <div className="experienceDivHolder">

        <Card className=" cardExperience bg-dark text-light">
            <Card.Header className="projectTitle">My Experience</Card.Header>
            <Card.Body className="cardflex">
            <Card.Text className="aboutMeCardText">

            <div className="experiencetext">This past year I have been enrolled in the University of Utah Coding Camp.
            I have been learning front end and back end technologies, and actively deploying applications. 
            Creating sharp clean user friendly UIs has become second nature to me. 
            I have worked with multiple CSS frameworks, and am skilled  with both CS Grid and Bootstrap.
            I have experience with mobile first applications, and designing interactive content for users. 
            <div className="break"></div> Node.js and Database are also tools I have ready for any fullstack application.
             I am experienced at creating large scale projects using MVC format, and an in depth understanding of testing and  object oriented programing, in Agile Development.
              I also have experience building full scale projects, and have several repeatable builds on hand.   
             </div>

            </Card.Text>
            </Card.Body>
            </Card>

        
        
          <div className="databaseExHolder">

          <div className="databaseicon"></div>
        <div className="databasetext "><strong>Database:</strong></div>
        <div className="database">MongoDB, MySQL, SQL</div>

        </div>
        </div>

         <div className="exoeriencebackgroundflex">



        <Card className=" cardExperience bg-dark text-light">
            <Card.Header className="experienceTitle">Here is a brief overview on how I leverage some of these technologies </Card.Header>
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
              </div>

            </Card.Text>
            </Card.Body>
            </Card>


        </div>

</div>
    )
}

export default Experience;