import Image from "next/image";
import "./testimonials.scss";
import person from "@/assets/person.png";
import company1 from "@/assets/company1.png";
import company2 from "@/assets/company2.png";
import company3 from "@/assets/company3.png";
import company4 from "@/assets/company4.png";
import company5 from "@/assets/company5.png";

const COMPANIES = [
  { src: company1, alt: "Company 1" },
  { src: company2, alt: "Company 2" },
  { src: company3, alt: "Company 3", active: true },
  { src: company4, alt: "Company 4" },
  { src: company5, alt: "Company 5" },
];

export default function Testimonials() {
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
            <button
              className="testimonials__dot testimonials__dot--active"
              aria-label="Testimonial 1"
              aria-current="true"
            />
            <button className="testimonials__dot" aria-label="Testimonial 2" />
            <button className="testimonials__dot" aria-label="Testimonial 3" />
          </div>
        </div>

        <div className="testimonials__cards">
          <article className="testimonials__card testimonials__card--front">
            <div className="testimonials__avatar">
              <Image src={person} alt="Mike Taylor" width={68} height={68} />
            </div>
            <p className="testimonials__card-text">
              &ldquo;On the Windows talking painted pasture yet its express
              parties use. Sure last upon he same as knew next. Of believed or
              diverted no.&rdquo;
            </p>
            <p className="testimonials__card-name">Mike Taylor</p>
            <p className="testimonials__card-role">Lahore, Pakistan</p>
          </article>

          <article className="testimonials__card testimonials__card--back">
            <p className="testimonials__card-name">Chris Thomas</p>
            <p className="testimonials__card-role">CEO of Red Button</p>
          </article>
        </div>
      </div>

      <div className="testimonials__companies">
        {COMPANIES.map((c) => (
          <div
            key={c.alt}
            className="testimonials__company"
          >
            <Image src={c.src} alt={c.alt} width={120} height={60} />
          </div>
        ))}
      </div>
    </section>
  );
}
