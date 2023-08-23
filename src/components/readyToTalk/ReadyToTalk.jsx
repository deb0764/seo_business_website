import React from "react";
import "./readytotalk.css";
import { useNavigate } from "react-router-dom";
const ReadyToTalk = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    window.scrollTo(0, 0);
    navigate("/contact-us");
  };
  return (
    <section className="ready-to-talk">
      <h2>Still Confused ?</h2>
      <h4>Our team is here to answer your questions about services</h4>
      <div className="ready-to-talk__btn-group">
        <button
          className="btn btn-primary btn-ready-to-talk"
          onClick={routeChange}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ReadyToTalk;
