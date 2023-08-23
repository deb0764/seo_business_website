import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import "./career.css";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import { Helmet } from "react-helmet";
const Career = () => {
  const heroData = {
    title: "Join Us",
    description: `To provide business focused on innovative solutions in the area of Web Development & Digital Marketing Services around the world and to become the most ethical company with top notch quality and services. Customer trust and on-time project delivery is our utmost priority. To us, success is directly proportional to the value we have added by solving our problems. Leveraging industry best practices and a highly professional team of experts, we aim to deliver world class innovative products and value for money to customers across the globe.`,
    src: "https://assets4.lottiefiles.com/private_files/lf30_llpflzsi.json",
  };
  return (
    <>
      <Helmet>
        <title>Career Opportunity - Avineek Web Service</title>
        <meta
          name="keywords"
          content="website developer, frontend developer, backend developer, full stack developer, web developer, hr manager, devops engineer, software developer, software engineer, android developer, tester, it support, digital marketer, business administrator, seo optimizer, influencer, career growth, student program, internship program, refer and earn program"
        />
        <link
          rel="canonical"
          href="https://www.avineek.com/career-opportunity"
        />
      </Helmet>
      <Nav path="career" />
      <Hero data={heroData} />
      <Services content="career" />
      <Contact type="career" />
      <Footer path="career" />
    </>
  );
};

export default Career;
