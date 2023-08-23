import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./pricing.css";
import { BiCheck } from "react-icons/bi";
const Pricing = (props) => {
  const navigate = useNavigate();
  const [isIndia, setIsIndia] = useState(false);
  const [tab, setTab] = useState(props.page ? props.page : "web");
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  useEffect(() => {
    if (
      zone &&
      (zone.toLowerCase().includes("calcutta") ||
        zone.toLowerCase().includes("kolkata"))
    ) {
      setIsIndia(true);
    }
  });
  const openWhatsapp = (text) => {
    window.open(`https://wa.me/+917996979669?text=${text}`, "_blank");
  };
  const changeActive = (tab) => {
    if (props.page && tab !== props.page) {
      window.scrollTo(0, 0);
      tab === "web"
        ? navigate("/web-service/web-development")
        : tab === "android"
        ? navigate("/web-service/android-app-development")
        : tab === "host"
        ? navigate("/web-service/deployment-and-hosting")
        : tab === "maintain"
        ? navigate("/web-service/maintenance-sevice")
        : tab === "market"
        ? navigate("/web-service/digital-marketing")
        : navigate("/web-service/business-solution");
    } else {
      setTab(tab);
    }
  };
  const webList = [
    {
      title: "Dynamic Website",
      inrPrice: "₹ 6499",
      usdPrice: "$ 79",
      specs: [
        "1 free domain ( .com / .in)",
        "All devices responsive",
        "Dynamic customized pages",
        "1 month free web hosting",
        "1 month free maintenance",
        "Other add-on services",
      ],
    },
    {
      title: "Custom Web App",
      inrPrice: "₹ 9999",
      usdPrice: "$ 119",
      specs: [
        "Dynamic plan benifits +",
        "Custom special functionality",
        "Admin control pannel",
        "Fully customized theme",
        "SEO ready web app",
        "Other add-on services",
      ],
    },
  ];
  const androidList = [
    {
      title: "Dynamic Application",
      inrPrice: "₹ 9999",
      usdPrice: "$ 149",
      specs: [
        "Free app submission",
        "Standard theme based",
        "Dynamic customized tabs",
        "1 operating system",
        "App icon, logo, content",
        "Other add-on services",
      ],
    },
    {
      title: "Custom Application",
      inrPrice: "₹ 19999",
      usdPrice: "$ 249",
      specs: [
        "Dynamic plan benifits +",
        "Admin web control pannel",
        "Fully customized theme",
        "Custom functionality",
        "Push Notifications",
        "Other add-on services",
      ],
    },
  ];
  const hostingList = [
    {
      title: "Standard Hosting",
      inrPrice: "₹ 999",
      usdPrice: "$ 12",
      specs: [
        "Free ssl certificate",
        "100 GB SSD storage",
        "Weekly backup support",
        "Free business email",
        "Avineek api support",
        "99% Uptime Guarantee",
      ],
    },
    {
      title: "Custom Hosting",
      inrPrice: "₹ 1499",
      usdPrice: "$ 19",
      specs: [
        "Standard plan benifits +",
        "Custom SSD Storage",
        "Daily backup support",
        "Cloud server hosting",
        "Choice of datacenter",
        "Database add-on",
      ],
    },
  ];
  const maintainList = [
    {
      title: "Standard Maintenance",
      inrPrice: "₹ 499",
      usdPrice: "$ 6.99",
      specs: [
        "Weekly bug checkup",
        "Version Control",
        "Content Updation",
        "Traffic load handling",
        "Feature Modification",
        "Other service add-on",
      ],
    },
    {
      title: "Custom Maintenance",
      inrPrice: "₹ 1499",
      usdPrice: "$ 19",
      specs: [
        "Standard plan benifits +",
        "Product scaling plan",
        "New feature add-on",
        "Backend service add-on",
        "App data handling",
        "Other service add-on",
      ],
    },
  ];
  const marketList = [
    {
      title: "Search Engine Optimization",
      inrPrice: "₹ 1499",
      usdPrice: "$ 20",
      specs: [
        "3 pages optimized",
        "Meta description",
        "Contetn optimization",
        "10 keywords research",
        "5 Revision available",
        "Other service add-on",
      ],
    },
    {
      title: "Social Media Marketing",
      inrPrice: "₹ 9999",
      usdPrice: "$ 120",
      specs: [
        "Search Engine Optimization",
        "Facebook Marketing",
        "Instagram Marketing",
        "Youtube Marketing",
        "Campaign analytics data",
        "Ongoing budget add-on",
      ],
    },
  ];
  const businessList = [
    {
      title: "Email Service",
      inrPrice: "₹ 499",
      usdPrice: "$ 7",
      specs: [
        "5 Professional mail",
        "Get lead at your mail",
        "Auto reply mail to customer",
        "Customized email template",
        "Bulk email generation",
        "Other service add-on",
      ],
    },
    {
      title: "WhatsApp Business Service",
      inrPrice: "₹ 499",
      usdPrice: "$ 7",
      specs: [
        "1000 free conversations per month",
        "Post 1000 Rs.0.8 per Conversation",
        "Auto Reply Chat automation",
        "Enable simpler faster responses",
        "Showcase products and services",
        "Other service add-on",
      ],
    },
  ];
  return (
    <section id="pricing" className="pricing__section">
      <h2>Pricing</h2>
      <h3>Premium features without premium price</h3>
      <div className="container pricing__container">
        <ul className="pricing-tabs">
          <li
            className={tab === "web" ? "active" : ""}
            onClick={() => changeActive("web")}
          >
            <p>Web Development</p>
          </li>
          <li
            className={tab === "android" ? "active" : ""}
            onClick={() => changeActive("android")}
          >
            <p>App Development</p>
          </li>
          <li
            className={tab === "host" ? "active" : ""}
            onClick={() => changeActive("host")}
          >
            <p>Hosting</p>
          </li>
          <li
            className={tab === "maintain" ? "active" : ""}
            onClick={() => changeActive("maintain")}
          >
            <p>Maintenance</p>
          </li>
          <li
            className={tab === "market" ? "active" : ""}
            onClick={() => changeActive("market")}
          >
            <p>Digital Marketing</p>
          </li>
          <li
            className={tab === "business" ? "active" : ""}
            onClick={() => changeActive("business")}
          >
            <p>Business Solution</p>
          </li>
        </ul>
        {tab === "web" &&
          webList.map((element, index) => {
            return (
              <article className="pricing" key={index}>
                <div className="pricing__head">
                  <h3>{element.title}</h3>
                </div>

                <div className="pricing__body">
                  <p> Starting at</p>
                  <p>
                    <span>
                      {isIndia === true ? element.inrPrice : element.usdPrice}
                    </span>
                  </p>
                </div>

                <ul className="pricing__list">
                  {element.specs.map((spec, specId) => {
                    return (
                      <li key={specId}>
                        <BiCheck className="pricing__list-icon" />
                        <p>{spec}</p>
                      </li>
                    );
                  })}
                </ul>

                <div className="pricing__bottom">
                  <button
                    onClick={() =>
                      openWhatsapp(
                        `Hi,%20I'm%20interested%20in%20web%20development%20services`
                      )
                    }
                    className="btn btn-primary pricing-btn"
                  >
                    Book Now
                  </button>
                </div>
              </article>
            );
          })}
        {tab === "android" &&
          androidList.map((element, index) => {
            return (
              <article className="pricing" key={index}>
                <div className="pricing__head">
                  <h3>{element.title}</h3>
                </div>

                <div className="pricing__body">
                  <p> Starting at</p>
                  <p>
                    <span>
                      {isIndia === true ? element.inrPrice : element.usdPrice}
                    </span>
                  </p>
                </div>

                <ul className="pricing__list">
                  {element.specs.map((spec, specId) => {
                    return (
                      <li key={specId}>
                        <BiCheck className="pricing__list-icon" />
                        <p>{spec}</p>
                      </li>
                    );
                  })}
                </ul>

                <div className="pricing__bottom">
                  <button
                    onClick={() =>
                      openWhatsapp(
                        `Hi,%20I'm%20interested%20in%android%20app%20development%20services`
                      )
                    }
                    className="btn btn-primary pricing-btn"
                  >
                    Book Now
                  </button>
                </div>
              </article>
            );
          })}
        {tab === "host" &&
          hostingList.map((element, index) => {
            return (
              <article className="pricing" key={index}>
                <div className="pricing__head">
                  <h3>{element.title}</h3>
                </div>

                <div className="pricing__body">
                  <p> Starting at</p>
                  <p>
                    <span>
                      {isIndia === true ? element.inrPrice : element.usdPrice}
                    </span>
                    /month
                  </p>
                </div>

                <ul className="pricing__list">
                  {element.specs.map((spec, specId) => {
                    return (
                      <li key={specId}>
                        <BiCheck className="pricing__list-icon" />
                        <p>{spec}</p>
                      </li>
                    );
                  })}
                </ul>

                <div className="pricing__bottom">
                  <button
                    onClick={() =>
                      openWhatsapp(
                        `Hi,%20I'm%20interested%20in%deployment%20and%hosting%20services`
                      )
                    }
                    className="btn btn-primary pricing-btn"
                  >
                    Book Now
                  </button>
                </div>
              </article>
            );
          })}
        {tab === "maintain" &&
          maintainList.map((element, index) => {
            return (
              <article className="pricing" key={index}>
                <div className="pricing__head">
                  <h3>{element.title}</h3>
                </div>

                <div className="pricing__body">
                  <p> Starting at</p>
                  <p>
                    <span>
                      {isIndia === true ? element.inrPrice : element.usdPrice}
                    </span>
                    /month
                  </p>
                </div>

                <ul className="pricing__list">
                  {element.specs.map((spec, specId) => {
                    return (
                      <li key={specId}>
                        <BiCheck className="pricing__list-icon" />
                        <p>{spec}</p>
                      </li>
                    );
                  })}
                </ul>

                <div className="pricing__bottom">
                  <button
                    onClick={() =>
                      openWhatsapp(
                        `Hi,%20I'm%20interested%20in%20maintenace%20services`
                      )
                    }
                    className="btn btn-primary pricing-btn"
                  >
                    Book Now
                  </button>
                </div>
              </article>
            );
          })}
        {tab === "market" &&
          marketList.map((element, index) => {
            return (
              <article className="pricing" key={index}>
                <div className="pricing__head">
                  <h3>{element.title}</h3>
                </div>

                <div className="pricing__body">
                  <p> Starting at</p>
                  <p>
                    <span>
                      {isIndia === true ? element.inrPrice : element.usdPrice}
                    </span>
                  </p>
                </div>

                <ul className="pricing__list">
                  {element.specs.map((spec, specId) => {
                    return (
                      <li key={specId}>
                        <BiCheck className="pricing__list-icon" />
                        <p>{spec}</p>
                      </li>
                    );
                  })}
                </ul>

                <div className="pricing__bottom">
                  <button
                    onClick={() =>
                      openWhatsapp(
                        `Hi,%20I'm%20interested%20in%20Digital%20Marketing%20services`
                      )
                    }
                    className="btn btn-primary pricing-btn"
                  >
                    Book Now
                  </button>
                </div>
              </article>
            );
          })}
        {tab === "business" &&
          businessList.map((element, index) => {
            return (
              <article className="pricing" key={index}>
                <div className="pricing__head">
                  <h3>{element.title}</h3>
                </div>

                <div className="pricing__body">
                  <p> Starting at</p>
                  <p>
                    <span>
                      {isIndia === true ? element.inrPrice : element.usdPrice}
                    </span>
                    /month
                  </p>
                </div>

                <ul className="pricing__list">
                  {element.specs.map((spec, specId) => {
                    return (
                      <li key={specId}>
                        <BiCheck className="pricing__list-icon" />
                        <p>{spec}</p>
                      </li>
                    );
                  })}
                </ul>

                <div className="pricing__bottom">
                  <button
                    onClick={() =>
                      openWhatsapp(
                        `Hi,%20I'm%20interested%20in%20Business%20Solution`
                      )
                    }
                    className="btn btn-primary pricing-btn"
                  >
                    Book Now
                  </button>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default Pricing;
