import Image from "next/image";
import "./services.scss";
import weather from "@/assets/satellite-dish.png";
import flight from "@/assets/catplane.png";
import mic from "@/assets/mic.png";
import settings from "@/assets/settings1.png";
import servicedot from "@/assets/plus1.png";

const CARDS = [
  {
    id: "weather",
    icon: { src: weather, w: 92, h: 78 },
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    id: "flights",
    icon: { src: flight, w: 167, h: 183 },
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    id: "events",
    icon: { src: mic, w: 40, h: 69 },
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
  },
  {
    id: "custom",
    icon: { src: settings, w: 77, h: 66 },
    title: "Customization",
    desc: "We deliver outsourced aviation services for military customers",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services__dots" aria-hidden="true">
        <Image src={servicedot} alt="" width={200} height={200} unoptimized />
      </div>

      <div className="services__inner">
        <div className="services__header">
          <p className="services__tagline">CATEGORY</p>
          <h2 className="services__title">We Offer Best Services</h2>
        </div>

        <div className="services__grid">
          {CARDS.map((card) => (
            <article
              key={card.id}
              className={`services__card services__card--${card.id}`}
            >
              <div className="services__card-icon">
                <Image
                  src={card.icon.src}
                  alt={card.title}
                  width={card.icon.w}
                  height={card.icon.h}
                  unoptimized
                />
              </div>
              <h3 className="services__card-title">{card.title}</h3>
              <p className="services__card-desc">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
