import React, {useState} from 'react'
import "../Styles/Contact.css";
import { send } from 'emailjs-com';
import "../Styles/Contact.css"

const Contact = () => {
  return (
      <div className={"contact"}>
          <h1>Contact</h1>
          <form>
              <input name="name" type="text" className="feedback-input" placeholder="Name"/>
              <input name="email" type="text" className="feedback-input" placeholder="Email"/>
              <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
              <input type="submit" value="SUBMIT" className={"submit"}/>
          </form>
      </div>
  );
}

export default Contact
