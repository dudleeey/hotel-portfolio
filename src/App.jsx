import React, { useState } from "react";
import veyraImage from "./assets/veyra-house.png";
import nomiaImage from "./assets/nomia-stay-chania.png";
import aetherionImage from "./assets/aetherion-bay-hotel.png";

const projects = [
  {
    title: "Veyra House",
    type: "Boutique Design Hotel",
    description:
      "An editorial-style boutique hotel website focused on atmosphere, storytelling, and premium brand identity.",
    demoLink: "https://veyra-house.vercel.app",
    tags: ["Boutique", "Editorial", "Brand-focused"],
    image: veyraImage,
  },
  {
    title: "Nomia Stay Chania",
    type: "Budget / Airbnb-Style Stay",
    description:
      "A practical, conversion-focused accommodation website with clear pricing, booking bar, and simple guest decision flow.",
    demoLink: "https://nomiastaychania.vercel.app",
    tags: ["Budget stay", "Booking-focused", "Practical UX"],
    image: nomiaImage,
  },
  {
    title: "Aetherion Bay Hotel",
    type: "Luxury Seaside Hotel",
    description:
      "A premium hotel website with elegant visuals, sea-view branding, room cards, gallery, and direct booking inquiry flow.",
    demoLink: "https://aetherion-bay-hotel.vercel.app",
    tags: ["Luxury", "Seaside", "Premium"],
    image: aetherionImage,
  },
];

const services = [
  {
    icon: "01",
    title: "Hotel landing pages",
    description:
      "High-impact one-page websites focused on clear offers and booking inquiries.",
  },
  {
    icon: "02",
    title: "Boutique hotel websites",
    description:
      "Premium multi-section websites that highlight atmosphere, rooms, and experience.",
  },
  {
    icon: "03",
    title: "Airbnb / apartment rental websites",
    description:
      "Clean websites for short-term rentals with practical content and guest trust signals.",
  },
  {
    icon: "04",
    title: "Booking inquiry forms",
    description:
      "Custom inquiry sections that make it simple for guests to send booking requests.",
  },
];

const processSteps = [
  "You send your hotel details",
  "I create a modern website draft",
  "We revise design and content",
  "You receive a live website ready to share",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <div className="site-shell">
      {/* Header / Navbar */}
      <header className="header">
        <div className="container nav-wrapper">
          <a href="#home" className="brand" onClick={closeMenu}>
            Roman
          </a>

          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#work" onClick={closeMenu}>
              Work
            </a>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
            <a href="#process" onClick={closeMenu}>
              Process
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
            <a href="#work" className="btn btn-small" onClick={closeMenu}>
              View Portfolio
            </a>
          </nav>
        </div>
      </header>

      <main id="home">
        {/* Hero section */}
        <section className="hero section">
          <div className="container hero-content">
            <p className="eyebrow">Roman - Hotel Website Portfolio</p>
            <h1>
              Hotel websites built to look premium and generate direct booking
              inquiries
            </h1>
            <p className="hero-subtext">
              Modern, responsive websites for hotels, guesthouses, boutique
              stays, and rental properties.
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
            <p className="trust-line">
              Responsive design · Booking-focused layout · Fast delivery
            </p>
          </div>
        </section>

        {/* Featured projects section */}
        <section id="work" className="section projects-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Featured Projects</p>
              <h2>Portfolio demos for hotels and accommodations</h2>
              <p>
                These three demos are built to showcase different hospitality
                positioning styles with clear conversion paths.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-placeholder">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="project-image"
                    />
                  </div>
                  <div className="project-content">
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                      >
                        Open Live Demo
                      </a>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services section */}
        <section id="services" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Services</p>
              <h2>What I can build</h2>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process section */}
        <section id="process" className="section process-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Process</p>
              <h2>Simple process for clients</h2>
            </div>
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article className="process-step" key={step}>
                  <span className="step-number">{index + 1}</span>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why work with me section */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Why Work With Me</p>
              <h2>Designed with hospitality in mind</h2>
              <p>
                I understand hotel presentation, guest expectations, room
                showcasing, trust-building, and direct booking flow. Every
                website is designed to support real guest decisions.
              </p>
            </div>
            <div className="highlights-grid">
              <div className="highlight-card">Clear guest journey</div>
              <div className="highlight-card">Mobile-first design</div>
              <div className="highlight-card">Direct booking focus</div>
            </div>
          </div>
        </section>

        {/* Call to action section */}
        <section className="section cta-section">
          <div className="container cta-box">
            <h2>Need a website for your hotel or rental property?</h2>
            <p>
              I can create a modern, responsive website tailored to your brand
              and guest type.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn">
                Contact Me
              </a>
              <a href="#work" className="btn btn-secondary">
                View Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="section">
          <div className="container contact-wrapper">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Start your project</h2>
              <p>
                Share your hotel or rental project details and I will help you
                plan the right website structure.
              </p>
              <p className="fiverr-note">
                You can also contact me through Fiverr.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="projectType">Project type</label>
              <input
                id="projectType"
                name="projectType"
                type="text"
                value={formData.projectType}
                onChange={handleInputChange}
                placeholder="Hotel site, boutique stay, apartment rental..."
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              />

              <button type="submit" className="btn">
                Submit
              </button>

              {isSubmitted && (
                <p className="form-success">
                  Thank you. Your message has been received.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div>
            <p className="footer-brand">Roman</p>
            <p>Hotel Website Portfolio</p>
          </div>
          <div className="footer-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-note">
            Demo projects are fictional and created for portfolio purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
