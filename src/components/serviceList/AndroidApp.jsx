import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import ServiceTemplate from "./ServiceTemplate";
import ReadyToTalk from "../readyToTalk/ReadyToTalk";
import Pricing from "../pricing/Pricing";
import { BsLaptop } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { AiOutlineDatabase } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineApi } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { BsMenuApp } from "react-icons/bs";
import { Helmet } from "react-helmet";
const AndroidApp = () => {
  const serviceData = {
    title: "Android App Development",
    description: `We as a whole realize android Phones are expanding exceptionally quick in this computerized time. These new innovation keen android telephones these days give you multipurpose, conceivable applications to support your image in the worldwide market of serious items. When building up a portable application, we precisely know how the future patterns of web and the overwhelming part of the web are impacting the new androids in the market. We being the Best Android App Development Company in India with a group of inventive originators, innovation sharp engineers, imaginative experienced task administrators and substance essayists we work to make an easy to use application which is secure, adaptable and quality code.`,
    src1: "https://assets1.lottiefiles.com/packages/lf20_dydyldzm.json",
    src2: "https://assets6.lottiefiles.com/packages/lf20_TNxYicZY9e.json",
    para: "With your vision and our ideas, we can together create the most suited android application. We provide the following services to suit all the custom app development requirements of your company.",
    list: [
      {
        icon: <FaReact className="point-icon" />,
        point: "React Native App",
      },
      {
        icon: <BsLaptop className="point-icon" />,
        point: "Cross-Platform App",
      },
      {
        icon: <AiOutlineDatabase className="point-icon" />,
        point: "Customized Ui/Ux",
      },
      {
        icon: <AiOutlineAppstoreAdd className="point-icon" />,
        point: "Product Management",
      },
      {
        icon: <AiOutlineShoppingCart className="point-icon" />,
        point: "E-Commerce Development",
      },
      {
        icon: <AiOutlineApi className="point-icon" />,
        point: "Server-Side APIs",
      },
      {
        icon: <BsCashCoin className="point-icon" />,
        point: "Low Development Cost",
      },
      {
        icon: <BsMenuApp className="point-icon" />,
        point: "Real Time Application",
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>Best Android App Development Company - Avineek</title>
        <meta
          name="keywords"
          content="best android app devlopment company in india, best android app devlopment company in bangalore, best android app devlopment company in delhi, best android app devlopment company in mumbai, best android app devlopment company in gurgaon, best android app devlopment company in kolkata, best android app devlopment company in chennai, best android app devlopment company in pune, best android app devlopment company in hyderabad"
        />
        <link
          rel="canonical"
          href="https://www.avineek.com/web-service/android-app-development"
        />
      </Helmet>
      <Nav path="android" />
      <ServiceTemplate data={serviceData} />
      <ReadyToTalk />
      <Pricing page="android" />
      <Footer path="android" />
    </>
  );
};

export default AndroidApp;
