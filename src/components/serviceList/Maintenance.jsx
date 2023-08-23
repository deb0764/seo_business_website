import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import ServiceTemplate from "./ServiceTemplate";
import ReadyToTalk from "../readyToTalk/ReadyToTalk";
import Pricing from "../pricing/Pricing";
import { Helmet } from "react-helmet";
const Maintenance = () => {
  const serviceData = {
    title: "Maintenance",
    description: `In this advanced time where everybody is in a rush people settle on innovative answers for decline their work time. Upheld by straightforwardness and viable coordinated effort Avineek India is a major name in the business. At Avineek India We comprehend the estimation of your time and in this way we do a profound exploration in your business so we can give you the best advancement administrations in a particular time span. Presenting our devotion towards the Customers we give arrangements that are custom-made to get together your business objectives by most recent portable innovation/patterns. We have a group of maintenance who realizes how to utilize portable application so they can give you the best item and administrations with most recent innovation and patterns. Being a main web service organization in the capital city we will likely assistance the new businesses in building best maintained application that will end up being a rumored brand in the worldwide market of business.`,
    src1: "https://assets3.lottiefiles.com/packages/lf20_nviqbm9p.json",
    src2: "https://assets3.lottiefiles.com/packages/lf20_z8szrftm.json",
    para: "IT support comprises procedures intended to maintain failsafe IT workflows and reduce IT costs. Avineek IT support services are backed with 3 years of experience in help desk and application support and include IT help desk and software support to guarantee superior user experience and on-the-go improvement of your IT processes. Avineek team can take care of all your IT infrastructure components from daily monitoring and management to long-term continuous optimization and evolution.",
  };
  return (
    <>
      <Helmet>
        <title>Best Tech Support Company - Avineek</title>
        <meta
          name="keywords"
          content="best tech support company in india, best tech support company in bangalore, best tech support company in delhi, best tech support company in mumbai, best tech support company in gurgaon, best tech support company in kolkata, best tech support company in chennai, best tech support company in pune, best tech support company in hyderabad"
        />
        <link
          rel="canonical"
          href="https://www.avineek.com/web-service/maintenance-sevice"
        />
      </Helmet>
      <Nav path="maintain" />
      <ServiceTemplate data={serviceData} />
      <ReadyToTalk />
      <Pricing page="maintain" />
      <Footer path="maintain" />
    </>
  );
};

export default Maintenance;
