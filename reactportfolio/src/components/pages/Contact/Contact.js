import React from 'react';
import "./Contact.css"
import Form from "./Form/Form"
// import { Document, Page } from 'react-pdf';


function Contact(props) {
  return (
    <div className="contactMain container">
      <h1>Contact Me!</h1>
      <p>
        Please feel free to contact me for further information about my work.
      </p>
      <div className="contactSect">
        <div>
          <a href="mailto:l.annable@outlook.com" target="_blank" class="card-link btn" rel="noopener noreferrer"><i class="fa-solid fa-at"></i> Email me! </a>
        </div>
        <div>
          <a href="https://github.com/Leanne-Annable" target="_blank" class="card-link btn" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> My GitHub page!</a>
          </div>
        <div>
          <a href="https://www.linkedin.com/in/leanne-annable-382a41260/" target="_blank" class="card-link btn" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
        </div>
        <div>
          {/* Add PDF */}
        </div>
      </div>
      {/* Contact page:

Must include contact information:

Email address

Link to a PDF version of your CV

Link to your GitHub profile

Link to your LinkedIn page

Must have a contact form for handling events */}
      <Form />
    </div>
  );
}

export default Contact;
