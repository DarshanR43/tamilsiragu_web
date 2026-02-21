import { BookOpen, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer({ setCurrentPage }) {
  const currentYear = new Date().getFullYear();

  // Helper function to handle the link clicks
  const handleNavClick = (e, page) => {
    e.preventDefault(); // Prevents the default anchor jump
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
    }
  };

  // Define the links and their corresponding state values
  const footerLinks = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Teams', page: 'teams' },
    { name: 'Events', page: 'events' }
  ];

  return (
    <footer className="bg-[#2A0808] text-[#FFF9EE] pt-16 pb-8 mt-auto border-t-4 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#D4AF37]/20">

          {/* Brand & Quote */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 border border-[#D4AF37] rounded-full">
                <BookOpen className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <span className="font-serif text-3xl font-bold tracking-wider text-[#D4AF37]">தமிழ் சிறகு</span>
            </div>
            <p className="text-[#E8DCC4] text-sm leading-loose max-w-sm font-medium">
              ஆயிரம் ஆண்டுகள் கடந்தும் அழியாத மொழி தமிழ்,<br />
              அறிவிலும் அழகிலும் உலகை கவர்ந்த மொழி தமிழ்.<br />
              தமிழைப் பேசுவது பெருமை அல்ல—பெரும் பக்தி,<br />
              தலையை உயர்த்தச் செய்யும் எங்கள் தாய்மொழி தமிழ்.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-6 font-serif">Explore</h3>
            <ul className="space-y-4 text-center md:text-left">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={`#${link.page}`}
                    onClick={(e) => handleNavClick(e, link.page)}
                    className="text-[#E8DCC4] hover:text-[#D4AF37] transition-colors text-sm font-medium tracking-wide cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-6 font-serif">Connect</h3>
            <a href="mailto:tamilsiragu@gmail.com" className="flex items-center gap-3 text-[#E8DCC4] hover:text-[#D4AF37] transition-colors mb-8 text-sm font-medium tracking-wide">
              <Mail className="w-5 h-5" /> tamilsiragu@gmail.com
            </a>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-sm border border-[#D4AF37]/30 bg-[#5C1615]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2A0808] transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-[#E8DCC4]/60 text-sm tracking-wide">© {currentYear} Tamilsiragu. All rights reserved.</p>
          <p className="font-serif text-[#D4AF37] text-lg font-bold tracking-wide">
            யாதும் ஊரே யாவரும் கேளிர்
          </p>
        </div>
      </div>
    </footer>
  );
}