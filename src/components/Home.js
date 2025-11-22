import { Fragment } from 'react'

const navLinks = ['About Us', 'What We Do', 'Get Involved', 'News & Updates', 'Resources', 'Contact']

const eventCards = [
  {
    date: '10th Oct',
    title: 'Siragin Kanavu ’25',
    copy: 'This team supported schools in Pudhayur and Chinnampathy, improving infrastructure, providing essentials, and spreading smiles.',
  },
  {
    date: '4th Oct',
    title: 'Siragin Kanavu ’25 Alumni Reunion',
    copy: 'Join us to reconnect and relive the cherished memories of Tamil Siragu and Srishti on Oct 4, 2025.',
  },
  {
    date: '5th Nov',
    title: 'Siragin Kanavu ’24',
    copy: 'The donated JRC Uniform now worn with pride. We take this moment to thank everyone behind this.',
  },
]

const committees = ['Key committees', 'Hospitality', 'Resource Management', 'Finance', 'Documentation', 'Media']

const stats = [
  { label: 'Become A Volunteer', emphasized: false },
  { label: 'Over 2.5k Followers', emphasized: true },
  { label: 'Raised Over ₹3,00,000 To Support', emphasized: true },
  { label: 'Tamil Wing Of @Srishti_amrita', emphasized: false },
]

// Image paths - place your images in public/images/ folder
const galleryImages = [
  './images/Screenshot 2025-11-12 221831.jpg', // Outdoor scene with children playing
  './images/Screenshot 2025-11-12 215908.jpg', // Classroom scene with children and adults
  './images/Screenshot 2025-11-12 221516.jpg', // Four women against teal wall
]

const heroImage = './images/Screenshot 2025-11-12 174122.jpg' // Large group photo in front of green building
const magazineImage = './images/Screenshot 2025-11-12 183335.jpg' // Promotional poster
const busImage = './images/Screenshot 2025-11-12 182218.jpg' // Students in front of yellow bus

export default function App() {
  return (
    <div className="page-shell">
      <header className="hero" style={{ backgroundImage: `url("${heroImage}")`}}>
        <nav className="nav">
          <div className="logo">Siragu Alumni</div>
          <ul>
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button className="icon-button" aria-label="Search">
              <span className="material-symbols-rounded">search</span>
            </button>
            <button className="primary-button">Contribute</button>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Dream. Serve. Inspire Together</p>
          <h1>Siragu Alumni Association</h1>
          <p className="lead">
            With hearts united, we empower change—nurturing dreams and spreading hope. Every step, every smile, carries the legacy of Siragu forward. Join us in creating impact that lasts.
          </p>
          <div className="hero-cta">
            <button className="primary-button">Contribute Now</button>
          </div>
        </div>
      </header>
            
      <main>
        <section className="about">
          <div className="magazine-card">
            <img src={magazineImage} alt="Siragin Kanavu '25 promotional poster" />
            <div className="badge">Amrita Siragu</div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">About Us</p>
            <h2>Siragin Kanavu ’25</h2>
            <p>
              Old memories. New bonds. Endless dreams. Every year, Tamil Siragu brings together hearts that once shared the same classrooms—to walk once again beside young dreamers.
            </p>
            <button className="text-link">Read More</button>
          </div>
        </section>

        <section className="mission-grid">
          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>
              To inspire alumni, students, and well-wishers of Tamil Siragu and Amrita Vidyalayam to come together and make a meaningful difference in the lives of children from underprivileged schools—specifically Pudhuppathy and Chinnampathi—by improving infrastructure, providing essentials, and spreading joy through kindness.
            </p>
            <button className="text-link">Read More</button>
          </div>
          <div className="mission-side">
            <div className="side-card">
              <p>Take A Pledge!</p>
              <button className="ghost-button small">Support Us</button>
            </div>
            <div className="side-card">
              <p>Photos &amp; Videos</p>
              <button className="ghost-button small">Go to Gallery</button>
            </div>
          </div>
        </section>

        <section className="objectives">
          <div className="objective-card">
            <h3>Objectives &amp; Functions</h3>
            <p>
              Giving is not just about making a donation—it’s about making a difference. The event, Siragin Kanavu ’25, emphasizes that true giving is about compassion, not currency—every small act of kindness can create waves of positive change in the community.
            </p>
            <button className="text-link">Read More</button>
          </div>
          <div className="difference-card">
            <h3>How We’re Making A Difference</h3>
            <p>
              Every act of kindness takes flight as a step toward change. Through Siragin Kanavu, alumni and students focus on support blocks in rural communities, improving classrooms, providing learning essentials, and making hope feel within reach.
            </p>
            <p>
              Together, we’re not just helping—we’re inspiring the next generation to dream bigger, learn better, and lead with heart.
            </p>
            <p>
              We believe that true service begins with compassion, by rebuilding trust, uplifting dreams, and reconnecting long-distance memories into meaningful action.
            </p>
            <button className="ghost-button small">Learn More</button>
          </div>
        </section>

        <section className="gallery">
          {galleryImages.map((img, idx) => (
            <div key={img} className={`gallery-card ${idx === 1 ? 'raised' : ''}`}>
            <img src={img} alt={`Community gathering ${idx + 1}`} />
            </div>
          ))}
          <div className="gallery-card">
            <img src={busImage} alt="Students in front of yellow bus" />
          </div>
        </section>

        <section className="news">
          <div className="news-feature">
            <div className="news-date">10th Oct</div>
            <h3>Read About Us &amp; Events We’ve Organized</h3>
            <p>
              The Tamil Siragu alumni and students came together once again for Siragin Kanavu 2025. A dedicated team of 50 members efficiently divided into four key committees: Hospitality, Resource Management, Finance, and Documentation &amp; Media.
            </p>
            <button className="text-link">Read This</button>
          </div>
          <div className="news-list">
            {eventCards.map(({ date, title, copy }) => (
              <Fragment key={title}>
                <div className="news-item hoverable">
                  <div className="news-date small">{date}</div>
                  <div>
                    <p className="news-title">{title}</p>
                    <p className="news-copy">{copy}</p>
                  </div>
                </div>
                <div className="divider" />
              </Fragment>
            ))}
            <button className="ghost-button small full">More News</button>
          </div>
        </section>

        <section className="initiative">
          <h3>Siragin Kanavu ’25</h3>
          <p>a heartfelt initiative that transforms memories into compassion and purpose</p>
          <div className="chips">
            {committees.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </section>

        <section className="stat-bar">
          {stats.map(({ label, emphasized }) => (
            <div key={label} className={emphasized ? 'emphasized' : ''}>
              {label}
            </div>
          ))}
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="eyebrow">Contact Information</p>
          <p>Tamil Wing of @srishti_amrita</p>
          <p>Amrita Vishwa Vidyapeetham</p>
          <p>@coimbatore_campus</p>
        </div>
        <div>
          <p className="eyebrow">Quick Links</p>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">What We Do</a></li>
            <li><a href="#">Get Involved</a></li>
            <li><a href="#">News And Events</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">Connect With Us</p>
          <ul>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </footer>
      <div className="legal">Copyright 2025. All Rights Reserved by Tamil Siragu Amrita</div>
    </div>
  )
}
