export const personalInfo = {
  name: "Siddhant Khot",
  role: "Full Stack Developer",
  tagline: "Building digital experiences that live at the intersection of performance and elegance.",
  email: "siddhantkhot18@outlook.com",
  location: "Pune,Maharastra",
  resumeUrl: "",
};

export const socialLinks = {
  github: "https://github.com/Siddhantkhot",
  linkedin: "https://www.linkedin.com/in/siddhant-khot-1090b2262",
  leetcode: "https://leetcode.com/u/SiddhantK_18/",
  twitter: "https://x.com/SiddhantKhot108",
};

export const skills = [
  {
    category: "Frontend",
    color: "#00f5c4",
    items: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      
    ],
  },
  {
    category: "Backend",
    color: "#6366f1",
    items: [
      { name: "Node.js / Express", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 82 },
      
    ],
  },
];

export const techBadges = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "MongoDB", "REST APIs",
  "Tailwind CSS", "Git", "Github",
];

export const projects = [
  {
    title: "Sivora  — A Real time Chat Application ",
    description: "A full-stack productivity app powered by GPT-4 that auto-prioritizes tasks, generates subtasks, and predicts completion times using ML models. Real-time collaboration with WebSocket support.",
    tech: ["React.js", "Javascript", "MongoDB", "Socket.io", "Bcrypt", "WebSockets"],
    github: "https://github.com/Siddhantkhot/Sivora",
    demo: "",
    // status: "Live",
    featured: true,
  },
  {
    title: "Parallex — Movie Search App",
    description: "Parallex is a modern, responsive movie search and discovery web application built using React and TypeScript. The application allows users to explore, search, and view detailed information about movies in real time by integrating with the TMDB (The Movie Database) API",
    tech: ["React", "Node.js","TanStack Query v5", "Tplescript"],
    github: "https://github.com/Siddhantkhot/Parallex/",
    demo: "https://parallex-beige.vercel.app/",
    status: "Live",
    featured: true,
  },
  {
    title: "Weather APP — A real time Weather Application",
    description: "he Weather App is a responsive web application that provides real-time weather information for any location across the globe. Users can search for cities to instantly view current weather conditions, including temperature, humidity, wind speed, and overall climate status.",
    tech: ["Javascript", "Tailwind CSS", "HTML5" ,"weather.API"],
    github: "https://github.com/Siddhantkhot/weather-app",
    demo:"https://siddhantkhot.github.io/weather-app/",
    status: "Live",
    featured: false,
  },
  {
    title: "ToDo — Task Management App ",
    description: "A responsive and user-friendly To-Do application designed to help users efficiently manage their daily tasks. The app allows users to add, update, delete, and organize tasks with a clean and intuitive interface",
    tech: ["Javascript", "Tailwind CSS", "HTML5" ],
    github: "https://github.com/Siddhantkhot/To-do-list",
    demo: "https://siddhantkhot.github.io/To-do-list/",
    status: "Live",
    featured: false,
  },
];

export const experience = [
  {
    type: "work",
    title: "Senior Full Stack Engineer",
    company: "TechVentures Inc.",
    period: "2022 — Present",
    description: "Lead developer for a SaaS platform serving 50K+ users. Reduced API response time by 60% through caching strategies and query optimization. Mentored a team of 4 junior developers.",
    tech: ["React", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 — 2022",
    description: "Built the entire frontend from scratch using React and TypeScript. Integrated payment systems, real-time features, and developed a mobile-responsive design system.",
    tech: ["React", "TypeScript", "Python", "Firebase"],
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    company: "University of California, Berkeley",
    period: "2016 — 2020",
    description: "GPA: 3.8/4.0. Specialized in Algorithms, Distributed Systems, and Machine Learning. Teaching Assistant for Data Structures.",
    tech: ["Algorithms", "ML", "Distributed Systems"],
  },
];

export const codingProfiles = [
  {
    platform: "GitHub",
    username: "SiddhantKhot",
    url: "https://github.com/alexchen",
    stats: [
      { label: "Repositories", value: "48" },
      { label: "Stars Earned", value: "312" },
      { label: "Contributions", value: "1,247" },
    ],
    color: "#ffffff",
    icon: "github",
  },
  {
    platform: "LeetCode",
    username: "alexchen",
    url: "https://leetcode.com/alexchen",
    stats: [
      { label: "Problems Solved", value: "487" },
      { label: "Contest Rating", value: "1,842" },
      { label: "Top Percentage", value: "8%" },
    ],
    color: "#ffa116",
    icon: "leetcode",
  },
  {
    platform: "LinkedIn",
    username: "alexchen",
    url: "https://linkedin.com/in/alexchen",
    stats: [
      { label: "Connections", value: "500+" },
      { label: "Endorsements", value: "78" },
      { label: "Profile Views", value: "2.4K" },
    ],
    color: "#0a66c2",
    icon: "linkedin",
  },
];
