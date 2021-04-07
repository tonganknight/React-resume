import React from 'react';

function Resume() {

    return(
       
    <div className="resumeSection">
        <div className="resumeTitle"><strong>Resume and Qualifications</strong></div>

        <div className="PDFoffer"> for a PDF Copy of my resume Please click<a href="https://drive.google.com/file/d/1fdtvhHIFh6q8DtoQK0dYcibIDW2CuSZB/view?usp=sharing">Here</a></div>

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
        <li>APis</li>
        <li>GraphQL</li>
        <li>PWA</li>
        </ui>

        <div className="databaseicon"></div>
        <div className="databasetext "><strong>Database:</strong></div>
        <div className="database">MongoDB, MySQL, SQlite</div>
    </div>

    )

}

export default Resume