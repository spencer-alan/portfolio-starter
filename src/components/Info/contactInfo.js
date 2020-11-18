import React from "react";
import "./contactInfoStyle.css";
import profilePic from "../../images/profile_pic1_medium.jpg";

function contactInfo() {
  return (
    <>
      <h1 className="title">Contact</h1>
      <img src={profilePic} alt="Profile" />
      <br />
      <p>
        Thank you for your intrest in working with me!<br /> 
        There are several ways that you can reach me, including direct message on LinkdIn <a className="contact" href="https://www.linkedin.com/in/spencer-smith-7b68461a6/">here</a>,
        direct message on <a className="contact" href="https://twitter.com/b1acksmyth">twitter</a>, 
        or by emailing me at <a className="contact" href="mailto:smith.spence13@gmail.com">smith.spence13@gmail.com</a>. 
      </p>
    </>
  )
}

export default contactInfo;