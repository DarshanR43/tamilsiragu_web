import { BookOpen, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Join the Club", href: "#join" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
    { name: "Resources", href: "#resources" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-brand">
              <BookOpen className="brand-icon" />
              <span className="brand-name">The Tamilsiragu</span>
            </div>
            <p className="footer-description">
              Where words come alive through passion, creativity, and the timeless beauty of literature. Join us in celebrating the art of storytelling.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Connect With Us</h3>
            <div className="contact-info">
              <Mail className="contact-icon" />
              <a href="mailto:tamilsiragu@college.edu" className="contact-link">
                tamilsiragu@college.edu
              </a>
            </div>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                  >
                    <Icon className="social-icon" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} The Tamilsiragu. All rights reserved.
            </p>
            <p className="footer-quote">
              "Books are a uniquely portable magic." — Stephen King
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}