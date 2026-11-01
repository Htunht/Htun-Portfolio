import { FaReact, FaPython, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiExpo, SiTailwindcss, SiTypescript, SiExpress } from 'react-icons/si';

export default function TechTicker() {
  const skills = [
    { name: 'React Native', icon: <FaReact className="text-cyan-400 animate-[spin_8s_linear_infinite]" /> },
    { name: 'Expo', icon: <SiExpo className="text-violet-100" /> },
    { name: 'React.js', icon: <FaReact className="text-sky-400 animate-[spin_10s_linear_infinite]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-emerald-400" /> },
    { name: 'Express.js', icon: <SiExpress className="text-violet-100" /> },
    { name: 'Python', icon: <FaPython className="text-amber-300" /> },
    { name: 'PostgreSQL', icon: <FaDatabase className="text-sky-300" /> },
    { name: 'Git & GitHub', icon: <FaGitAlt className="text-orange-400" /> },
  ];

  // Infinite Loop လည်တဲ့အခါ အဆက်မပြတ်အောင် Array ကို နှစ်ဆပွားထားခြင်း
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="tech-ticker-surface relative w-full overflow-hidden py-14 md:py-16">
      
      {/* Keyframe Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Moving Conveyor Belt */}
      <div
        className="animate-marquee gap-5 px-3"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={index}
            className="tech-ticker-card group flex cursor-pointer items-center gap-3 rounded-2xl border px-5 py-2.5 transition-all duration-300"
          >
            <span className="text-xl group-hover:scale-125 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="tech-ticker-label whitespace-nowrap text-sm font-semibold transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
