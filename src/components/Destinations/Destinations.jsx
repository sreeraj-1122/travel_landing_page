import Image from "next/image";
import "./destinations.scss";
import spiral from "@/assets/dest4.png";
import dest1 from "@/assets/dest1.png";
import dest2 from "@/assets/dest2.png.png";
import dest3 from "@/assets/dest3.png";
import nav from "@/assets/Navigation.png";

const DESTINATIONS = [
  {
    id: "rome",
    name: "Rome, Italy",
    duration: "10 Days Trip",
    price: "$5,42k",
    img: dest1,
  },
  {
    id: "europe",
    name: "Full Europe",
    duration: "28 Days Trip",
    price: "$15k",
    img: dest2,
  },
  {
    id: "london",
    name: "London, UK",
    duration: "12 Days Trip",
    price: "$4.2k",
    img: dest3,
    isLast: true,
  },
];

export default function Destinations() {
  return (
    <section className="destinations" id="destinations">
      <div className="destinations__inner">
        <div className="destinations__header">
          <p className="destinations__tagline">Top Selling</p>
          <h2 className="destinations__title">Top Destinations</h2>
        </div>

        <div className="destinations__grid">
          {DESTINATIONS.map((d) => (
            <article
              key={d.id}
              className={`destinations__card${d.isLast ? " destinations__card--last" : ""}`}
            >
              <div className="destinations__card-img">
                <Image
                  src={d.img}
                  alt={d.name}
                  width={314}
                  height={457}
                  unoptimized
                />
              </div>
              <div className="destinations__card-info">
                <div className="destinations__card-row">
                  <h3 className="destinations__card-name">{d.name}</h3>
                  <span className="destinations__card-price">{d.price}</span>
                </div>
                <div className="destinations__card-meta">
                  <Image src={nav} alt="" width={20} height={20} />
                  <span className="destinations__card-duration">
                    {d.duration}
                  </span>
                </div>
              </div>
              {d.isLast && (
                <Image
                  src={spiral}
                  alt=""
                  aria-hidden="true"
                  className="destinations__spiral"
                  width={108}
                  height={108}
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
