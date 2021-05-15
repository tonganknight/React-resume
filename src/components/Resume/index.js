import React, { useState } from 'react';
import {  Breakpoint,} from 'react-socks';
import { Button, Modal, Card } from 'react-bootstrap';




function Resume() {

/* Modal State*/
const [show1, setShow1] = useState(false);
const handleClose1 = () => setShow1(false);
const handleShow1 = () => setShow1(true);

function showDiv(){
    document.getElementById("logo").style.visibility ="visible"
}
    return(

       
       
        <div>

         <Breakpoint large up>

         <div className="resumeSection">

        <div onMouseOver ={showDiv}className ="UofUTitle"><div id="logo"  className="UofUMicroLogo"></div><strong >University of Utah</strong></div>
        <div className="UofUcred"></div> 
        <div className="UofUflex">
        <div className="UofUpic"></div>
        <div className="UofUQRCode"></div>   
        </div> 
        <div className="UofUdiscription">I bring both front end and back end expertise. I have experience working with new technologies and integrating them at a fast pace.
            I am a very quick study and have heavy experience using the MERN stack. I attended the University of Utah and received a certificate in Full Stack Development. 
            Please visit my projects section to see more details on some of my accomplishments and experience in action.</div>

        <div className="sales"><strong>Experience Outside of Web Development</strong></div>


        <div className="salesXp">I have a proven history of leading successful teams 
        within both small companies and large International Corporations.
         Some of my experience includes working as a Team Lead Supervisor, managing teams as large as 27 employees, 
         and an Assistant Manager personally training and maintaining highest grossing teams over a year..
        I also have some experience in logistics. I worked as a dispatcher for an Electrician company dispatching agents over 
         Salt Lake City, Kanab, and Saint George areas. 
         </div>

         <div id="otherXp"className="PDFoffer"> For a full copy of my resume Please click <a target="blank" href="./Malachi Alusa Resume.pdf" download>Here</a></div>

        </div>
        </Breakpoint>

        <Breakpoint small down>
        <div className="resumeSection">
        <div className="resumeTitleMobile"><strong>Here are some of my qualifications</strong></div>
        <div className ="UofUTitleMobile"><div id="logo"  className="UofUMicroLogoMobile"></div><strong >University of Utah</strong></div>
        <div className="UofUflexMobile">
        <div className="UofUcredpicMobile" onClick={handleShow1}></div>
        <Modal className =" .modal-content modal-body-flex border-dark"
                  size="lg"
                  show={show1}
                  onHide={handleClose1}
                  aria-labelledby="example-modal-sizes-title-lg">
                  <div className="custom-modal bg-dark" size="lg">
                 <div className="resumeModalCredFlex">
                 <div className="resumeModalPic"></div>
                <div className="credlyMobileModal">Verify through <span className="credlyColor">Credly</span></div> 
                <a href="https://www.credly.com/" target="Blank" className="qrMobileModal"></a>
                 </div>
                  <Button  className=" border-dark modalbuttonMobile" variant="secondary" onClick={handleClose1}>
                    Close
                  </Button>
                  </div>
        </Modal>

        <Card className=" cardExperience bg-dark text-light">
            <Card.Header className="projectTitle">My Expertise</Card.Header>
            <Card.Body className="cardflex">
            <Card.Text className="aboutMeCardText">
            <div className="experiencetextMobile"> I bring both front end and back end expertise. I have experience working with new technologies and integrating them at a fast pace.
            I am a very quick study and have heavy experience using the MERN stack. I attended the University of Utah and received a certificate in Full Stack Development.
            <div className="break"></div>
            Please visit my projects section to see more details on some of my accomplishments and experience in action.
             </div>
            </Card.Text>
            </Card.Body>
            </Card>

            <Card className=" cardExperience bg-secondary text-light">
            <Card.Header className="projectTitleExperience2Mobile">Experience Outside of Web Development</Card.Header>
            <Card.Body className="cardflex">
            <Card.Text className="aboutMeCardText">
            <div className="experiencetextMobile"> I have a proven history of leading successful teams 
        within both small companies and large International Corporations.
         Some of my experience includes working as a Team Lead Supervisor, managing teams as large as 27 employees, 
         and an Assistant Manager personally training and maintaining highest grossing teams over a year.
         <div className= "break"></div>
         I also have experience in logistics. I worked as a dispatcher for an Electrician company dispatching agents over 
         Salt Lake City, Kanab, and Saint George areas. </div>
            </Card.Text>
            </Card.Body>
            </Card>

            <div id="otherXp"className="PDFofferMobile"> For a full copy of my resume Please click <a target="blank" href="./Malachi Alusa Resume.pdf" download>Here</a></div>



        </div> 
 
        </div>

        </Breakpoint>
        
        </div>
    )

}

export default Resume