import React, { useState } from 'react';
import testImage from '../Asserts/Test.png';
import { Users } from 'lucide-react';

const TamilSiraguEvents = () => {
  const [events] = useState([
    { id: 1, title: "Tamil Literature Workshop", date: "Oct 15, 2024", description: "An interactive workshop exploring classical Tamil poetry.", participants: 45, image: testImage },
    { id: 2, title: "Cultural Dance Performance", date: "Sep 22, 2024", description: "Traditional Tamil dance performances showcasing Bharatanatyam.", participants: 60, image: testImage },
    { id: 3, title: "Language Day Celebration", date: "Aug 18, 2024", description: "Celebrating the richness of Tamil language with debates.", participants: 80, image: testImage },
    { id: 4, title: "Heritage Walk", date: "Jul 10, 2024", description: "Educational tour of historical Tamil temples.", participants: 35, image: testImage }
  ]);

  return (
    <div className="min-h-screen bg-[#FFF9EE] font-sans selection:bg-[#D4AF37] selection:text-[#5C1615]">
      
      {/* Maroon & Gold Hero Section */}
      <header className="bg-[#5C1615] text-[#FFF9EE] pt-32 pb-20 px-6 text-center relative overflow-hidden border-b-4 border-[#D4AF37]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-[#D4AF37]"></span>
            <p className="text-sm font-bold tracking-[0.4em] uppercase text-[#D4AF37] font-serif">நிகழ்வுகள்</p>
            <span className="w-12 h-px bg-[#D4AF37]"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-serif">
            Our Journey
          </h1>
          <p className="text-lg md:text-xl font-medium text-[#E8DCC4] max-w-2xl mx-auto leading-relaxed">
            A chronicle of our efforts to celebrate literature, culture, and compassion.
          </p>
        </div>
      </header>

      {/* Timeline Section */}
      <main className="max-w-6xl mx-auto px-6 py-24">
        
        {/* Timeline Wrapper */}
        <div className="relative">
          
          {/* Vertical Gold Line (Left on mobile, Center on desktop) */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37]/0 via-[#D4AF37]/40 to-[#D4AF37]/0 md:-translate-x-1/2"></div>

          {events.map((event, index) => (
            /* Flex Container: Alternates direction based on index */
            <div 
              key={event.id} 
              className={`relative flex items-center justify-between w-full mb-16 md:mb-24 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              
              {/* Desktop Spacer: Takes up the empty half of the row to push the card to the other side */}
              <div className="hidden md:block w-[calc(50%-3rem)]"></div>

              {/* Timeline Center Motif (❖) */}
              <div className="absolute left-[15px] md:left-1/2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#FFF9EE] flex items-center justify-center z-10 text-[#D4AF37] text-lg rounded-full border border-[#D4AF37] -translate-x-1/2 shadow-sm">
                ❖
              </div>

              {/* Content Card */}
              <div className="w-full pl-[45px] md:pl-0 md:w-[calc(50%-3rem)] group">
                <div className="bg-white rounded-xl overflow-hidden border border-[#E8DFD0] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(92,22,21,0.08)] hover:border-[#D4AF37]/60">
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4 bg-[#5C1615]/95 backdrop-blur text-[#D4AF37] text-xs font-bold tracking-[0.15em] px-4 py-1.5 rounded-sm border border-[#D4AF37]/30 uppercase font-serif">
                      {event.date}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif font-bold text-[#5C1615] mb-3">{event.title}</h3>
                    <p className="text-[#5C4535] mb-6 text-base leading-relaxed">{event.description}</p>
                    
                    <div className="flex items-center gap-3 text-sm font-bold text-[#3A2A20] border-t border-[#E8DFD0] pt-5 uppercase tracking-wider">
                      <Users className="w-4 h-4 text-[#D4AF37]" />
                      {event.participants} Participants
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TamilSiraguEvents;