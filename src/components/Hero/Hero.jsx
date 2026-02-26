import Image from "next/image";
import Decore from "@/assets/Decore.png";
import Decore1 from "@/assets/Decore1.png";
import Traveller from "@/assets/Traveller.png";
import Plane from "@/assets/plane.png";
import "./hero.scss";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__glow-pink" aria-hidden="true" />
      <div className="hero__decore1-bg" aria-hidden="true">
        <Image src={Decore1} alt="" priority />
      </div>
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__tagline">BEST DESTINATIONS AROUND THE WORLD</p>

          <div className="hero__title-wrap">
            <h1 className="hero__title">
              Travel,{" "}
              <span className="hero__title-emphasize">
                enjoy
                <div className="hero__title-decore" aria-hidden="true">
                  <Image
                    src={Decore}
                    alt=""
                    width={385}
                    height={12}
                    unoptimized
                  />
                </div>
              </span>
              <br />
              and live a new
              <br />
              and full life
            </h1>
          </div>

          <p className="hero__desc">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <div className="hero__cta">
            <button className="hero__btn-primary" type="button">
              <span className="hero__btn-primary-bg" />
              <span className="hero__btn-primary-text">Find out more</span>
            </button>

            <div className="hero__play">
              <button
                className="hero__play-btn"
                type="button"
                aria-label="Play demo video"
              >
                <span className="hero__play-btn-icon" aria-hidden="true" />
              </button>
              <span className="hero__play-label">Play Demo</span>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__planes">
            <div className="hero__plane hero__plane--1">
              <Image src={Plane} alt="" width={146} height={104} />
            </div>
            <div className="hero__plane hero__plane--2">
              <Image src={Plane} alt="" width={146} height={104} />
            </div>
          </div>
          <div className="hero__image">
            <Image
              src={Traveller}
              alt="Traveler with luggage"
              fill
              priority
              className="hero__person"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
