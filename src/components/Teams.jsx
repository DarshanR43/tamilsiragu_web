import React from "react";
import { Mail, Instagram } from "lucide-react";

function SectionTitle({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center mb-16 text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className="w-8 h-px bg-[#D4AF37]"></span>
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#D4AF37] font-serif">{subtitle}</p>
        <span className="w-8 h-px bg-[#D4AF37]"></span>
      </div>
      <h2 className="font-serif text-4xl md:text-5xl text-[#5C1615] font-bold">{title}</h2>
    </div>
  );
}

function ProfileCard({ name, role, id, photo }) {
  return (
    <div className="group bg-white p-5 rounded-t-full rounded-b-xl border border-[#E8DFD0] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(92,22,21,0.12)] hover:border-[#D4AF37]/50 flex flex-col items-center text-center">
      {/* Arched Avatar */}
      <div className="w-full aspect-[4/5] rounded-t-full rounded-b-lg overflow-hidden mb-6 border-4 border-[#FFF9EE] outline outline-1 outline-[#E8DFD0] group-hover:outline-[#D4AF37] transition-all duration-300">
        <img
          src={photo || "https://via.placeholder.com/300x400"}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Info */}
      <h3 className="text-xl font-serif font-bold text-[#5C1615] mb-1">{name}</h3>
      <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-2">{role}</p>
      <p className="text-[#5C4535] text-xs font-medium mb-6">{id}</p>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center gap-2 opacity-50 mb-4 w-full">
        <span className="w-10 h-[1px] bg-[#D4AF37]"></span>
        <span className="text-[#D4AF37] text-xs">❖</span>
        <span className="w-10 h-[1px] bg-[#D4AF37]"></span>
      </div>

      {/* Socials */}
      <div className="flex gap-4 pb-2">
        <a href="#" className="w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#5C1615] hover:bg-[#5C1615] hover:text-[#FFF9EE] hover:border-[#5C1615] transition-all duration-300">
          <Instagram className="w-4 h-4" />
        </a>
        <a href="#" className="w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#5C1615] hover:bg-[#5C1615] hover:text-[#FFF9EE] hover:border-[#5C1615] transition-all duration-300">
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

function Teams() {
  const teachers = [
    { name: "Teacher A", role: "HOD", id: "TEA1001" },
    { name: "Teacher B", role: "Professor", id: "TEA1002" },
    { name: "Teacher C", role: "Mentor", id: "TEA1003" },
    { name: "Teacher D", role: "Coordinator", id: "TEA1004" },
  ];

  const students = [
    { name: "Student 1", role: "Developer", id: "CSE001" },
    { name: "Student 2", role: "Designer", id: "CSE002" },
    { name: "Student 3", role: "Editor", id: "CSE003" },
    { name: "Student 4", role: "UI/UX", id: "CSE004" },
    { name: "Student 5", role: "Backend", id: "CSE005" },
    { name: "Student 6", role: "Frontend", id: "CSE006" },
  ];

  return (
    <div className="bg-[#FFF9EE] min-h-screen pt-32 pb-24 px-6 md:px-12 selection:bg-[#D4AF37] selection:text-[#5C1615]">
      <div className="max-w-7xl mx-auto">
        
        {/* Teachers Section */}
        <div className="mb-24">
          <SectionTitle title="Our Mentors" subtitle="வழிகாட்டிகள்" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
            {teachers.map((t, idx) => (
              <ProfileCard key={idx} {...t} />
            ))}
          </div>
        </div>

        {/* Decorative Separator */}
        <div className="flex items-center justify-center gap-4 opacity-60 mb-24">
          <span className="w-32 h-[1px] bg-[#D4AF37]"></span>
          <span className="text-[#D4AF37] text-2xl">✧</span>
          <span className="w-32 h-[1px] bg-[#D4AF37]"></span>
        </div>

        {/* Students Section */}
        <div>
          <SectionTitle title="The Core Team" subtitle="நிர்வாகிகள்" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto px-4 md:px-0">
            {students.map((s, idx) => (
              <ProfileCard key={idx} {...s} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Teams;