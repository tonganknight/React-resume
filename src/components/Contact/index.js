import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import {Card} from 'react-bootstrap';
import {  Breakpoint,} from 'react-socks';
import Footer from '../Footer'

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
              }
              console.log('errorMessage', errorMessage);
              
            }
            if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })  //setFormState({...formState, name: e.target.value })
            }
      }
      
      console.log(formState);
return(

    <div>
    <Breakpoint large up>
    <div className="contactback">
      <div className="contactFlex">
        <div className="chatIcon"></div>
        <div className="contactTitle"><strong>Lets Chat!</strong></div> 
      </div>

      <div className="contactText">If you are looking for a Web Developer or needing another hand in a project.
        I would love to touch base with you. Feel free to reach out to me through the contact information below.
      </div>

      <Card className=" cardContact bg-dark text-light">
    <Card.Header className="projectTitle">Contact Me</Card.Header>
    <Card.Body className="cardContactflex">
            <Card.Text className="card1text">

            <div className="contactEmailFlex">
              <div className="contactEmailIcon"></div>
              <div className="cardContactText">malachialusa@gmail.com</div>
            </div>
            <div className="contactPhoneFlex">
            <div className="contactPhoneIcon"></div>
            <div className="cardContactText">435-772-5277</div>
            </div>
            </Card.Text>    
    </Card.Body>
  </Card>

    <div className="contactText">Or message me through the social media outlets below!</div>

    </div>

    </Breakpoint>
    <Breakpoint small down>
    <div className="contactback">
    <div className="contactFlexMobile">
        <div className="chatIconMobile"></div>
        <div className="contactTitleMobile"><strong>Lets Chat!</strong></div> 
      </div>
      <div className="contactTextMobile">If you are looking for a Web Developer or needing another hand in a porject.
        I would love to touch base with you. Feel free to reach out to me through the contact information below.
      </div>
      
      <Card className=" cardContact bg-dark text-light">
    <Card.Header className="projectTitleMobile">Contact Me</Card.Header>
    <Card.Body className="cardContactflexMobile">
            <Card.Text className="card1text">

            <div className="contactEmailFlexMobile">
              <div className="emailIconMobile"></div>
              <a href="mailto:malachialusa@gmail.com" className="cardContactTextMobile" >malachialusa@gmail.com</a>
            </div>
            <div className="contactPhoneFlexMobile">
            <div className="phoneIconMobile"></div>
            <a  href="tel:435-772-5277"className="cardContactTextMobile">435-772-5277</a>
            </div>
            </Card.Text>    
    </Card.Body>
  </Card>

    <div className="contactTextMobile">Or message me through the social media outlets below!</div>

    <div className="footerflexMobile">
        <a className="icon facebookiconMobile" target="blank" href="https://www.facebook.com/malachi.alusa"></a>
          <a className="icon linkediniconMobile" target="blank" href="https://www.linkedin.com/in/malachi-alusa-a96439174/"></a>
          <a className="icon githubiconMobile" target="blank" href="https://github.com/tonganknight"></a>

        </div>

    </div>
    </Breakpoint>
    </div>
  //   <section>
  //   <div className="contactflex"> 
  //     <h1 className="contacttitle">Contact me</h1>
  //     <form id="contact-form" onSubmit={handleSubmit}>
  //     <div className="contactcenter">
  //       <label className="contactcenter texttoleft" htmlFor="name">Name:</label>
  //       <input className="contactcenter" type="text" defaultValue={name} onBlur={handleChange} name="name" />
  //   </div>
  //   <div className="contactcenter">
  //    <label className="contactcenter texttoleft" htmlFor="email">Email address:</label>
  //    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
  //   </div>
  //   <div className="contactcenter">
  //   <label className="contactcenter  texttoleft" htmlFor="message">Message:</label>
  //   <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
  //   </div>
  //   {errorMessage && (
  // <div>
  //   <p className="error-text">{errorMessage}</p>
  // </div>
  //   )}
  //   <div className="contactcenter">
  //   <button className="contactcenter contactbtn" type="submit">Submit</button>
  //   </div>
  //     </form>
  //     </div>
  //   </section>
)
}
export default Contact;