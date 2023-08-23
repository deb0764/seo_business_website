import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import ServiceTemplate from "./ServiceTemplate";
import ReadyToTalk from "../readyToTalk/ReadyToTalk";
import Pricing from "../pricing/Pricing";
import { BiStoreAlt } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { AiOutlineDatabase } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineApi } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { BsMenuApp } from "react-icons/bs";
import { Helmet } from "react-helmet";
const WebDevelopment = () => {
  const serviceData = {
    title: "Web Development",
    description: `Web has emerged as one of the most important platforms today. Avineek Web Services is the best web development company in India and comes with some of the best web solutions for your business. This is your one stop solution for all your website design and development needs, with about 150 satisfied clients and a network that is ever growing, we offer you the best web developers in Bangalore, Delhi, Kokata and Gurgaon for your website design. Our team has years of experience in the industry of developing and designing complex website or web application for business, making us the best web development company in India. Our eCommerce experts provide you with quality services at the most pocket-friendly rates, to ensure that your business gets the platform it needs for its optimal growth. We make our sites using the most customer friendly technologies to ensure that your customers are as satisfied with you as ours are with us. Our expertise does not restrict itself to web development but includes a wide range of other services as well like mobile application development, deployment and hosting, maintenance, digital marketing, business solution etc.`,
    src1: "https://assets3.lottiefiles.com/private_files/lf30_51QyOY.json",
    src2: "https://assets6.lottiefiles.com/private_files/lf30_0wxjdpuu.json",
    para: "With your vision and our ideas, we can together create the most suited website or web application. We provide the following services to suit all the web development requirements of your company.",
    list: [
      {
        icon: <BiStoreAlt className="point-icon" />,
        point: "Online Store",
      },
      {
        icon: <FaReact className="point-icon" />,
        point: "Front-End Development",
      },
      {
        icon: <AiOutlineDatabase className="point-icon" />,
        point: "Back-End Development",
      },
      {
        icon: <AiOutlineAppstoreAdd className="point-icon" />,
        point: "Product Management",
      },
      {
        icon: <AiOutlineShoppingCart className="point-icon" />,
        point: "Custom eCommerce",
      },
      {
        icon: <AiOutlineApi className="point-icon" />,
        point: "Rest Api Integration",
      },
      {
        icon: <BsCashCoin className="point-icon" />,
        point: "Low Development Cost",
      },
      {
        icon: <BsMenuApp className="point-icon" />,
        point: "Real Time Apps",
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>Best Website Development Company - Avineek</title>
        <meta
          name="keywords"
          content="best website devlopment company in india, best website devlopment company in bangalore, best website devlopment company in delhi, best website devlopment company in mumbai, best website devlopment company in gurgaon, best website devlopment company in kolkata, best website devlopment company in chennai, best website devlopment company in pune, best website devlopment company in hyderabad"
        />
        <link
          rel="canonical"
          href="https://www.avineek.com/web-service/web-development"
        />
      </Helmet>
      <Nav path="web-development" />
      <ServiceTemplate data={serviceData} />
      <ReadyToTalk />
      <Pricing page="web" />
      <Footer path="web-development" />
    </>
  );
};

export default WebDevelopment;
