import React from "react";
import ContactCSS from "./Contact.module.css";
import ContactimgMail from "../../assets/mail.png";
import ContactimgCall from "../../assets/phone.png";
import ContactimgLocation from "../../assets/location.png";

function Contact() {
  return (
    <div id="contact" className={ContactCSS.contact}>
      <div className={ContactCSS.contactTitle} >
        <h1>Contact me</h1>
      </div>

      <div className={ContactCSS.contactSection}>
      <div className={ContactCSS.contactSectionLeft}>
        <h1>Let's Connect:</h1>
        <p>
          I'm actively seeking new opportunities to contribute my skills and
          expertise to innovative projects. If you're looking for a front-end
          developer who is passionate about creating exceptional user
          experiences, I'd love to connect!
        </p>

        <div className={ContactCSS.contactDetails}>
        <div className={ContactCSS.contactDetail}>
          <img src={ContactimgMail} alt="" /> <p>jaikumarasokan96@gmail.com</p>
        </div>
        <div className={ContactCSS.contactDetail}>
          <img src={ContactimgCall} alt="" /> <p>9080530687</p>
        </div>
        <div className={ContactCSS.contactDetail}>
          <img src={ContactimgLocation} alt="" /> <p>Door no:5 Deepa illam,4th main 4th cross,Velachery Chennai </p>
        </div>
      </div>
      </div>
      
      

      <div className={ContactCSS.contactSectionRight}>
        <form action="">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Enter your name" name="name" />
        <label htmlFor="">Your Email</label>
        <input type="text" placeholder="Enter your email" name="email" />
        <label htmlFor="">Write your message here</label>
        <textarea name="message" placeholder="Write your message here..." rows="8" id=""></textarea>
        <button type="submit" className={ContactCSS.contactsubmit}>Submit</button>
        </form>
       

      </div>
      </div>
    </div>
  );
}

export default Contact;
