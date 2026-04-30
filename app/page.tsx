import Image from "next/image";
import Link from "next/link";

const categories = [
  "Business & Entrepreneurship",
  "Education & Academia",
  "Healthcare & Wellness",
  "Social Service & NGO",
  "Innovation & Technology",
  "Arts, Culture & Entertainment",
  "Women Achievers",
  "Youth Icons",
  "Leadership Excellence",
];

const strengths = [
  "National-level recognition",
  "Prestigious award platform",
  "Honoring real talent and unsung heroes",
  "Networking with influential personalities",
  "Media and public recognition",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="top-accent" />
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Celebrating excellence. Honoring true heroes.</p>
          <h1>Bharat Ke Anmol</h1>
          <p className="lede">
            A prestigious national award platform recognizing individuals who are making a real difference in society. From entrepreneurs to social leaders, from innovators to change-makers, we honor those who truly deserve to be called Bharat Ke Anmol.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/nominate">Nominate Now</Link>
            <Link className="button button-secondary" href="/partner">Become a Partner</Link>
          </div>
          <div className="stats">
            <div><strong>100+</strong><span>Honorees</span></div>
            <div><strong>All India</strong><span>Reach</span></div>
            <div><strong>Trusted</strong><span>Recognition</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <Image src="/media/NizamImage.jpg" alt="Dr. Mohammad Nizamuddin" fill priority className="founder-photo" />
          </div>
          <div className="floating-note">Founder: Dr. Mohammad Nizamuddin</div>
        </div>
      </section>

      <section className="info-band" id="about">
        <div className="section-heading">
          <p className="eyebrow">About Bharat Ke Anmol</p>
          <h2>Recognition built around dignity, impact, and national pride.</h2>
        </div>
        <p>
          Bharat Ke Anmol is one of India’s most respected award platforms, created to bring forward inspiring stories that often go unnoticed. The purpose is simple: identify people whose work strengthens society and give them the stage they deserve.
        </p>
      </section>

      <section className="grid-two" id="why">
        <div className="panel">
          <p className="eyebrow">Why Bharat Ke Anmol</p>
          <h3>Built to carry credibility, not just attention.</h3>
          <ul className="feature-list">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="panel panel-muted">
          <p className="eyebrow">Our Mission</p>
          <h3>To recognize outstanding individuals, inspire future generations, and connect achievers with leaders who can extend that impact.</h3>
        </div>
      </section>

      <section className="grid-two" id="founder">
        <div className="panel founder-panel">
          <Image src="/media/NizamImage.jpg" alt="Founder portrait" width={420} height={560} className="portrait" />
        </div>
        <div className="panel">
          <p className="eyebrow">About the Founder</p>
          <h3>Dr. Mohammad Nizamuddin</h3>
          <p>
            A visionary leader, social reformer, and the driving force behind Bharat Ke Anmol. His mission is to identify, honor, and inspire excellence across India through a platform that celebrates real contribution to society.
          </p>
        </div>
      </section>

      <section id="categories">
        <div className="section-heading">
          <p className="eyebrow">Award Categories</p>
          <h2>A broad set of categories to honor diverse forms of impact.</h2>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category}>
              {category}
            </article>
          ))}
        </div>
      </section>

      <section className="timeline">
        <div className="panel panel-accent">
          <p className="eyebrow">Our Legacy</p>
          <h3>Hundreds of achievers recognized across the nation.</h3>
          <p>Our events have become a symbol of credibility, inspiration, and celebration of true excellence.</p>
        </div>
        <div className="panel">
          <p className="eyebrow">Upcoming Event</p>
          <h3>New categories. Esteemed jury. High-profile guests. Grand recognition ceremony.</h3>
          <p>We are preparing the next edition to be bigger, sharper, and more impactful.</p>
        </div>
      </section>

      <section className="cta-band" id="forms">
        <div>
          <p className="eyebrow">Are you the next Bharat Ke Anmol?</p>
          <h2>Step forward. Share your story. Get recognized.</h2>
        </div>
        <div className="cta-actions">
          <Link className="button button-primary" href="/nominate">Nominate Now</Link>
          <Link className="button button-secondary" href="/partner">Partner With Us</Link>
        </div>
      </section>

      <footer className="site-footer">
        <p>Bharat Ke Anmol – Recognizing the real gems of India.</p>
      </footer>
    </main>
  );
}
