import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import { Helmet } from "react-helmet";
const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Avineek Web Service</title>
        <meta
          name="keywords"
          content="contact avineek, contact avineek web services, contact avineek web services bangalore, contact avineek web services delhi, contact avineek web services kolkata, contact avineek web services gurgaon, contact avineek web services india"
        />
        <link rel="canonical" href="https://www.avineek.com/contact-us" />
      </Helmet>
      <Nav path="contact" />
      <Contact card="true" type="service" />
      <Footer path="contact" />
    </>
  );
};

export default ContactUs;
