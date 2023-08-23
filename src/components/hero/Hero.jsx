import React from "react";
import "./hero.css";
const Hero = (props) => {
  return (
    <section className="common-hero">
      <div className="hero-section">
        <div className="hero-details">
          <h1>{props.data.title}</h1>
          <p>{props.data.description}</p>
        </div>

        <div className="hero-image">
          <lottie-player
            src={props.data.src}
            background="transparent"
            speed="1"
            loop
            autoplay
            mode="bounce"
          ></lottie-player>
        </div>
      </div>
    </section>
  );
};

export default Hero;
