import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import ServiceTemplate from "./ServiceTemplate";
import ReadyToTalk from "../readyToTalk/ReadyToTalk";
import Pricing from "../pricing/Pricing";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { AiOutlineCloudSync } from "react-icons/ai";
import { BsGlobeAmericas } from "react-icons/bs";
import { AiOutlineDatabase } from "react-icons/ai";
import { MdArrowUpward } from "react-icons/md";
import { MdOutlineFormatIndentIncrease } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { BsMenuApp } from "react-icons/bs";
import { Helmet } from "react-helmet";
const DeployHosting = () => {
  const serviceData = {
    title: "Deployment and Hosting",
    description: `Are you looking for the cost effective hosting services in India ? If yes, you are in the right spot.With a high experience, our devops team has successfully delivered intuitive cloud based servers that belong to different industries.Using the potential of the cloud servers, our developers execute difficult tasks with a few lines of codes, help you to launch your product faster in the market. Being in the top web service company in Bangalore, we provide flexible and fully featured web portals that are unique and bring success for your brand.Our devops team make sure your servers fast, secure, and scalable.Our comprehensive web services helped you to build secure and database-driven web-based applications. We offer long-term support with our clients.`,
    src1: "https://assets3.lottiefiles.com/private_files/lf30_51QyOY.json",
    src2: "https://assets6.lottiefiles.com/private_files/lf30_0wxjdpuu.json",
    para: "With your vision and our ideas, we can together build the most suited web server or cloud server. We provide the following services to suit all the deployment and hosting requirements of your company.",
    list: [
      {
        icon: <AiOutlineSafetyCertificate className="point-icon" />,
        point: "SSL Certificate",
      },
      {
        icon: <AiOutlineDatabase className="point-icon" />,
        point: "SSD Storage",
      },
      {
        icon: <AiOutlineCloudSync className="point-icon" />,
        point: "Cloud Server",
      },
      {
        icon: <BsGlobeAmericas className="point-icon" />,
        point: "Regional data center",
      },
      {
        icon: <MdArrowUpward className="point-icon" />,
        point: "99% Uptime",
      },
      {
        icon: <MdOutlineFormatIndentIncrease className="point-icon" />,
        point: "Scalable Server",
      },
      {
        icon: <BsCashCoin className="point-icon" />,
        point: "Cost Effective",
      },
      {
        icon: <BsMenuApp className="point-icon" />,
        point: "Real Time Monitoring",
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>Best Deployment and Hosting Company - Avineek</title>
        <meta
          name="keywords"
          content="best hosting company in india, best hosting company in bangalore, best hosting company in delhi, best hosting company in mumbai, best hosting company in gurgaon, best hosting company in kolkata, best hosting company in chennai, best hosting company in pune, best hosting company in hyderabad"
        />
        <link
          rel="canonical"
          href="https://www.avineek.com/web-service/deployment-and-hosting"
        />
      </Helmet>
      <Nav path="deploy" />
      <ServiceTemplate data={serviceData} />
      <ReadyToTalk />
      <Pricing page="host" />
      <Footer path="deploy" />
    </>
  );
};

export default DeployHosting;
