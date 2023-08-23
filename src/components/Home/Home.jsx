import React from "react";
import "./home.css";
import avineek from "../../assets/img/avineek.jpg";
import customer1 from "../../assets/img/customers/test1.jpg";
import customer2 from "../../assets/img/customers/test2.jpg";
import customer3 from "../../assets/img/customers/test3.jpg";
import customer4 from "../../assets/img/customers/test4.jpg";
import customer5 from "../../assets/img/customers/test5.jfif";
import customer6 from "../../assets/img/customers/test6.jfif";

const Home = () => {
  const routeToPricing = () => {
    window.location.href = "#pricing";
  };
  const routeToServices = () => {
    window.location.href = "#services";
  };
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <div className="hero-heading">
            <h1 className="heading-primary">
              Boost Your Business <br />
              With Our Affordable <br />
              Web Services
            </h1>
            <p className="hero-description">
              With our expertise in Website and App Design to seamless
              Development and impactful Marketing strategies, we provide
              end-to-end tech solutions that drive success for your business.
              Engage your audience with confidence and take the first step
              towards success.
            </p>
          </div>
          <div className="home-btn-group">
            <button onClick={routeToPricing} className="btn btn-primary">
              &nbsp; Get started &nbsp;
            </button>
            <button onClick={routeToServices} className="btn-outline">
              Know more &darr;
            </button>
          </div>
          <div className="delivered-cust">
            <div className="delivered-imgs">
              <img src={avineek} alt="avineek.com" />
              <img src={customer1} alt="avineek-client-1" />
              <img src={customer2} alt="avineek-client-2" />
              <img src={customer3} alt="avineek-client-3" />
              <img src={customer4} alt="avineek-client-4" />
              <img src={customer5} alt="avineek-client-5" />
              <img src={customer6} alt="avineek-client-6" />
            </div>
            <p className="delivered-text">
              <span>250+ </span>services accomplished last year!
            </p>
          </div>
        </div>

        <div className="hero-img-box">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_brcbawzc.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </section>
  );
};

export default Home;
