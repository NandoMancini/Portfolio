import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../Styles/Contact.css";

const Contact = () => {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7g0nj9f', 'template_cjlfu6k', form.current, 'Cgf26PWLfsl53jLAT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
      <div className={"contact"} data-aos="fade-down">
          <h1>Contact</h1>
          <form ref={form} onSubmit={sendEmail}>
              <div id={"form-header"}>
                  <h2 id={"form-title"}>Get in Touch!</h2>
                  <h3>If you wish to contact me, fill out the form below to contact me directly!</h3>
              </div>
              <input type="text" name={"from_name"} id={"from_name"} placeholder="Name"></input>
              <input type="email" name={"email"} id={"email"} placeholder="Email"></input>
              <input type={"text"} name={"phone"} id={"phone"} placeholder={"Phone Number"}></input>
              <textarea name={"message"} id={"message"} rows={4} placeholder="Message"></textarea>
              <button type="submit" value={"send"}>Send</button>
          </form>
      </div>
  );
}

export default Contact
