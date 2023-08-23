import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import "./floating.css";
const Floating = () => {
  const contactWhatsapp = () => {
    window.open("https://wa.me/7996979669");
  };
  const contactNumber = () => {
    window.open("tel:+917996979669");
  };
  return (
    <div className="float-contact">
      <BiPhoneCall className="sticky-icon-phone" onClick={contactNumber} />
      <FaWhatsapp className="sticky-icon-whatsapp" onClick={contactWhatsapp} />
    </div>
  );
};

export default Floating;
