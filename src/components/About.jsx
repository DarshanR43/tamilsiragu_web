import React from 'react';
import { BookOpen, Heart, Users, PenTool } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: "இலக்கியம் (Literature)",
      desc: "Celebrating the richness of classical and modern Tamil through Pattimandrams (debates), poetry recitations, and literary workshops that keep our ancient tongue thriving."
    },
    {
      icon: Users,
      title: "கலை (Culture & Arts)",
      desc: "Bringing the vibrant heritage of Tamil Nadu to the Amrita campus through traditional folk dances, Carnatic music, and festive celebrations."
    },
    {
      icon: Heart,
      title: "சமூக சேவை (Service)",
      desc: "Driven by the philosophy of 'Yadhum Oore Yaavarum Kelir', we engage in extensive social outreach, including our flagship 'Siragin Kanavu' initiative to uplift rural education."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF9EE] font-sans selection:bg-[#D4AF37] selection:text-[#5C1615]">
      
      {/* Maroon & Gold Hero Section */}
      <header className="bg-[#5C1615] text-[#FFF9EE] pt-32 pb-24 px-6 text-center relative overflow-hidden border-b-4 border-[#D4AF37]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-[#D4AF37]"></span>
            <p className="text-sm font-bold tracking-[0.4em] uppercase text-[#D4AF37] font-serif">நமது கதை</p>
            <span className="w-12 h-px bg-[#D4AF37]"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 font-serif leading-tight">
            The Soul of Tamil at <br className="hidden md:block" />
            <span className="text-[#D4AF37] italic font-light">Amrita University</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-[#E8DCC4] max-w-3xl mx-auto leading-relaxed">
            Tamil Siragu is more than a club; it is a cultural sanctuary at Amrita Vishwa Vidyapeetham, Coimbatore, where the timeless legacy of the Tamil language meets the vibrant energy of today's youth.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        
        {/* Main Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Arch Image Wrapper */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] rounded-t-full rounded-b-xl overflow-hidden border-4 border-white outline outline-2 outline-[#D4AF37]/40 shadow-2xl">
            {/* Using a placeholder, but you can replace this with a beautiful group photo of the club members */}
            <div className="absolute inset-0 bg-[#5C1615]/20 mix-blend-multiply z-10"></div>
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQShgIK6Yf2F28z4DA4jxAmpyW0ydc9tT4eg&s" 
              alt="Traditional Tamil Architecture or Club Members" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-5xl text-[#5C1615] mb-8 font-bold leading-tight">
              Rooted in Tradition,<br/> Rising with Purpose.
            </h2>
            <div className="space-y-6 text-[#5C4535] text-lg leading-relaxed font-medium">
              <p>
                Founded by passionate students at the lush green Ettimadai campus of Amrita Vishwa Vidyapeetham, <strong>Tamil Siragu (தமிழ் சிறகு)</strong> proudly operates as the dedicated Tamil wing of the esteemed <strong>Srishti Club</strong>. It was born out of a profound love for our mother tongue and a collective desire to preserve our rich heritage.
              </p>
              <p>
                As a vital branch of Srishti, we are a collective of dreamers, writers, orators, and artists. Our mission is to ensure that the beauty of Tamil literature and the vibrancy of our cultural arts echo through the university halls. From organizing grand Pattimandrams that spark intellectual fire to hosting cultural extravaganzas, we are the heartbeat of Tamil pride on campus.
              </p>
              <p>
                But our wings extend beyond celebrations. Through our flagship initiative, <strong>Siragin Kanavu</strong>, we channel our unity into community service, adopting underprivileged schools in rural areas like Pudhuppathy and Chinnampathi to rebuild their infrastructure and ignite the dreams of the next generation.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <PenTool className="w-10 h-10 text-[#D4AF37]" />
              <div>
                <p className="font-serif text-[#5C1615] text-x font-bold">"எப்பொருள் யார்யார்வாய்க் கேட்பினும் அப்பொருள் <br/> மெய்ப்பொருள் காண்ப தறிவு."</p>
                <p className="text-[#D4AF37] text-sm tracking-widest uppercase font-bold mt-1">Guided by Thirukkural</p>
              </div>
            </div>
          </div>
        </section>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 opacity-60 mb-32">
          <span className="w-32 h-[1px] bg-[#D4AF37]"></span>
          <span className="text-[#D4AF37] text-2xl">❖</span>
          <span className="w-32 h-[1px] bg-[#D4AF37]"></span>
        </div>

        {/* Pillars of the Club */}
        <section>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-[#5C1615] font-bold mb-4">Our Three Pillars</h2>
            <p className="text-[#5C4535] text-lg max-w-2xl mx-auto">The core philosophies that guide the wings of Tamil Siragu.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="group bg-white p-10 rounded-t-full rounded-b-2xl border border-[#E8DFD0] shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(92,22,21,0.12)] hover:border-[#D4AF37]/60 flex flex-col items-center text-center mt-12 md:mt-0">
                  
                  {/* Floating Icon Wrapper */}
                  <div className="w-20 h-20 rounded-full bg-[#FFF9EE] border border-[#D4AF37]/50 flex items-center justify-center -mt-20 mb-8 shadow-md group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-[#5C1615]" />
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#5C1615] mb-4">{pillar.title}</h3>
                  <div className="w-12 h-px bg-[#D4AF37] mb-6 opacity-50 group-hover:w-24 group-hover:opacity-100 transition-all duration-500"></div>
                  <p className="text-[#5C4535] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
};

export default About;