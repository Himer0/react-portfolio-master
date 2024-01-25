import React,  { useRef }from 'react'
import './Contact.css'
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
 
  const notify = () => toast("Wow so easy !");
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_nnumsqs","template_nlqzrsa",
          form.current,
          "L1nXwHkN6KpTJN_Uv"
        )
        .then(
          (result) => {
            <ToastContainer />
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

  return(
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        Minding a project?
      </h1>
      <button className="hire-me" style={{marginLeft:"20%"}}>
        <a href="mailto:xhomerzcarballo122079@gmail.com">Contact Me</a>
      </button>
      
      <p className="footer-text" style={{marginTop:"150px"}}>&copy; 2023 Hafiz Kadir</p>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Pizza</p>
        <p>Sleeping</p>
        <p>Not Sleeping</p>
      </div>
      <hr></hr>
      <div className="social-icons">
        <a href="https://github.com/Himer0" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCwg35jhluTCgLXjfTMQOyww"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-youtube" />
        </a>
      </div>

      <hr />
    </div>
  </div>
  )
}

export default Contact
