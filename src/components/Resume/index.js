import React from 'react';

function Resume() {

    return(
       
    <div className="resumeSection">
        <div className="resumeTitle"><strong>Resume and Qualifications</strong></div>

        <div className="PDFoffer"> for a PDF Copy of my resume Please click<a href="#">Here</a></div>

        <ui><strong>Front-end Technologies</strong>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Handlebars</li>
            <li>Bulma</li>
        </ui> 

        <ui><strong>Back-end Technologies</strong>
        <li>API</li>
        <li>Express</li>
        </ui>

        <div className="databaseicon"><span className="databasetext">Database:</span></div>
       
        <div>MongoDB, MySQL, SQlite</div>
    </div>

    )

}


export default Resume