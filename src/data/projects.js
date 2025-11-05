// src/data/projects.js
// Sample project data - Replace with your actual projects!

const PROJECTS = [
  {
    id: 1,
    title: "Student DBMS",
    shortDesc: "PHP + MySQL database system",
    longDesc: "A comprehensive student database management system built with PHP and MySQL. Features include student registration, course enrollment, grade tracking, and attendance management. The system provides real-time data processing, secure authentication for administrators and students, and generates detailed reports for academic performance analysis.",
    tags: ["PHP", "MySQL", "HTML", "Backend"],
    icon: "🗄️",
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
    longDesc: "A retro-futuristic portfolio website inspired by Hotline Miami and 80s vaporwave aesthetics. Built with React and Tailwind CSS featuring neon effects, VHS overlays, CRT scanlines, and psychedelic color gradients. Demonstrates modern web technologies wrapped in nostalgic visual design with fully responsive layouts and smooth animations.",
    tags: ["React", "Tailwind", "Frontend", "Design"],
    icon: "💼",
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
    longDesc: "A real-time queue management system designed for university registrar offices. Features include digital ticket generation, queue monitoring, SMS notifications, and an analytics dashboard. Built to reduce waiting times and improve student services efficiency with a clean, intuitive interface. Supports multiple service counters and priority queuing.",
    tags: ["Node.js", "React", "MongoDB", "Fullstack"],
    icon: "🎫",
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

export default PROJECTS;