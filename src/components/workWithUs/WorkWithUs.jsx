import React from "react";
import "./workwithus.css";
import { FiSettings } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { BsBoundingBox } from "react-icons/bs";
import { SiTrustpilot } from "react-icons/si";
const WorkWithUs = () => {
  return (
    <section id="workwithus">
      <h2>Why You Should Work With Us ?</h2>
      <p>
        Working with us means partnering with a reliable, experienced, and
        customer focused team that is committed to your success. Contact us
        today to discuss your requirements and discover how we can help you
        achieve your goals.
      </p>
      <div className="work-with-us__content">
        <article className="work-with-us__card">
          <FiSettings className="work-with-us__card-icon" />
          <div className="work-with-us__card-content">
            <h4>Comprehensive Services</h4>
            <p>
              We offer a wide range of services to meet all your business needs
              under one roof. From application design and development to
              deployment, maintenance to marketing, and beyond, we provide
              end-to-end solutions that save you time, effort, and resources.
            </p>
          </div>
        </article>
        <article className="work-with-us__card">
          <FiUsers className="work-with-us__card-icon" />
          <div className="work-with-us__card-content">
            <h4>Expertise and Experience</h4>
            <p>
              We have a team of highly skilled and experienced professionals who
              are experts in their respective fields. Our team brings a wealth
              of knowledge and expertise to every project, ensuring that you
              receive top-quality services and solutions.
            </p>
          </div>
        </article>
        <article className="work-with-us__card">
          <BsBoundingBox className="work-with-us__card-icon" />
          <div className="work-with-us__card-content">
            <h4>Cutting-Edge Technology</h4>
            <p>
              We stay up-to-date with latest trends and leverage cutting-edge
              technologies to deliver innovative and high-performing solutions.
              We use industry-leading tools and methodologies to ensure that our
              services are at the forefront of the industry.
            </p>
          </div>
        </article>
        <article className="work-with-us__card">
          <SiTrustpilot className="work-with-us__card-icon" />
          <div className="work-with-us__card-content">
            <h4>Reliability and Trustworthiness</h4>
            <p>
              We understand the importance of reliability and trust in a
              business relationship. We aim to deliver world class innovative
              products and value for money to customers across the globe.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default WorkWithUs;
