import React, { useState, useEffect } from "react";
import "./techstack.css";
import AngularImg from "../../assets/img/angular.png";
import CanvaImg from "../../assets/img/canva.png";
import CssImg from "../../assets/img/css.png";
import ExpressImg from "../../assets/img/express.png";
import FigmaImg from "../../assets/img/figma.png";
import HtmlImg from "../../assets/img/html.png";
import JavaImg from "../../assets/img/java.png";
import JavascriptImg from "../../assets/img/javascript.png";
import LoopbackImg from "../../assets/img/loopback.png";
import MongodbImg from "../../assets/img/mongodb.png";
import MysqlImg from "../../assets/img/mysql.png";
import NextImg from "../../assets/img/next.png";
import NodeImg from "../../assets/img/node.png";
import PhotoshopImg from "../../assets/img/photoshop.png";
import PhpImg from "../../assets/img/php.png";
import ReactImg from "../../assets/img/react.png";
import SpringImg from "../../assets/img/spring.png";
import TypescriptImg from "../../assets/img/typescript.png";
import VueImg from "../../assets/img/vue.png";
import BootstrapImg from "../../assets/img/bootstrap.png";
import MaterialImg from "../../assets/img/material.png";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Techstack = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const stacks = [
    {
      img: FigmaImg,
      tech: "Figma",
    },
    {
      img: CanvaImg,
      tech: "Canva",
    },
    {
      img: PhotoshopImg,
      tech: "Photoshop CC",
    },
    {
      img: HtmlImg,
      tech: "HTML",
    },
    {
      img: CssImg,
      tech: "CSS",
    },
    {
      img: BootstrapImg,
      tech: "Bootstrap",
    },
    {
      img: MaterialImg,
      tech: "Material UI",
    },
    {
      img: JavascriptImg,
      tech: "Javascript",
    },
    {
      img: ReactImg,
      tech: "React JS",
    },
    {
      img: AngularImg,
      tech: "Angular 2+",
    },
    {
      img: NextImg,
      tech: "Next JS",
    },
    {
      img: VueImg,
      tech: "Vue JS",
    },
    {
      img: NodeImg,
      tech: "Node JS",
    },
    {
      img: TypescriptImg,
      tech: "Typescript",
    },
    {
      img: ExpressImg,
      tech: "Express JS",
    },
    {
      img: LoopbackImg,
      tech: "Loopback",
    },
    {
      img: JavaImg,
      tech: "Java",
    },
    {
      img: SpringImg,
      tech: "Spring Boot",
    },
    {
      img: PhpImg,
      tech: "Php",
    },
    {
      img: MysqlImg,
      tech: "MySQL",
    },
    {
      img: MongodbImg,
      tech: "MongoDB",
    },
  ];
  return (
    <section id="techstack" className="techstack__container">
      <h2>Our Tech Stack</h2>

      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={1500}
        slidesPerView={
          width < 600 ? 2 : width < 1024 ? 3 : width < 1450 ? 5 : 7
        }
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {stacks.map((element, index) => (
          <SwiperSlide className="techstack" key={index}>
            <div className="tech__logo">
              <img src={element.img} alt={element.tech} />
            </div>
            <h4 className="tech__name">{element.tech}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Techstack;
