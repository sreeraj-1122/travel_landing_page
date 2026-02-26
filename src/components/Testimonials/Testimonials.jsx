"use client";
import { useState } from "react";
import Image from "next/image";
import "./testimonials.scss";
import person from "@/assets/person.png";
import company1 from "@/assets/company1.png";
import company2 from "@/assets/company2.png";
import company3 from "@/assets/company3.png";
import company4 from "@/assets/company4.png";
import company5 from "@/assets/company5.png";

const TESTIMONIALS_DATA = [
  {
    text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    name: "Mike Taylor",
    role: "Lahore, Pakistan",
    avatar: person,
  },
  {
    text: "“Jadoo is my favorite travel agency. I book all my trips through them and I have never been disappointed. The service is top notch!”",
    name: "Chris Thomas",
    role: "CEO of Red Button",
    avatar: person,
  },
  {
    text: "“Incredible experience! From booking to the actual trip, everything was seamless. Highly recommend for anyone looking for adventure.”",
    name: "Sonia Sharma",
    role: "Frequent Traveler",
    avatar: person,
  },
];

const COMPANIES = [
  { src: company1, alt: "Company 1" },
  { src: company2, alt: "Company 2" },
  { src: company3, alt: "Company 3", active: true },
  { src: company4, alt: "Company 4" },
  { src: company5, alt: "Company 5" },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length,
    );
  };

  const current = TESTIMONIALS_DATA[activeIndex];
  const next = TESTIMONIALS_DATA[(activeIndex + 1) % TESTIMONIALS_DATA.length];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <p className="testimonials__tagline">TESTIMONIALS</p>
          <h2 className="testimonials__title">
            What People Say
            <br />
            about Us.
          </h2>
          <div
            className="testimonials__dots"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {TESTIMONIALS_DATA.map((_, index) => (
              <button
                key={index}
                className={`testimonials__dot ${index === activeIndex ? "testimonials__dot--active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Testimonial ${index + 1}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </div>

        <div className="testimonials__content">
          <div className="testimonials__cards">
            <article className="testimonials__card testimonials__card--back">
              <p className="testimonials__card-name">{next.name}</p>
              <p className="testimonials__card-role">{next.role}</p>
            </article>

            <article className="testimonials__card testimonials__card--front">
              <div className="testimonials__avatar">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  width={68}
                  height={68}
                />
              </div>
              <p className="testimonials__card-text">{current.text}</p>
              <p className="testimonials__card-name">{current.name}</p>
              <p className="testimonials__card-role">{current.role}</p>
            </article>
          </div>

          <div className="testimonials__nav">
            <button
              className="testimonials__nav-btn"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <span className="testimonials__nav-arrow" />
            </button>
            <button
              className="testimonials__nav-btn"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <span className="testimonials__nav-arrow testimonials__nav-arrow--down" />
            </button>
          </div>
        </div>
      </div>

      <div className="testimonials__companies">
        {COMPANIES.map((c) => (
          <div key={c.alt} className="testimonials__company">
            <Image src={c.src} alt={c.alt} width={120} height={60} />
          </div>
        ))}
      </div>
    </section>
  );
}
