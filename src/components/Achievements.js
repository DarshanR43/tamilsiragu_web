import { Trophy, Award, BookOpen, Medal, Star, Calendar } from "lucide-react";
import "./Achievements.css";

export default function Achievements() {
  const achievements = [
    {
      year: "2025",
      icon: Trophy,
      items: [
        {
          title: "Saral ",
          date: "October 2022",
          description: "This is the first event that is been Conducted by Tamilsiragu which is been finaly renamed into the named Vasnantham   .",
          category: "Event based on the Tamil Literature ",
          image: "https://images.unsplash.com/photo-1706340674031-acaaf6e2144b?w=800&auto=format&fit=crop"
        },
        {
          title: "Agaram",
          date: "July 2022",
          description: "Acts as the medium between the Student and the literature club to get exposure to the various events and the chances on the collage ",
          category: "Event for the Junior students that are steping into the college life ",
          image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop"
        }
      ]
    },
    {
      year: "2024",
      icon: Award,
      items: [
        {
          title: "Best Tamil Literary Club Award",
          date: "December 2024",
          description: "Recognized as the Best Tamil Literary Club in the regional competition for our innovative programs and dedication to preserving Tamil culture.",
          category: "Recognition",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop"
        },
        {
          title: "Annual Tamil LitFest",
          date: "September 2024",
          description: "Organized a spectacular 3-day literary festival with 15+ renowned Tamil authors, poets, and 500+ attendees celebrating Tamil heritage.",
          category: "Event",
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop"
        },
        {
          title: "Tamil Creative Writing Workshop",
          date: "March 2024",
          description: "Conducted an inspiring 8-week workshop series with 100+ students, exploring Tamil poetry, fiction, and contemporary writing styles.",
          category: "Workshop",
          image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop"
        }
      ]
    },
    {
      year: "2023",
      icon: Medal,
      items: [
        {
          title: "Tamil Short Story Competition",
          date: "November 2023",
          description: "Club members swept the State Level Tamil Short Story Competition, winning first, second, and third positions with compelling narratives.",
          category: "Competition",
          image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop"
        },
        {
          title: "Tamil Books Community Initiative",
          date: "May 2023",
          description: "Made a lasting impact by donating 500+ Tamil books to local schools and establishing 3 community reading corners in underserved areas.",
          category: "Community Service",
          image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop"
        }
      ]
    },
    {
      year: "2022",
      icon: Star,
      items: [
        {
          title: "Inaugural Magazine Launch",
          date: "August 2022",
          description: "Published our first edition of 'Tamil Siragu Patrika', marking the beginning of our journey to celebrate and preserve Tamil literature.",
          category: "Milestone",
          image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop"
        }
      ]
    }
  ];

  const stats = [
    { icon: Trophy, label: "Awards Won", value: "15+" },
    { icon: BookOpen, label: "Magazines Published", value: "4" },
    { icon: Calendar, label: "Events Hosted", value: "30+" },
    { icon: Award, label: "Active Members", value: "150+" }
  ];

  return (
    <div className="achievements-page">
      <div className="achievements-container">
        
        <header className="achievements-header">
          <h1 className="achievements-title">Our Journey of Excellence</h1>
          <div className="title-underline"></div>
          <p className="achievements-subtitle">
            Every achievement tells a story of passion, dedication, and the timeless beauty of Tamil literature
          </p>
        </header>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-wrapper">
                <stat.icon className="stat-icon" />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          
          {achievements.map((yearGroup, yearIndex) => (
            <div key={yearGroup.year} className="timeline-year-section">
              
              <div className="year-badge-wrapper">
                <div className="year-badge">
                  <yearGroup.icon className="year-icon" />
                  <span className="year-text">{yearGroup.year}</span>
                </div>
              </div>

              <div className="achievements-grid">
                {yearGroup.items.map((achievement, index) => {
                  const isLeft = index % 2 === 0;
                  
                  return (
                    <div 
                      key={index} 
                      className={`achievement-card ${isLeft ? 'achievement-left' : 'achievement-right'}`}
                    >
                      <div className="achievement-content">
                        <div className="achievement-header">
                          <div className="achievement-category">
                            <yearGroup.icon className="category-icon" />
                            <span>{achievement.category}</span>
                          </div>
                          <div className="achievement-date">
                            <Calendar className="date-icon" />
                            <span>{achievement.date}</span>
                          </div>
                        </div>
                        
                        <h3 className="achievement-title">{achievement.title}</h3>
                        <p className="achievement-description">{achievement.description}</p>
                        
                        {achievement.image && (
                          <div className="achievement-image-wrapper">
                            <img 
                              src={achievement.image} 
                              alt={achievement.title}
                              className="achievement-image"
                              loading="lazy"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <Trophy className="cta-icon" />
            <h2 className="cta-title">Write Your Chapter in Our Story</h2>
            <p className="cta-description">
              Every great achievement starts with a single step. Join Tamilsiragu and be part of a community 
              that celebrates Tamil literature, nurtures creativity, and creates lasting memories.
            </p>
            <button className="cta-button">Become a Member</button>
          </div>
        </div>
      </div>
    </div>
  );
}