import Image from "next/image";
import "./footer.scss";
import facebook from "@/assets/Facebook.png";
import instagram from "@/assets/instagram 1.png";
import twitter from "@/assets/twitter.png";
import google from "@/assets/google.png";
import appstore from "@/assets/apple.png";

const NAV_COLS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Mobile", href: "#mobile" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Help/FAQ", href: "#help" },
      { label: "Press", href: "#press" },
      { label: "Affiliates", href: "#affiliates" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Airline fees", href: "#airlinefees" },
      { label: "Airline", href: "#airline" },
      { label: "Low fare tips", href: "#lowfare" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__glow" aria-hidden="true" />

      <div className="footer__inner">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <span className="footer__brand-name">Jadoo.</span>
            <p className="footer__brand-desc">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map((col) => (
            <nav
              key={col.title}
              className="footer__nav"
              aria-label={`${col.title} links`}
            >
              <span className="footer__col-title">{col.title}</span>
              <ul className="footer__nav-list">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="footer__nav-link">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Discover + social */}
          <div className="footer__discover">
            <div className="footer__social">
              <a href="#facebook" className="footer__social-icon">
                <Image src={facebook} alt="Facebook" width={16} height={16} />
              </a>
              <a
                href="#instagram"
                className="footer__social-icon footer__social-icon--active"
              >
                <Image src={instagram} alt="Instagram" width={16} height={16} />
              </a>
              <a href="#twitter" className="footer__social-icon">
                <Image src={twitter} alt="Twitter" width={16} height={16} />
              </a>
            </div>
            <p className="footer__discover-title">Discover our app</p>
            <div className="footer__app-badges">
              <a href="#google-play" className="footer__app-badge">
                <Image src={google} alt="Google Play" width={100} height={35} />
              </a>
              <a href="#app-store" className="footer__app-badge">
                <Image src={appstore} alt="App Store" width={100} height={35} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">All rights reserved@jadoo.co</p>
        </div>
      </div>
    </footer>
  );
}
