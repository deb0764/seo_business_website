import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import ServiceTemplate from "./ServiceTemplate";
import ReadyToTalk from "../readyToTalk/ReadyToTalk";
import Pricing from "../pricing/Pricing";
import { BiBookContent } from "react-icons/bi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdArrowUpward } from "react-icons/md";
import { MdOutlinePaid } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { Helmet } from "react-helmet";
const DigitalMarketing = () => {
  const serviceData = {
    title: "Digital Marketing",
    description: `Computerized promoting is an interest of the present online world as no online business can run without this method. We at Avineek are the Top Digital Marketing Company in India with best administrations including content promoting, web-based media, site planning, portable application publicizing and significantly more. With long stretches of involvement, we utilize quick developing advanced innovation to offer quality Digital Marketing Services. We ensure that our clients don't go up against any issue identified with this administration while connecting with us. Till today, our outcomes have been remarkable and conveyed on schedule and furthermore we have worked for assorted industry verticals. Our Digital Marketing Company comprises of capable, confirmed and experienced advertisers who are quick in their working and have the ability to deal with all parts of Digital work. We at Avineek make an honest effort to meet the client's desires and fulfillment in the field of promoting.`,
    src1: "https://assets9.lottiefiles.com/packages/lf20_RmBsp1fq3x.json",
    src2: "https://assets8.lottiefiles.com/packages/lf20_qVyybKaLrI.json",
    para: "Growing your business means building on your strengths to improve your Company's Presence with the prospective customers when they are in need of Products/ Services which you offer. Avineek, as the Digital Marketing Agency in India blends the flavors of Marketing and Technology at the right levels. With our innovative and creative ideas & solutions we help our Brands to leverage the power of Digital and unleash growth potential. Being one of the Top Digital Marketing Companies in Bangalore, our Services include:",
    list: [
      {
        icon: <AiOutlineSearch className="point-icon" />,
        point: "Search Engine Optimization",
      },
      {
        icon: <AiOutlineShareAlt className="point-icon" />,
        point: "Social Media Marketing",
      },
      {
        icon: <MdOutlinePaid className="point-icon" />,
        point: "Paid Advertisements",
      },
      {
        icon: <MdOutlinePeopleAlt className="point-icon" />,
        point: "Influencer Marketing",
      },
      {
        icon: <BiBookContent className="point-icon" />,
        point: "Content Marketing",
      },
      {
        icon: <MdArrowUpward className="point-icon" />,
        point: "Brand Building",
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>Best Digital Marketing Company - Avineek</title>
        <meta
          name="keywords"
          content="best digital marketing company in india, best digital marketing company in bangalore, best digital marketing company in delhi, best digital marketing company in mumbai, best digital marketing company in gurgaon, best digital marketing company in kolkata, best digital marketing company in chennai, best digital marketing company in pune, best digital marketing company in hyderabad"
        />
        <link
          rel="canonical"
          href="https://www.avineek.com/web-service/digital-marketing"
        />
      </Helmet>
      <Nav path="digital" />
      <ServiceTemplate data={serviceData} />
      <ReadyToTalk />
      <Pricing page="market" />
      <Footer path="digital" />
    </>
  );
};

export default DigitalMarketing;
