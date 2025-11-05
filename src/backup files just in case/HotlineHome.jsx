import React, { useState, useEffect } from 'react';
import { X, Github, ExternalLink, Mail, Facebook, Instagram } from 'lucide-react';

// Sample project data - you'll replace with your actual projects
const PROJECTS = [
  {
    id: 1,
    title: "Student DBMS",
    shortDesc: "Django + MySQL database system",
    longDesc: "A comprehensive student database management system built with Django and MySQL. Features include student registration, course enrollment, grade tracking, and attendance management. The system provides real-time data processing and secure authentication for administrators and students.",
    tags: ["Django", "MySQL", "Python", "Backend"],
    github: "https://github.com/vonzymon/student-dbms",
    liveUrl: "https://student-dbms.vercel.app",
    screenshots: [
      "https://placehold.co/800x500/C8102E/ffffff?text=Student+Dashboard",
      "https://placehold.co/800x500/ff4da6/000000?text=Registration+System",
      "https://placehold.co/800x500/8b3cff/ffffff?text=Grade+Tracking",
      "https://placehold.co/800x500/00d1ff/000000?text=Analytics+View",
      "https://placehold.co/800x500/C8102E/ffffff?text=Admin+Panel"
    ]
  },
  {
    id: 2,
    title: "Portfolio Site",
    shortDesc: "React + Tailwind with retro aesthetics",
    longDesc: "A retro-futuristic portfolio website inspired by Hotline Miami and 80s vaporwave aesthetics. Built with React and Tailwind CSS featuring neon effects, VHS overlays, CRT scanlines, and psychedelic color gradients. Demonstrates modern web technologies wrapped in nostalgic visual design.",
    tags: ["React", "Tailwind", "Frontend", "Design"],
    github: "https://github.com/vonzymon/portfolio",
    liveUrl: "https://vonzymon.vercel.app",
    screenshots: [
      "https://placehold.co/800x500/ff4da6/000000?text=Home+Screen",
      "https://placehold.co/800x500/8b3cff/ffffff?text=Project+Grid",
      "https://placehold.co/800x500/C8102E/ffffff?text=VHS+Effect+Toggle",
      "https://placehold.co/800x500/00d1ff/000000?text=Modal+Interactions",
      "https://placehold.co/800x500/ff4da6/000000?text=Responsive+Design"
    ]
  },
  {
    id: 3,
    title: "QueuePoint System",
    shortDesc: "Registrar queueing management app",
    longDesc: "A real-time queue management system designed for university registrar offices. Features include digital ticket generation, queue monitoring, SMS notifications, and analytics dashboard. Built to reduce waiting times and improve student services efficiency with a clean, intuitive interface.",
    tags: ["Node.js", "React", "MongoDB", "Fullstack"],
    github: "https://github.com/vonzymon/queuepoint",
    liveUrl: "https://queuepoint.vercel.app",
    screenshots: [
      "https://placehold.co/800x500/00d1ff/000000?text=Queue+Dashboard",
      "https://placehold.co/800x500/C8102E/ffffff?text=Ticket+Generation",
      "https://placehold.co/800x500/8b3cff/ffffff?text=Live+Status",
      "https://placehold.co/800x500/ff4da6/000000?text=Analytics",
      "https://placehold.co/800x500/00d1ff/000000?text=Admin+Controls"
    ]
  }
];

export default function HotlinePortfolio() {
  const [vhsOn, setVhsOn] = useState(true);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // VHS toggle with 'V' key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key.toLowerCase() === 'v') setVhsOn(prev => !prev);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // Reset slide when project changes
  useEffect(() => {
    if (projectOpen) setCurrentSlide(0);
  }, [projectOpen]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
    setContactOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Vaporwave Sunset Grid Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #0a0a0a 0%, #1a0520 25%, #2d1b3d 50%, #ff4da6 85%, #ffb347 100%)',
          }}
        />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, transparent 95%, rgba(255,77,166,0.4) 100%),
              linear-gradient(to bottom, transparent 0%, rgba(200,16,46,0.2) 50%, transparent 100%),
              repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,77,166,0.3) 49px, rgba(255,77,166,0.3) 50px),
              repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(139,60,255,0.2) 49px, rgba(139,60,255,0.2) 50px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 50px 50px, 50px 50px',
            transform: 'perspective(500px) rotateX(60deg) translateY(20%)',
            transformOrigin: 'center bottom',
            animation: 'gridPulse 8s ease-in-out infinite'
          }}
        />
      </div>

      {/* VHS Overlay */}
      {vhsOn && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
              animation: 'scanlines 8s linear infinite'
            }}
          />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 2%)',
              backgroundSize: '4px 4px',
              animation: 'noise 0.5s steps(10) infinite'
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(200,16,46,0.15) 2%, transparent 3%, rgba(255,77,166,0.1) 50%, transparent 51%, rgba(139,60,255,0.15) 98%, transparent 100%)',
              animation: 'vhsTracking 10s linear infinite'
            }}
          />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              boxShadow: 'inset 0 0 150px rgba(200,16,46,0.3), inset 0 0 80px rgba(255,77,166,0.2), inset 0 0 40px rgba(139,60,255,0.2)'
            }}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 
            className="text-6xl md:text-8xl font-bold mb-4 glitch-text"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              color: '#ff4da6',
              textShadow: '0 0 10px #C8102E, 0 0 20px #C8102E, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 2px 2px 0 #00d1ff, -2px -2px 0 #8b3cff',
              letterSpacing: '0.1em',
              animation: 'glitchText 3s infinite'
            }}
          >
            VON ZYMON'S
          </h1>
          <h2 
            className="text-3xl md:text-5xl font-bold"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              color: '#00d1ff',
              textShadow: '0 0 10px #00d1ff, 0 0 20px #8b3cff, 2px 2px 0 #C8102E',
              letterSpacing: '0.1em'
            }}
          >
            WEB PORTFOLIO
          </h2>
          <div className="mt-4 text-sm" style={{ fontFamily: "'VT323', monospace", color: '#ff4da6' }}>
            [ PRESS V TO TOGGLE VHS MODE ]
          </div>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mb-12">
          {/* Profile/About Button */}
          <button
            onClick={() => setAboutOpen(true)}
            className="group relative aspect-square border-4 overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              borderColor: '#C8102E',
              background: 'rgba(0,0,0,0.8)',
              boxShadow: '0 0 20px rgba(200,16,46,0.6), inset 0 0 20px rgba(255,77,166,0.2)'
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div 
                className="w-24 h-24 mb-4 border-4 overflow-hidden"
                style={{
                  borderColor: '#ff4da6',
                  imageRendering: 'pixelated',
                  boxShadow: '0 0 15px #ff4da6'
                }}
              >
                <img 
                  src="https://placehold.co/200x200/C8102E/ffffff?text=PROFILE" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{ imageRendering: 'pixelated' }}
                />
              </div>
              <div 
                className="text-xl font-bold text-center"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  color: '#ff4da6',
                  textShadow: '0 0 10px #ff4da6'
                }}
              >
                ABOUT
              </div>
              <div style={{ fontFamily: "'VT323', monospace", color: '#C8102E', fontSize: '14px' }}>
                [CLICK ME!]
              </div>
            </div>
          </button>

          {/* Project Cards */}
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              onClick={() => setProjectOpen(project)}
              className="group relative aspect-square border-4 overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                borderColor: '#ff4da6',
                background: 'rgba(0,0,0,0.8)',
                boxShadow: '0 0 20px rgba(255,77,166,0.5), inset 0 0 20px rgba(139,60,255,0.2)'
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div 
                  className="text-lg font-bold text-center mb-2"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    color: '#00d1ff',
                    textShadow: '0 0 10px #00d1ff',
                    fontSize: '14px'
                  }}
                >
                  {project.title}
                </div>
                <div 
                  className="text-xs text-center mb-3"
                  style={{ fontFamily: "'VT323', monospace", color: '#8b3cff' }}
                >
                  {project.shortDesc}
                </div>
                <div 
                  className="flex flex-wrap gap-1 justify-center"
                >
                  {project.tags.slice(0, 3).map(tag => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1"
                      style={{
                        fontFamily: "'Press Start 2P', monospace",
                        background: '#C8102E',
                        color: 'white',
                        fontSize: '8px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}

          {/* Contact Button */}
          <button
            onClick={() => setContactOpen(true)}
            className="group relative aspect-square border-4 overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              borderColor: '#8b3cff',
              background: 'rgba(0,0,0,0.8)',
              boxShadow: '0 0 20px rgba(139,60,255,0.6), inset 0 0 20px rgba(0,209,255,0.2)'
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <Mail size={64} style={{ color: '#00d1ff', filter: 'drop-shadow(0 0 10px #00d1ff)' }} />
              <div 
                className="text-xl font-bold text-center mt-4"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  color: '#00d1ff',
                  textShadow: '0 0 10px #00d1ff'
                }}
              >
                CONTACT
              </div>
              <div style={{ fontFamily: "'VT323', monospace", color: '#8b3cff', fontSize: '14px' }}>
                [GET IN TOUCH]
              </div>
            </div>
          </button>
        </div>

        {/* Stats Display - Hotline Miami Style */}
        <div className="max-w-4xl w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'PROJECTS', value: '03' },
            { label: 'SKILLS', value: '12+' },
            { label: 'GRADE', value: 'S' },
            { label: 'VHS', value: vhsOn ? 'ON' : 'OFF' }
          ].map((stat) => (
            <div 
              key={stat.label}
              className="border-2 p-4 text-center"
              style={{
                borderColor: '#C8102E',
                background: 'rgba(0,0,0,0.7)',
                boxShadow: '0 0 15px rgba(200,16,46,0.4)'
              }}
            >
              <div 
                className="text-sm mb-2"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  color: '#ff4da6',
                  fontSize: '10px'
                }}
              >
                {stat.label}
              </div>
              <div 
                className="text-3xl font-bold"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  color: '#C8102E',
                  textShadow: '0 0 15px #C8102E, 0 0 25px #ff4da6'
                }}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Modal */}
      {aboutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.9)' }}>
          <div 
            className="max-w-3xl w-full border-4 p-8 relative max-h-[90vh] overflow-y-auto"
            style={{
              borderColor: '#C8102E',
              background: 'linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(26,5,32,0.95) 100%)',
              boxShadow: '0 0 40px rgba(200,16,46,0.8), inset 0 0 30px rgba(255,77,166,0.2)'
            }}
          >
            <button
              onClick={() => setAboutOpen(false)}
              className="absolute top-4 right-4 p-2 border-2 transition-all hover:scale-110"
              style={{
                borderColor: '#C8102E',
                color: '#C8102E',
                background: 'black'
              }}
            >
              <X size={24} />
            </button>

            <h2 
              className="text-4xl font-bold mb-6 text-center"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                color: '#ff4da6',
                textShadow: '0 0 15px #ff4da6, 2px 2px 0 #C8102E'
              }}
            >
              ABOUT ME
            </h2>

            <div className="space-y-6" style={{ fontFamily: "'VT323', monospace", fontSize: '20px' }}>
              <div className="border-2 p-4" style={{ borderColor: '#ff4da6', background: 'rgba(0,0,0,0.5)' }}>
                <h3 className="text-2xl mb-2" style={{ color: '#C8102E', fontWeight: 'bold' }}>
                  BIO
                </h3>
                <p style={{ color: '#fff' }}>
                  [PLACEHOLDER: Add your brief bio here - 2-3 sentences about who you are, what drives you, and your passion for development]
                </p>
              </div>

              <div className="border-2 p-4" style={{ borderColor: '#00d1ff', background: 'rgba(0,0,0,0.5)' }}>
                <h3 className="text-2xl mb-2" style={{ color: '#C8102E', fontWeight: 'bold' }}>
                  SKILLS
                </h3>
                <p style={{ color: '#fff' }}>
                  [PLACEHOLDER: List your technical skills - React, Python, Django, Tailwind CSS, MySQL, MongoDB, Node.js, etc.]
                </p>
              </div>

              <div className="border-2 p-4" style={{ borderColor: '#8b3cff', background: 'rgba(0,0,0,0.5)' }}>
                <h3 className="text-2xl mb-2" style={{ color: '#C8102E', fontWeight: 'bold' }}>
                  EDUCATION
                </h3>
                <p style={{ color: '#fff' }}>
                  [PLACEHOLDER: Add your educational background - University, Degree Program, Year, relevant coursework]
                </p>
              </div>

              <div className="border-2 p-4" style={{ borderColor: '#C8102E', background: 'rgba(0,0,0,0.5)' }}>
                <h3 className="text-2xl mb-2" style={{ color: '#C8102E', fontWeight: 'bold' }}>
                  INTERESTS
                </h3>
                <p style={{ color: '#fff' }}>
                  Hotline Miami aesthetics, 80s vaporwave culture, Wim Wenders films, retro gaming, neon-soaked visuals, and creating immersive digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Modal */}
      {projectOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.9)' }}>
          <div 
            className="max-w-4xl w-full border-4 p-8 relative max-h-[90vh] overflow-y-auto"
            style={{
              borderColor: '#ff4da6',
              background: 'linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(26,5,32,0.95) 100%)',
              boxShadow: '0 0 40px rgba(255,77,166,0.8), inset 0 0 30px rgba(139,60,255,0.2)'
            }}
          >
            <button
              onClick={() => setProjectOpen(null)}
              className="absolute top-4 right-4 p-2 border-2 transition-all hover:scale-110"
              style={{
                borderColor: '#ff4da6',
                color: '#ff4da6',
                background: 'black'
              }}
            >
              <X size={24} />
            </button>

            <h2 
              className="text-3xl font-bold mb-4"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                color: '#00d1ff',
                textShadow: '0 0 15px #00d1ff'
              }}
            >
              {projectOpen.title}
            </h2>

            <div className="flex flex-wrap gap-2 mb-6">
              {projectOpen.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-sm border-2"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    borderColor: '#C8102E',
                    color: '#C8102E',
                    background: 'rgba(0,0,0,0.8)',
                    fontSize: '10px'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Slideshow */}
            <div className="mb-6">
              <div 
                className="relative border-4 overflow-hidden"
                style={{
                  borderColor: '#C8102E',
                  boxShadow: '0 0 20px rgba(200,16,46,0.5)'
                }}
              >
                <img 
                  src={projectOpen.screenshots[currentSlide]} 
                  alt={`Screenshot ${currentSlide + 1}`}
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => setCurrentSlide(s => s === 0 ? projectOpen.screenshots.length - 1 : s - 1)}
                  className="px-4 py-2 border-2 transition-all hover:scale-105"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    borderColor: '#ff4da6',
                    color: '#ff4da6',
                    background: 'black',
                    fontSize: '10px'
                  }}
                >
                  PREV
                </button>

                <div className="flex gap-2">
                  {projectOpen.screenshots.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className="w-3 h-3"
                      style={{
                        background: currentSlide === i ? '#C8102E' : '#333',
                        boxShadow: currentSlide === i ? '0 0 10px #C8102E' : 'none'
                      }}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentSlide(s => s === projectOpen.screenshots.length - 1 ? 0 : s + 1)}
                  className="px-4 py-2 border-2 transition-all hover:scale-105"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    borderColor: '#ff4da6',
                    color: '#ff4da6',
                    background: 'black',
                    fontSize: '10px'
                  }}
                >
                  NEXT
                </button>
              </div>
            </div>

            <p 
              className="mb-6 text-lg"
              style={{
                fontFamily: "'VT323', monospace",
                color: '#fff',
                lineHeight: '1.6'
              }}
            >
              {projectOpen.longDesc}
            </p>

            <div className="flex gap-4">
              <a
                href={projectOpen.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 transition-all hover:scale-105"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  borderColor: '#C8102E',
                  color: '#C8102E',
                  background: 'black',
                  fontSize: '10px',
                  textDecoration: 'none'
                }}
              >
                <Github size={20} />
                GITHUB
              </a>
              <a
                href={projectOpen.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 transition-all hover:scale-105"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  borderColor: '#00d1ff',
                  color: '#00d1ff',
                  background: 'black',
                  fontSize: '10px',
                  textDecoration: 'none'
                }}
              >
                <ExternalLink size={20} />
                LIVE SITE
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {contactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.9)' }}>
          <div 
            className="max-w-2xl w-full border-4 p-8 relative"
            style={{
              borderColor: '#00d1ff',
              background: 'linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(26,5,32,0.95) 100%)',
              boxShadow: '0 0 40px rgba(0,209,255,0.8), inset 0 0 30px rgba(139,60,255,0.2)'
            }}
          >
            <button
              onClick={() => setContactOpen(false)}
              className="absolute top-4 right-4 p-2 border-2 transition-all hover:scale-110"
              style={{
                borderColor: '#00d1ff',
                color: '#00d1ff',
                background: 'black'
              }}
            >
              <X size={24} />
            </button>

            <h2 
              className="text-4xl font-bold mb-6 text-center"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                color: '#00d1ff',
                textShadow: '0 0 15px #00d1ff, 2px 2px 0 #8b3cff'
              }}
            >
              CONTACT
            </h2>

            <form onSubmit={handleFormSubmit} className="space-y-4 mb-6">
              <div>
                <label 
                  className="block mb-2 text-sm"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    color: '#ff4da6',
                    fontSize: '10px'
                  }}
                >
                  NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 border-2 bg-black text-white outline-none"
                  style={{
                    fontFamily: "'VT323', monospace",
                    borderColor: '#C8102E',
                    fontSize: '18px'
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label 
                  className="block mb-2 text-sm"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    color: '#ff4da6',
                    fontSize: '10px'
                  }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 border-2 bg-black text-white outline-none"
                  style={{
                    fontFamily: "'VT323', monospace",
                    borderColor: '#C8102E',
                    fontSize: '18px'
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label 
                  className="block mb-2 text-sm"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    color: '#ff4da6',
                    fontSize: '10px'
                  }}
                >
                  MESSAGE
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full p-3 border-2 bg-black text-white outline-none resize-none"
                  style={{
                    fontFamily: "'VT323', monospace",
                    borderColor: '#C8102E',
                    fontSize: '18px'
                  }}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 border-2 transition-all hover:scale-105"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  borderColor: '#C8102E',
                  background: '#C8102E',
                  color: 'white',
                  fontSize: '12px',
                  boxShadow: '0 0 20px rgba(200,16,46,0.6)'
                }}
              >
                SEND MESSAGE
              </button>
            </form>

            <div className="border-t-2 pt-6" style={{ borderColor: '#8b3cff' }}>
              <h3 
                className="text-xl mb-4 text-center"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  color: '#ff4da6',
                  fontSize: '14px'
                }}
              >
                SOCIAL LINKS
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-2 px-4 py-2 border-2 transition-all hover:scale-105"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    borderColor: '#ff4da6',
                    color: '#ff4da6',
                    background: 'black',
                    fontSize: '10px',
                    textDecoration: 'none'
                  }}
                >
                  <Mail size={16} />
                  EMAIL
                </a>
                <a
                  href="https://github.com/vonzymon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border-2 transition-all hover:scale-105"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    borderColor: '#00d1ff',
                    color: '#00d1ff',
                    background: 'black',
                    fontSize: '10px',
                    textDecoration: 'none'
                  }}
                >
                  <Github size={16} />
                  GITHUB
                </a>
                <a
                  href="https://facebook.com/vonzymon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border-2 transition-all hover:scale-105"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    borderColor: '#8b3cff',
                    color: '#8b3cff',
                    background: 'black',
                    fontSize: '10px',
                    textDecoration: 'none'
                  }}
                >
                  <Facebook size={16} />
                  FACEBOOK
                </a>
                <a
                  href="https://instagram.com/vonzymon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border-2 transition-all hover:scale-105"
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                    borderColor: '#C8102E',
                    color: '#C8102E',
                    background: 'black',
                    fontSize: '10px',
                    textDecoration: 'none'
                  }}
                >
                  <Instagram size={16} />
                  INSTAGRAM
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
        
        @keyframes gridPulse {
          0%, 100% { transform: perspective(500px) rotateX(60deg) translateY(20%); }
          50% { transform: perspective(500px) rotateX(60deg) translateY(22%); }
        }
        
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
        
        @keyframes noise {
          0%, 100% { transform: translate(0, 0); opacity: 0.1; }
          10% { transform: translate(-1%, -1%); opacity: 0.12; }
          20% { transform: translate(-2%, 0%); opacity: 0.09; }
          30% { transform: translate(1%, -1%); opacity: 0.11; }
          40% { transform: translate(1%, 2%); opacity: 0.1; }
          50% { transform: translate(-1%, 1%); opacity: 0.12; }
          60% { transform: translate(-2%, -1%); opacity: 0.09; }
          70% { transform: translate(2%, 1%); opacity: 0.11; }
          80% { transform: translate(-1%, -2%); opacity: 0.1; }
          90% { transform: translate(1%, 0%); opacity: 0.12; }
        }
        
        @keyframes vhsTracking {
          0% { background-position: 0 0; }
          100% { background-position: 0 100vh; }
        }
        
        @keyframes glitchText {
          0%, 90%, 100% { 
            text-shadow: 0 0 10px #C8102E, 0 0 20px #C8102E, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 2px 2px 0 #00d1ff, -2px -2px 0 #8b3cff;
            transform: translate(0);
          }
          92% { 
            text-shadow: 0 0 10px #C8102E, 0 0 20px #C8102E, 3px 3px 0 #00d1ff, -3px -3px 0 #8b3cff;
            transform: translate(-2px, 2px);
          }
          94% { 
            text-shadow: 0 0 10px #C8102E, 0 0 20px #C8102E, -3px 3px 0 #00d1ff, 3px -3px 0 #8b3cff;
            transform: translate(2px, -2px);
          }
          96% { 
            text-shadow: 0 0 10px #C8102E, 0 0 20px #C8102E, 2px -2px 0 #00d1ff, -2px 2px 0 #8b3cff;
            transform: translate(-1px, 1px);
          }
        }
      `}</style>
    </div>
  );
}