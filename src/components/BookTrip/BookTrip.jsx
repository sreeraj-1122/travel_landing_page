import Image from "next/image";
import "./book-trip.scss";
import section from "@/assets/selection1.png";
import taxi from "@/assets/taxi 1.png";
import building from "@/assets/building.png";
import bookimg from "@/assets/book.png";
import bookimg1 from "@/assets/book1.png";
import leafIcon from "@/assets/leaf.png";
import mapIcon from "@/assets/map.png";
import sendIcon from "@/assets/send .png";
import heartIcon from "@/assets/heart1.png";

const STEPS = [
  {
    id: "destination",
    icon: section,
    title: "Choose Destination",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    id: "payment",
    icon: building,
    title: "Make Payment",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    id: "airport",
    icon: taxi,
    title: "Reach Airport on Selected Date",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

export default function BookTrip() {
  return (
    <section className="book-trip" id="bookings">
      <div className="book-trip__inner">
        <div className="book-trip__content">
          <p className="book-trip__tagline">Easy and Fast</p>
          <h2 className="book-trip__title">
            Book Your Next Trip
            <br />
            in 3 Easy Steps
          </h2>

          <div className="book-trip__steps">
            {STEPS.map((step) => (
              <div
                key={step.id}
                className={`book-trip__step book-trip__step--${step.id}`}
              >
                <div className="book-trip__step-icon">
                  <Image
                    src={step.icon}
                    alt=""
                    width={47}
                    height={48}
                    unoptimized
                  />
                </div>
                <div className="book-trip__step-body">
                  <h3 className="book-trip__step-title">{step.title}</h3>
                  <p className="book-trip__step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="book-trip__visual" aria-hidden="true">
          <div className="book-trip__visual-glow" />

          <div className="book-trip__card-main">
            <div className="book-trip__card-img">
              <Image
                src={bookimg}
                alt="Trip to Greece"
                width={321}
                height={161}
                unoptimized
              />
            </div>
            <h3 className="book-trip__card-title">Trip To Greece</h3>
            <div className="book-trip__card-meta">
              <span>14-29 June</span>
              <span className="book-trip__card-divider" />
              <span>by Robbin joseph</span>
            </div>
            <div className="book-trip__card-actions">
              <div className="book-trip__circle">
                <Image src={leafIcon} alt="" width={16} height={16} />
              </div>
              <div className="book-trip__circle">
                <Image src={mapIcon} alt="" width={16} height={16} />
              </div>
              <div className="book-trip__circle">
                <Image src={sendIcon} alt="" width={16} height={16} />
              </div>
            </div>
            <div className="book-trip__card-footer">
              <div className="book-trip__card-footer-left">
                <Image src={building} alt="" width={16} height={16} />
                <span>24 people going</span>
              </div>
              <div className="book-trip__card-footer-right">
                <Image src={heartIcon} alt="" width={16} height={16} />
              </div>
            </div>

            <div className="book-trip__card-mini">
              <div className="book-trip__mini-avatar">
                <Image
                  src={bookimg1}
                  alt="Rome destination"
                  width={50}
                  height={50}
                  unoptimized
                />
              </div>
              <div className="book-trip__mini-info">
                <p className="book-trip__mini-title">Trip to Rome</p>
                <p className="book-trip__mini-status">Ongoing</p>
                <p className="book-trip__mini-progress-label">
                  <span>40%</span>
                  <span>completed</span>
                </p>
                <div className="book-trip__mini-bar">
                  <div className="book-trip__mini-bar-fill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
