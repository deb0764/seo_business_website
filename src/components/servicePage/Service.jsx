import React from "react";
import "./service.css";
import Hero from "../hero/Hero";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Services from "../services/Services";
import { Helmet } from "react-helmet";
const Service = () => {
  const heroData = {
    title: "Services",
    description: `Building and scaling a business shouldn't be an undeniable irritation, and it doesn't have to cost a lot. With assistance from The Web Service Company, you will get a great custom application that will pull in clients to your association. Here's the means by which we do it.
    With our wide scope of experienced staff, we have realized what functions admirably and what doesn't. To guarantee that each undertaking is finished as effectively as could reasonably be expected, we have taken what we have realized throughout the long term and built up a three-venture measure. Each progression in our cycle is intended to assist us with envisioning and plan for almost any snag we could experience on a venture.`,
    src: "https://assets5.lottiefiles.com/packages/lf20_cyxxejlf.json",
  };
  return (
    <>
      <Helmet>
        <title>Best Web Service Company - Avineek</title>
        <meta
          name="keywords"
          content="best web service company in india, best web service company in bangalore, best web service company in delhi, best web service company in mumbai, best web service company in gurgaon, best web service company in kolkata, best web service company in chennai, best web service company in pune, best web service company in hyderabad"
        />
        <link rel="canonical" href="https://www.avineek.com/web-service" />
      </Helmet>
      <Nav path="service" />
      <Hero data={heroData} />
      <Services content="service" />
      <Footer path="service" />
    </>
  );
};

export default Service;
