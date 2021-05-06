import React from 'react';

function Resume() {

    return(
       
    <div className="resumeSection">
        <div className="resumeTitle"><strong>Here is a brief overview of some of my qualifications</strong></div>

        <div className ="UofUTitle"><strong>University of Utah</strong></div>
        <div className="UofUflex">
        <div className="UofUpic"></div>
        <div className="UofUQRCode"></div>   
        </div> 
        <div className="UofUdiscription">I bring both front end and back end expertise. I have experience working with new technologies, and integrating them at a fast pace.
            I am a very quick study, and have heavy experience using the MERN stack. I recently attended the University of Utah and received a certificate in full stack development. 
            Please visit my Projects section to see more details on some of my accomplishments, and experience in action</div>

        <div className="sales"><strong>Some experience I bring outside of Web Development</strong></div>

        <div>  </div>

        <div className="salesXp">I have a proven history of leading successful teams 
        within both small companies and large International Corporations.
         Some of my experience includes working as a Team Lead Supervisor managing teams as large as 27 employees, 
         and an Assistant Manager personally training and maintaining highest grossing teams over a year.
         I also have some experience in logistics. I worked as a dispatcher for an Electrician company dispatching agents over 
         Salt Lake City, Kanab, and Saint George areas. 
         </div>

         <div className="PDFoffer"> For a full copy of my resume Please click <a target="blank" href="./Malachi Alusa Resume.pdf" download>Here</a></div>


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

        <ui className="backend"><strong>Back-end Technologies</strong>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Sequelize.js</li>
        <li>APIs</li>
        <li>GraphQL</li>
        <li>PWA</li>
        </ui>

        <div className="databaseicon"></div>
        <div className="databasetext "><strong>Database:</strong></div>
        <div className="database">MongoDB, MySQL, SQlite</div>

        <div className="PDFoffer"> for a PDF Copy of my resume Please click<a target="blank" href="./Malachi Alusa Resume.pdf" download>Here</a></div>
    </div>
 
    )

}

export default Resume