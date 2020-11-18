import React from "react";
import Nav from "../components/Nav/Nav";
import { Container } from "../components/Grid";
import ContactInfo from "../components/Info/contactInfo";

function Contact() {
  return (
    <>
      <Nav />
      <Container style={{backgroundColor: "#778da9", borderRadius: "25px", height: "20rem"}}>
        <ContactInfo />
      </Container>
    </>
  )
}

export default Contact;