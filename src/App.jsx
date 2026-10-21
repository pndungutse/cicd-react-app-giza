import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const tracks = [
  {
    icon: '🎨',
    title: 'Frontend',
    text: 'HTML, CSS, JavaScript and React. Build responsive, accessible interfaces people love to use.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    text: 'Design REST APIs, handle authentication and write server logic with Node.js and Express.',
    tags: ['Node.js', 'Express', 'REST', 'Auth'],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    text: 'Model data and query it efficiently with relational and document databases.',
    tags: ['SQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    icon: '🌿',
    title: 'Git & GitHub',
    text: 'Version your code, branch, open pull requests and collaborate like a professional team.',
    tags: ['Git', 'GitHub', 'Pull Requests'],
  },
  {
    icon: '🐳',
    title: 'Docker',
    text: 'Package applications into containers so they run the same everywhere.',
    tags: ['Images', 'Containers', 'Compose'],
  },
  {
    icon: '🚀',
    title: 'CI/CD & Deployment',
    text: 'Automate tests and releases with pipelines, then ship your apps to the cloud.',
    tags: ['GitHub Actions', 'Pipelines', 'Cloud'],
  },
];

const steps = [
  { number: '01', title: 'Learn', text: 'Short lessons that explain the why, not only the how.' },
  { number: '02', title: 'Build', text: 'Hands-on projects after every module to lock in your skills.' },
  { number: '03', title: 'Ship', text: 'Deploy real applications and grow a portfolio you can show.' },
];

const stats = [
  { value: '6', label: 'Learning tracks' },
  { value: '40+', label: 'Hands-on projects' },
  { value: '100%', label: 'Practical' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const links = ['Tracks', 'How it works', 'Contact'];

  return (
    <header className="giza-header sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <a className="navbar-brand giza-brand" href="#top">
          <span className="giza-logo">▲</span> GIZA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            {links.map((link) => (
              <li className="nav-item" key={link}>
                <a
                  className="nav-link"
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <a className="btn giza-btn-primary ms-lg-2 mt-2 mt-lg-0" href="#tracks">
                Start learning
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="giza-hero" id="top">
      <div className="container text-center">
        <span className="giza-pill">Full Stack Development School</span>
        <h1 className="giza-hero-title">
          Build the whole stack, <br className="d-none d-md-block" />
          <span className="giza-gradient-text">one layer at a time.</span>
        </h1>
        <p className="giza-hero-text">
          GIZA is where learners go from writing their first line of code to deploying
          production apps — frontend, backend, databases, Git, Docker and deployment.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <a className="btn btn-lg giza-btn-primary" href="#tracks">
            Explore the tracks
          </a>
          <a className="btn btn-lg giza-btn-outline" href="#how-it-works">
            How it works
          </a>
        </div>
        <div className="row justify-content-center mt-5 g-3">
          {stats.map((stat) => (
            <div className="col-4 col-md-2" key={stat.label}>
              <div className="giza-stat-value">{stat.value}</div>
              <div className="giza-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tracks() {
  return (
    <section className="giza-section" id="tracks">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="giza-section-title">What you will learn</h2>
          <p className="text-secondary">Every skill a modern full stack developer needs.</p>
        </div>
        <div className="row g-4">
          {tracks.map((track) => (
            <div className="col-md-6 col-lg-4" key={track.title}>
              <div className="card h-100 giza-card">
                <div className="card-body p-4">
                  <div className="giza-card-icon">{track.icon}</div>
                  <h3 className="h5 fw-bold mt-3">{track.title}</h3>
                  <p className="text-secondary">{track.text}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {track.tags.map((tag) => (
                      <span className="giza-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="giza-section giza-section-alt" id="how-it-works">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="giza-section-title">How it works</h2>
          <p className="text-secondary">A simple path from beginner to job-ready developer.</p>
        </div>
        <div className="row g-4">
          {steps.map((step) => (
            <div className="col-md-4" key={step.number}>
              <div className="giza-step">
                <div className="giza-step-number">{step.number}</div>
                <h3 className="h5 fw-bold">{step.title}</h3>
                <p className="text-secondary mb-0">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="giza-cta text-center mt-5">
          <h2 className="fw-bold">Ready to build your first full stack app?</h2>
          <p className="mb-4">Join GIZA and start learning by doing today.</p>
          <a className="btn btn-lg btn-light fw-semibold px-4" href="#contact">
            Join GIZA
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="giza-footer" id="contact">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <a className="giza-brand text-decoration-none" href="#top">
              <span className="giza-logo">▲</span> GIZA
            </a>
            <p className="mt-3 giza-footer-text">
              A place where learners master full stack development — from the browser to
              the server, the database and the cloud.
            </p>
          </div>
          <div className="col-6 col-lg-3">
            <h4 className="giza-footer-heading">Tracks</h4>
            <ul className="list-unstyled">
              {tracks.map((track) => (
                <li key={track.title}>
                  <a href="#tracks">{track.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 col-lg-4">
            <h4 className="giza-footer-heading">Contact</h4>
            <ul className="list-unstyled giza-footer-text">
              <li>hello@giza.dev</li>
              <li>Questions? We are happy to help.</li>
            </ul>
          </div>
        </div>
        <hr className="giza-footer-divider" />
        <p className="text-center giza-footer-text mb-0">
          © {year} GIZA. Learn. Build. Ship.
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Tracks />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
