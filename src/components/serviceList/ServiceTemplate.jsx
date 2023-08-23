import React from "react";
import "./servicetemplate.css";
const ServiceTemplate = (props) => {
  return (
    <section className="common-template">
      <div className="template-section">
        <div className="template-details">
          <h1>{props.data.title}</h1>
          <p>{props.data.description}</p>
        </div>

        <div className="template-image">
          <lottie-player
            src={props.data.src1}
            background="transparent"
            speed="1"
            loop
            autoplay
            mode="bounce"
          ></lottie-player>
        </div>
      </div>
      <div className="template-section second-section">
        <div className="template-image">
          <lottie-player
            src={props.data.src2}
            background="transparent"
            speed="1"
            loop
            autoplay
            mode="bounce"
          ></lottie-player>
        </div>
        <div className="template-details">
          <p>{props.data.para}</p>
          <div className="template-cards">
            {props.data.list &&
              props.data.list.map((ele, index) => (
                <div className="point-card" key={index}>
                  {ele.icon}
                  <p>{ele.point}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTemplate;
