import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import "../Styles/Contact.css";

const Contact = () => {
   const form = useRef();
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitStatus, setSubmitStatus] = useState(null);

   const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
   const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
   const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

   useEffect(() => {
       if (publicKey) {
           emailjs.init(publicKey);
       }
   }, [publicKey]);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!publicKey || !serviceId || !templateId) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Email service configuration is missing. Please contact me directly at fernandomancinidesousa@gmail.com' 
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId, 
        templateId, 
        form.current, 
        publicKey
      );
      
      setSubmitStatus({ type: 'success', message: 'Email sent successfully!' });
      form.current.reset();
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'There has been an error. Please contact me directly at fernandomancinidesousa@gmail.com' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section className="contact" id="contact" data-aos="fade-down">
          <h1>Contact</h1>
          <form ref={form} onSubmit={sendEmail} noValidate>
              <div id="form-header">
                  <h2 id="form-title">Get in Touch!</h2>
                  <h3>If you wish to contact me, fill out the form below to contact me directly!</h3>
              </div>
              <input 
                  type="text" 
                  name="from_name" 
                  id="from_name" 
                  placeholder="Name"
                  required
                  aria-label="Your name"
              />
              <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Email"
                  required
                  aria-label="Your email"
              />
              <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  placeholder="Phone Number (optional)"
                  aria-label="Your phone number"
              />
              <textarea 
                  name="message" 
                  id="message" 
                  rows={4} 
                  placeholder="Message"
                  required
                  aria-label="Your message"
              />
              {submitStatus && (
                  <div className={`submit-status ${submitStatus.type}`} role="alert">
                      {submitStatus.message}
                  </div>
              )}
              <button 
                  type="submit" 
                  disabled={isSubmitting}
                  aria-label="Send message"
              >
                  {isSubmitting ? 'Sending...' : 'Send'}
              </button>
          </form>
      </section>
  );
};

export default Contact
