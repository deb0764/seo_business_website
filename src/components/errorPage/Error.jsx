import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import "./error.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Avineek - Best Web Service Company in India</title>
        <meta
          name="keywords"
          content="Best Web Development Company in India, Website Development Company in India, Web Design India, Web Design Companies India, Web Designing Company Near Me, Website Design India, Website Design Company in India, Web Design Company India, Web Development Company India, Website design company in India"
        />
        <link rel="canonical" href="https://www.avineek.com/" />
      </Helmet>
      <Nav path="error" />
      <section className="common-error">
        <div className="error-section">
          <div className="error-details">
            <h1>Oops!</h1>
            <p>looks like we broke something</p>
            <p>why not try with our popular services</p>
            <div className="error-btn-group">
              <button className="btn btn-primary" onClick={() => navigate("/")}>
                Go To Home
              </button>
            </div>
          </div>

          <div className="error-image">
            <lottie-player
              src="https://assets5.lottiefiles.com/packages/lf20_ghfpce1h.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </section>
      <Footer path="error" />
    </>
  );
};

export default Error;
