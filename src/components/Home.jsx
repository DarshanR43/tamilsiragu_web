import React, { Fragment } from 'react';

const eventCards = [
  { date: '10th Oct', title: "Siragin Kanavu '25", copy: 'Supported schools in Pudhayur and Chinnampathy, improving infrastructure and spreading smiles.' },
  { date: '4th Oct', title: "Siragin Kanavu '25 Reunion", copy: 'Join us to reconnect and relive cherished memories of Tamil Siragu and Srishti.' },
  { date: '5th Nov', title: "Siragin Kanavu '24", copy: 'The donated JRC Uniform now worn with pride. We take this moment to thank everyone.' },
];

const committees = ['Key committees', 'Hospitality', 'Resource Management', 'Finance', 'Documentation', 'Media'];

const stats = [
  { label: 'Become A Volunteer', emphasized: false },
  { label: 'Over 2.5k Followers', emphasized: true },
  { label: 'Raised Over ₹3,00,000', emphasized: true },
  { label: 'Tamil Wing Of @Srishti', emphasized: false },
];

const galleryImages = [
  './images/Screenshot 2025-11-12 221831.jpg',
  './images/Screenshot 2025-11-12 215908.jpg',
  './images/Screenshot 2025-11-12 221516.jpg',
];

const magazineImage = './images/Screenshot 2025-11-12 183335.jpg';
const busImage = './images/Screenshot 2025-11-12 182218.jpg';

// FIX: Added { setCurrentPage } as a prop here
function Home({ setCurrentPage }) {
  return (
    <div className="min-h-screen flex flex-col text-[#3A2A20] bg-[#FFF9EE] font-sans pt-24 pb-12 selection:bg-[#D4AF37] selection:text-[#5C1615]">
      <main className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 md:gap-24">
        
        {/* Section 1: Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-t-full rounded-b-md overflow-hidden shadow-[0_15px_40px_rgba(92,22,21,0.2)] transition-all duration-500 h-[450px] md:h-[550px] group border-4 border-[#FFF9EE] outline outline-2 outline-[#D4AF37]">
            <img src={magazineImage} alt="Siragin Kanavu '25" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#5C1615]/95 backdrop-blur px-6 py-2 rounded-full text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase border border-[#D4AF37]/30">
              Amrita Siragu
            </div>
          </div>
          <div className="md:pl-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="w-8 h-px bg-[#D4AF37]"></span>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37] font-serif">எங்கள் பயணம்</p>
              <span className="w-8 h-px bg-[#D4AF37]"></span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-[#5C1615] mb-6 font-bold leading-tight">
              Siragin Kanavu &apos;25
            </h2>
            <p className="leading-relaxed text-[#5C4535] text-lg mb-8 font-medium">
              Old memories. New bonds. Endless dreams. Every year, Tamil Siragu brings together hearts that once shared the same classrooms—to walk once again beside young dreamers.
            </p>
            {/* FIX: Changed the onClick to use setCurrentPage */}
            <button 
              onClick={() => setCurrentPage && setCurrentPage("about")} 
              className="bg-[#5C1615] text-[#FFF9EE] border border-[#5C1615] px-8 py-3 rounded-sm font-serif tracking-widest uppercase text-sm hover:bg-transparent hover:text-[#5C1615] transition-all duration-300"
            >
              Read More
            </button>
          </div>
        </section>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 opacity-60">
          <span className="w-24 h-[1px] bg-[#D4AF37]"></span>
          <span className="text-[#D4AF37] text-xl">❖</span>
          <span className="w-24 h-[1px] bg-[#D4AF37]"></span>
        </div>

        {/* Section 2: Mission & Actions */}
        <section className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          <div className="bg-white p-10 md:p-14 rounded-xl border border-[#E8DFD0] shadow-sm transition-all duration-300 hover:shadow-[0_10px_30px_rgba(92,22,21,0.08)] group/mission">
            <h3 className="font-serif text-3xl text-[#5C1615] mb-6 border-b-2 border-[#D4AF37] inline-block pb-2">Our Mission</h3>
            <p className="text-[#5C4535] leading-relaxed mb-8 text-lg">
              To inspire alumni, students, and well-wishers of Tamil Siragu to come together and make a meaningful difference in the lives of children from underprivileged schools by improving infrastructure, providing essentials, and spreading joy.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {['Take A Pledge!', 'Photos & Videos'].map((title, i) => (
              <div key={title} className="bg-[#5C1615] rounded-xl p-8 text-center border border-[#4A1212] transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-center h-full group">
                <p className="mb-6 text-xl font-serif text-[#FFF9EE]">{title}</p>
                <button className="w-full border border-[#D4AF37] text-[#D4AF37] bg-transparent px-6 py-3 font-serif tracking-widest uppercase text-xs rounded-sm transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-[#5C1615]">
                  {i === 0 ? 'Support Us' : 'Go to Gallery'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Gallery (Arch Style) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={img} className={`relative rounded-t-full rounded-b-md overflow-hidden shadow-lg transition-all duration-500 cursor-pointer h-72 border-4 border-white ${idx === 1 || idx === 3 ? 'md:translate-y-6' : ''}`}>
              <img src={img} alt={`Community ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 hover:opacity-90" />
            </div>
          ))}
          <div className="relative rounded-t-full rounded-b-md overflow-hidden shadow-lg transition-all duration-500 cursor-pointer h-72 border-4 border-white md:translate-y-6">
            <img src={busImage} alt="Yellow bus" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 hover:opacity-90" />
          </div>
        </section>

        {/* Section 5: News & Events */}
        <section className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 mt-8">
          <div className="bg-[#F8F1E5] rounded-xl p-10 md:p-14 border border-[#D4AF37]/30 relative transition-all duration-300">
            <h3 className="font-serif text-3xl md:text-4xl text-[#5C1615] mb-6">
              Read About Us & Events
            </h3>
            <p className="text-[#5C4535] leading-relaxed mb-8 text-lg">
              The Tamil Siragu alumni and students came together once again for Siragin Kanavu 2025. A dedicated team efficiently divided into four key committees to execute our vision.
            </p>
            {/* FIX: Changed the onClick to use setCurrentPage */}
            <button 
              onClick={() => setCurrentPage && setCurrentPage("events")} 
              className="text-[#5C1615] font-bold border-b border-[#5C1615] pb-1 font-serif uppercase tracking-widest text-sm hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors"
            >
              Read This
            </button>
          </div>
          
          <div className="bg-white rounded-xl p-8 border border-[#E8DFD0] shadow-sm">
            <h4 className="font-serif text-2xl text-[#5C1615] mb-6 flex items-center gap-2">
              <span className="text-[#D4AF37]">❖</span> Recent Updates
            </h4>
            <div className="flex flex-col gap-4">
              {eventCards.map(({ date, title, copy }) => (
                <div key={title} className="flex gap-4 p-4 transition-all duration-300 hover:bg-[#FFF9EE] border-l-2 border-transparent hover:border-[#5C1615] rounded-r-lg">
                  <div className="text-[#5C1615] font-bold text-sm tracking-wider whitespace-nowrap font-serif mt-1">
                    {date}
                  </div>
                  <div>
                    <p className="font-bold text-[#3A2A20] mb-1">{title}</p>
                    <p className="text-[#5C4535] text-sm leading-relaxed">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 rounded-xl overflow-hidden border border-[#D4AF37]/40 shadow-sm mt-8">
          {stats.map(({ label, emphasized }, i) => (
            <div key={label} className={`p-8 text-center font-bold flex flex-col items-center justify-center transition-colors duration-300 min-h-[140px] ${
              emphasized 
                ? 'bg-[#5C1615] text-[#D4AF37]' 
                : 'bg-white text-[#5C1615]'
            } ${i !== 0 ? 'border-l border-[#D4AF37]/20' : ''}`}>
              <span className="text-2xl mb-2">{emphasized ? '❖' : '✧'}</span>
              <span className="text-sm uppercase tracking-widest font-serif leading-tight">{label}</span>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}

export default Home;