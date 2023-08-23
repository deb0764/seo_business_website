import React from "react";
import "./services.css";
import { useNavigate } from "react-router-dom";
import { FiCode } from "react-icons/fi";
import { AiOutlineDatabase } from "react-icons/ai";
import { MdManageHistory } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
const Services = (props) => {
  const navigate = useNavigate();
  const routeAction = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };
  const serviceList = [
    {
      title: "Web Development",
      body: `Quality is our top priority, we work closely with you to ensure that
            your website or web application not only meets but exceeds your
            expectations, helping you achieve your business goals.`,
      icon: <BsGlobe className="service__icon" />,
      url: "/web-service/web-development",
    },
    {
      title: "Android App Development",
      body: `We create fully functional android applications for all your needs.
            We have made complex android apps, react native apps & much more! We
            promise to deliver the best and bug-free applications.`,
      icon: <AiOutlineMobile className="service__icon" />,
      url: "/web-service/android-app-development",
    },
    {
      title: "Deployment and Hosting",
      body: `Our hosting plans offer different server locations and unlimited SSL
            security certificates to encrypt your user data. Never miss a
            customer with our 99.9% server uptime guarantee.`,
      icon: <AiOutlineDatabase className="service__icon" />,
      url: "/web-service/deployment-and-hosting",
    },
    {
      title: "Maintenance",
      body: `After going live we are providing the support and maintenance too.
            We believe in taking the technical and managerial worries away from
            our clients so they may solely focus on running a successful
            business.`,
      icon: <MdManageHistory className="service__icon" />,
      url: "/web-service/maintenance-sevice",
    },
    {
      title: "Digital Marketing",
      body: `We will generate more leads and improve your conversions through
            PPC, SMM, SEO and Campaign services. Build your online presence
            strong on Multiple Platforms like Facebook, Instagram, Twitter,
            Google, Youtube and Linkedin.`,
      icon: <BsPeople className="service__icon" />,
      url: "/web-service/digital-marketing",
    },
    {
      title: "Business Solution",
      body: `Our goal is to provide a business solution that will outperform your
            competitors. We provide scalable api services like email service,
            whatsapp business service and custom complex api service.`,
      icon: <FiCode className="service__icon" />,
      url: "/web-service/business-solution",
    },
  ];
  const careerList = [
    {
      title: "Internship Program",
      body: `We give two months In-house preparing on specialized areas and four months at customer side on practical spaces.`,
      icon: <FaUserGraduate className="service__icon" />,
    },
    {
      title: "Job Opportunity",
      body: `Give a boost to your career by joining our Avineek's team of top IT professionals and contribute to the digital success.`,
      icon: <BsPeopleFill className="service__icon" />,
    },
    {
      title: "Referal Program",
      body: `Know someone who needs our services? Get upto 20% commission for each new customer you bring us!`,
      icon: <FaShare className="service__icon" />,
    },
  ];
  return (
    <section id="services">
      <div className="container services__container">
        {props.content === "service" &&
          serviceList.map((ele, index) => (
            <article
              className="service"
              onClick={() => routeAction(ele.url)}
              key={index}
            >
              <div className="service__head">
                {ele.icon}
                <h4>{ele.title}</h4>
              </div>
              <p className="service__body">{ele.body}</p>
            </article>
          ))}
        {props.content === "career" &&
          careerList.map((ele, index) => (
            <article className="service" key={index}>
              <div className="service__head">
                {ele.icon}
                <h4>{ele.title}</h4>
              </div>
              <p className="service__body">{ele.body}</p>
            </article>
          ))}
      </div>
    </section>
  );
};

export default Services;
