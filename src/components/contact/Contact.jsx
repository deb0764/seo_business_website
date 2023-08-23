import React, { useState } from "react";
import "./contact.css";
import ContactImg from "../../assets/img/contact.png";
import { GiIndianPalace } from "react-icons/gi";
import { GiIndiaGate } from "react-icons/gi";
import { GiTowerBridge } from "react-icons/gi";
import { GiByzantinTemple } from "react-icons/gi";
import { useRef } from "react";
import axios from "axios";
const Contact = (props) => {
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const form = useRef();
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regPhone = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

  const handleEmailChange = (event) => {
    if (event.target.value.match(regEmail)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };
  const handlePhoneChange = (event) => {
    if (event.target.value.match(regPhone)) {
      setValidPhone(true);
    } else {
      setValidPhone(false);
    }
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (validEmail && validPhone) {
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        phoneNumber: e.target.phone.value,
        service: e.target.service.value,
        message: e.target.message.value ? e.target.message.value : "",
        domain: "avineek",
      };
      setSuccess(true);
      axios.post("https://api.avineek.com/api/mail", data).then((res) => {
        e.target.reset();
        e.target.service.value = "";
        setIsError(false);
        setTimeout(() => {
          setSuccess(false);
        }, 1000);
      });
    } else {
      setIsError(true);
    }
  };
  const contactWhatsapp = () => {
    window.open("https://wa.me/7996979669", "_blank");
  };
  const contactMessenger = () => {
    window.open("https://m.me/100091331367572/", "_blank");
  };
  const contactEmail = () => {
    window.open("mailto:support@avineek.com", "_blank");
  };
  const serviceList = [
    "Web Development",
    "Android App Development",
    "Deployment and Hosting",
    "Maintenence Service",
    "Digital Marketing",
    "Business Solution",
  ];
  const careerList = [
    "Business Referal Agent",
    "Frontend Intern",
    "Backend Intern",
    "Android Intern",
    "Devops Intern",
    "Testing Intern",
    "Digital Marketing Intern",
    "Frontend Developer",
    "Backend Developer",
    "Android Developer",
    "Devops Engineer",
    "QA Tester",
    "Digital Marketer",
  ];
  return (
    <section id="contact">
      <h2>Get In Touch With Us</h2>

      <div className="container contact__container">
        <div className="contact__avatar">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_czryua0a.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            minLength="3"
            maxLength="30"
            name="name"
            placeholder="Full Name *"
            required
          />
          <div className="email-phone">
            <input
              onChange={handleEmailChange}
              type="email"
              name="email"
              placeholder="Email Address *"
              required
            />
            <input
              onChange={handlePhoneChange}
              type="text"
              name="phone"
              placeholder="Phone Number *"
              required
            />
          </div>
          <select name="service" required>
            <option value="" disabled selected>
              Choose A Service *
            </option>
            {props.type === "service" &&
              serviceList.map((ele, index) => (
                <option key={index} value={ele}>
                  {ele}
                </option>
              ))}
            {props.type === "career" &&
              careerList.map((ele, index) => (
                <option key={index} value={ele}>
                  {ele}
                </option>
              ))}
          </select>
          <textarea
            name="message"
            rows="7"
            maxLength="500"
            placeholder="How Can We Help You ?"
          ></textarea>
          <div className="contact__btn-group">
            <button
              type="submit"
              className={!isSuccess ? "btn btn-primary" : "btn btn-secondary"}
            >
              {!isSuccess ? "Send Message" : "Message Sent"}
            </button>
            <span
              className={isError ? "contact__error" : "contact__error hide"}
            >
              {!validEmail && !validPhone
                ? "Invalid Email and Number"
                : !validEmail && validPhone
                ? "Invalid Email"
                : !validPhone && validEmail
                ? "Invalid Phone Number"
                : ""}
            </span>
          </div>
        </form>
      </div>
      {props.card ? (
        <div className="contact__options">
          <article className="contact__option">
            <GiIndianPalace className="contact__option-icon" />
            <h3>Bangalore</h3>
            <p>Bannerghata Main Rd, J.P. Nagar, Bengaluru, Karnataka 560078</p>
            <p>support@avineek.com</p>
            <p>+(91) 79969 79669</p>
          </article>
          <article className="contact__option">
            <GiIndiaGate className="contact__option-icon" />
            <h3>Delhi</h3>
            <p>Avenue Bouganvillea, Rangpuri, New Delhi, Delhi 110037</p>
            <p>support@avineek.com</p>
            <p>+(91) 79969 79669</p>
          </article>
          <article className="contact__option">
            <GiTowerBridge className="contact__option-icon" />
            <h3>Kolkata</h3>
            <p>Railway Station Rd, New Garia, Kolkata, West Bengal 700094</p>
            <p>support@avineek.com</p>
            <p>+(91) 79969 79669</p>
          </article>
          <article className="contact__option">
            <GiByzantinTemple className="contact__option-icon" />
            <h3>Gurgaon</h3>
            <p>Dlf Cyber City Rd, Dlf Phase 3, Gurugram, Haryana 122002</p>
            <p>support@avineek.com</p>
            <p>+(91) 79969 79669</p>
          </article>
        </div>
      ) : null}
    </section>
  );
};

export default Contact;
