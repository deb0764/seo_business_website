import React, { useState, useEffect } from "react";
import Services from "./components/services/Services";
import ReadyToTalk from "./components/readyToTalk/ReadyToTalk";
import Pricing from "./components/pricing/Pricing";
import Techstack from "./components/techstack/Techstack";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import WorkWithUs from "./components/workWithUs/WorkWithUs";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Home from "./components/Home/Home";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
const App = () => {
  const googleAnalyticsId = "G-7EXH5K8L4X";
  ReactGA.initialize(googleAnalyticsId);
  ReactGA.send({ hitType: "pageview", page: "/" });
  return (
    <>
      <Helmet>
        <title>Avineek - Best Web Service Company in India</title>
        <meta
          name="keywords"
          content="Best Web Development Company in India, Website Development Company in India, Web Design India, Web Design Companies India, Web Designing Company Near Me, Website Design India, Website Design Company in India, Web Design Company India, Web Development Company India, Website design company in India"
        />
        <link rel="canonical" href="https://www.avineek.com/" />
      </Helmet>
      <Nav path="home" />
      <Home />
      <Services content="service" />
      <Techstack />
      <Pricing />
      <WorkWithUs />
      <ReadyToTalk />
      <Testimonials />
      <Contact type="service" />
      <Footer path="home" />
    </>
  );
};

export default App;
