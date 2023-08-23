import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import ServiceTemplate from "./ServiceTemplate";
import ReadyToTalk from "../readyToTalk/ReadyToTalk";
import Pricing from "../pricing/Pricing";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdArrowUpward } from "react-icons/md";
import { MdAutorenew } from "react-icons/md";
import { MdPhonelink } from "react-icons/md";
import { Helmet } from "react-helmet";
const BusinessSolution = () => {
  const serviceData = {
    title: "Business Solution",
    description: `As a business solution provider, Avineek covers maximum space in offering Business Solutions in India. It helps your business or organization to find quick and quality growth in various sectors. Business solution companies are in plenty, and all are about numbers. PQube takes a different approach quality is our emphasis while providing IT solutions. Hence we serve only the best. We incorporate specific insights into business concepts and provide real-world ideas and integrations with rapid developments. It ensures our customers achieve over and above their desired business goals. We specialize in Software development services with your business needs at the forefront. From concept to deployment, Avineek has the experience providing custom business IT solutions to accelerate workflows, streamline operations, automate redundant processes and multiply revenues.`,
    src1: "https://assets1.lottiefiles.com/private_files/lf30_vdqxTM.json",
    src2: "https://assets3.lottiefiles.com/packages/lf20_cyxxejlf.json",
    para: "We specialize in creating custom and flexible business-process platforms to fit your company’s digital transformation journey. Using our Business Process Automation services, you will be able to adapt and/or port existing business processes to the ever-changing market or build efficient systems and processes from the ground up. Our team is composed of experienced business consultants, technology architects, and marketing experts trained and experienced in both legacy and new technologies. We build software applications that are scalable and enterprise ready to make your organization run seamlessly. Our Business process automation services arrive with below benefits:",
    list: [
      {
        icon: <AiOutlineFieldTime className="point-icon" />,
        point: "Save time and money",
      },
      {
        icon: <MdArrowUpward className="point-icon" />,
        point: "Enhances Accuracy",
      },
      {
        icon: <MdAutorenew className="point-icon" />,
        point: "Automated processes",
      },
      {
        icon: <MdPhonelink className="point-icon" />,
        point: "One Stop Solution",
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>Best Business Solution Company - Avineek</title>
        <meta
          name="keywords"
          content="best business solution company in india, best business solution company in bangalore, best business solution company in delhi, best business solution company in mumbai, best business solution company in gurgaon, best business solution company in kolkata, best business solution company in chennai, best business solution company in pune, best business solution company in hyderabad"
        />
        <link
          rel="canonical"
          href="https://www.avineek.com/web-service/business-solution"
        />
      </Helmet>
      <Nav path="business" />
      <ServiceTemplate data={serviceData} />
      <ReadyToTalk />
      <Pricing page="business" />
      <Footer path="business" />
    </>
  );
};

export default BusinessSolution;
