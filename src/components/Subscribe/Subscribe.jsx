"use client";
import Image from "next/image";
import "./subscribe.scss";
import share from "@/assets/share.png";
import subscribe from "@/assets/sub2.png";
import plusPattern from "@/assets/plus.png"; // use your real filename
export default function Subscribe() {
  return (
    <section className="subscribe" aria-label="Newsletter subscribe">
      <div className="subscribe__bg" aria-hidden="true">
        <Image
          src={subscribe}
          alt=""
          fill
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </div>
      <div className="subscribe__share">
        <Image src={share} alt="Share" width={70} height={70} priority />
      </div>
      <div className="subscribe__inner">
        <p className="subscribe__title">
          Subscribe to get information, latest news and other
          <br />
          interesting offers about Jadoo
        </p>

        <form className="subscribe__form" onSubmit={(e) => e.preventDefault()}>
          <div className="subscribe__input-wrap">
            <span className="subscribe__input-icon" aria-hidden="true">
              <svg viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.9 0H2.1C0.945 0 0.0105 0.9 0.0105 2L0 16C0 17.1 0.945 18 2.1 18H18.9C20.055 18 21 17.1 21 16V2C21 0.9 20.055 0 18.9 0ZM18.9 4L10.5 9L2.1 4V2L10.5 7L18.9 2V4Z" />
              </svg>
            </span>
            <input
              type="email"
              id="email-input"
              name="email"
              className="subscribe__input"
              placeholder="Your email address"
              required
              aria-label="Your email address"
            />
          </div>

          <button type="submit" className="subscribe__btn">
            Subscribe
          </button>
        </form>
      </div>
      <div className="subscribe__plus" aria-hidden="true">
        <Image src={plusPattern} alt="" width={180} height={180} unoptimized />
      </div>
    </section>
  );
}
