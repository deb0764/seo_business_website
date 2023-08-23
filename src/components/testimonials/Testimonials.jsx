import React from "react";
import "./testimonials.css";
import blank from "../../assets/img/customers/blank.png";
import customer1 from "../../assets/img/customers/test1.jpg";
import customer2 from "../../assets/img/customers/test2.jpg";
import customer3 from "../../assets/img/customers/test3.jpg";
import customer4 from "../../assets/img/customers/test4.jpg";
import customer5 from "../../assets/img/customers/test5.jfif";
import customer6 from "../../assets/img/customers/test6.jfif";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Testimonials = () => {
  const testimonialList = [
    {
      review:
        "Team AviNeek is VERY responsive and works very hard to deliver whatever you need. They are attentive to detail and allows you to make necessary changes. When there happen to be bugs, they are prompt in fixing them. My website is fully functional at this point and only needs small maintenance every few week (in terms of updated policies, changes so on. Best customer service I have experienced in a long time.",
      name: "Kushal Karmakar",
      image: customer4,
    },
    {
      review:
        "If you need to develop or design a multi functional application, AVINEEK IS YOUR ONE STOP SOLUTION! Does AMAZING work. Went above and beyond, listened to feedback and instruction extremely well. I was worried this was going to be a difficult project to pull off but Team AviNeek made the process SUPER EASY and Stress-free! I will definitely be using again. Thank you so much for the great work!",
      name: "Harsh Jaiswal",
      image: customer3,
    },
    {
      review:
        "I was nervous with a project of this complexity. They didn't question them whatsoever and was great and communicative throughout the whole process. Despite my requirements not being clear, they were quick to revise based on my feedback and did so without complaint! And rather than just handing me the project files when done, they made sure I had no issues installing them on my webserver. Truly wonderful!",
      name: "Gagan Gani",
      image: customer2,
    },
    {
      review:
        "Team AviNeek has impressed us yet again with his quick and high quality work! They take direction very well and he made all the changes we wanted and more! They are expedient in response as always, is truly incredible, and we will continue to work with them on any project we have. We highly recommend AviNeek Pvt Ltd to anyone considering building a website from scratch.",
      name: "Suparno Kanti Tikadar",
      image: customer1,
    },
    {
      review:
        "The team did a fantastic job on our project. Extremely professional and very willing to put in the work to develop a software that was exactly what our vision was. I would HIGHLY recommend them and will definitely use them again for my next project.",
      name: "Bhaskar Katragadda",
      image: customer6,
    },
    {
      review:
        "They did great work evaluating the code base and figuring out what needed to be done to keep the business moving. Thank and recommend this team for sure. Honest and great communication throughout the process. I'll be using them for more work in the future.",
      name: "Deepak Pandey",
      image: customer5,
    },
  ];
  return (
    <section id="testimonials">
      <h2>What Our Clients Saying</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialList.map((element, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <p className="client__review">{element.review}</p>
            <div className="client__avatar">
              <img src={element.image} alt="clients-review" />
            </div>
            <h4 className="client__name">{element.name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
