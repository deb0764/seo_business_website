import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import WorkWithUs from "../workWithUs/WorkWithUs";
import Testimonials from "../testimonials/Testimonials";
import Hero from "../hero/Hero";
import { Helmet } from "react-helmet";
const About = () => {
  const heroData = {
    title: "About Us",
    description: `In the year 2020, while discussing With a innovative and multi talented group about the market condition and come to an observation that the online businesses are still running in traditional way and need up-gradation, and to server industries in much better way we started our journey.
    At an initial stage of Avineek Pvt Ltd, we offered Web Hosting Services, Custom Web Development Services, SEO Services, Servers Sales & Management and Domain Name Registration. Now, after 3+ years of experience on Custom Web Development Projects and Other Services. We are at a stage of Expertise where we are dealing with diverse clients and delivering beyond the level of their expectation on every client's varied and complex requirement.`,
    src: "https://assets7.lottiefiles.com/packages/lf20_5o8zf8kq.json",
  };
  return (
    <>
      <Helmet>
        <title>About - Avineek Web Service</title>
        <meta
          name="keywords"
          content="web design company in india, web development company in india, android app development companies in india, digital marketing agency in india, graphic design company in india, web service company in bangalore, website design company in delhi, digital marketing company in kolkata"
        />
        <link
          rel="canonical"
          href="https://www.avineek.com/best-web-service-company"
        />
      </Helmet>
      <Nav path="about" />
      <Hero data={heroData} />
      <WorkWithUs />
      <Testimonials />
      <Footer path="about" />
    </>
  );
};

export default About;
