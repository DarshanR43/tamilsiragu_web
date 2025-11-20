import React, { useState } from 'react';
import './TamilSiragu.css';

// Adjust this path based on where this file is.
// If this file is in src/components, ../Asserts/Test.png is correct.
// If it is directly in src, use ./Asserts/Test.png.
import testImage from '../Asserts/Test.png';

const TamilSiraguEvents = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Tamil Literature Workshop",
      date: "October 15, 2024",
      description: "An interactive workshop exploring classical Tamil poetry and literature with renowned scholars.",
      participants: 45,
      image: testImage
    },
    {
      id: 2,
      title: "Cultural Dance Performance",
      date: "September 22, 2024",
      description: "Traditional Tamil dance performances showcasing the beauty of Bharatanatyam.",
      participants: 60,
      image: testImage
    },
    {
      id: 3,
      title: "Tamil Language Day Celebration",
      date: "August 18, 2024",
      description: "Celebrating the richness of Tamil language with debates, speeches, and cultural programs.",
      participants: 80,
      image: testImage
    },
    {
      id: 4,
      title: "Heritage Walk - Temples Tour",
      date: "July 10, 2024",
      description: "Educational tour of historical Tamil temples exploring ancient architecture and heritage.",
      participants: 35,
      image: testImage
    },
    {
      id: 5,
      title: "Traditional Music Concert",
      date: "June 5, 2024",
      description: "Carnatic music concert featuring renowned Tamil musicians and traditional instruments.",
      participants: 120,
      image: testImage
    },
    {
      id: 6,
      title: "Poetry Recitation Contest",
      date: "May 20, 2024",
      description: "Students competed in reciting classical and contemporary Tamil poetry with passion.",
      participants: 50,
      image: testImage
    }
  ]);

  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <div className="wing-left">✦</div>
            <h1 className="club-name">தமிழ் சிறகு</h1>
            <div className="wing-right">✦</div>
          </div>
          <p className="club-subtitle">Tamil Siragu</p>
          <p className="tagline">
            A journey of literary excellence, marked by dedication, creativity, and a passion for the world
          </p>
        </div>
      </header>

      <main className="main-content">
        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-number">6</div>
            <div className="stat-label">Events</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-number">390</div>
            <div className="stat-label">Total Participants</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📅</div>
            <div className="stat-number">2024</div>
            <div className="stat-label">Active Year</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-number">100%</div>
            <div className="stat-label">Success Rate</div>
          </div>
        </div>

        <section className="events-section">
          <div className="section-header">
            <h2 className="section-title">Our Achievements</h2>
            <div className="title-underline"></div>
          </div>

          <div className="events-timeline">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`event-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="event-card">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = testImage;
                    }}
                  />
                  <div className="event-content">
                    <div className="event-header">
                      <h3 className="event-title">{event.title}</h3>
                      <span className="event-date">{event.date}</span>
                    </div>
                    <p className="event-description">{event.description}</p>
                    <div className="event-footer">
                      <div className="participants">
                        <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        {event.participants} Participants
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-icon">🏆</div>
          <h2 className="quote-title">Be Part of Our Success Story</h2>
          <p className="quote-text">
            Join us in celebrating Tamil culture and heritage. Your participation helps us create history
            in the world of literature, dance and every field we touch at SVCE College.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TamilSiraguEvents;
