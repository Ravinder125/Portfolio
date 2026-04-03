import project1 from "../assets/project/project-1.jpg";
import project2 from "../assets/project/project-2.png";

export const PROJECTS = [
  {
    title: "Task Manager Web App",
    href: "https://task-manager-njjo.vercel.app/",
    image: project1,
    description:
      "A full-stack task management system with role-based access where admins manage users and tasks while users manage assigned work and todos.",
    pointList: [
      `RBAC System: Implemented Admin/User role separation with protected routes, controlled task assignment, todo management and attachment handling.`,

      `Type-safe Scalable Frontend Architecture: Built modular React components with React Hook Form + Zod validation, proper state separation and responsive UI using Tailwind.`,

      `Type-safe Production-style Backend: Created REST APIs with Express, JWT authentication, MongoDB schema relationships, pagination, search and strict ObjectId validation.`,
    ],
    technologies: [
      "React",
      "TailwindCSS",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Context API",
      "MongoDB",
      "JWT",
      "Zod",
    ],
  },
  {
    title: "E-Commerce Web App",
    href: "https://e-commerce-p2.netlify.app",
    image: project2,
    description:
      "A modern e-commerce application featuring product browsing, authentication, cart management and checkout flow with centralized state management.",
    pointList: [
      `State Management: Implemented global state using Redux Toolkit for cart, products and user session handling.`,

      `Authentication Flow: Integrated Firebase Authentication for secure login and signup with protected routes.`,

      `Shopping Experience: Developed cart logic, quantity updates, checkout flow and payment integration using Stripe.`,

      `Type-safe Validation: Used TypeScript and Zod to ensure reliable data validation and predictable application behavior.`,
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "SASS",
      "Firebase Auth",
      "Node.js",
      "Express.js",
      "Stripe",
      "Zod",
    ],
  },
];

export const CONTACT = {
  address: "Sonia Vihar, North-East Delhi, Delhi, India",
  tel: "+91 9625038714",
  email: "ravinder729090@gmail.com",
};

export const EXPERIENCE = [
  {
    role: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Bangalore, India",
    startDate: "Jan 2023",
    endDate: "Apr 2024",
    description:
      "Worked on building and maintaining modern, responsive web applications using React.js, Tailwind CSS, and JavaScript. Collaborated with designers and backend developers to deliver seamless user experiences. Focused on performance optimization, clean code practices, and integration of REST APIs into frontend systems.",
    technologies: [
      "React.js",
      "Next.js (absic)",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "Git",
      "GitHub",
      "Vite",
      "VS Code",
      "Figma",
      "Netlify",
      "Firebase (basic)",
    ],
  },
];

export const HERO_CONTENT = `I’m a Full Stack Web Developer skilled in building fast, scalable, and user-focused web applications. From creating responsive UIs with React to developing robust APIs with Node.js, Express, and MongoDB, I bring full-stack solutions that deliver performance and reliability.`;

// Example: Assign a string or SVG markup as needed
export const FIVERR_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#dad2d4"/><text x="50%" y="55%" text-anchor="middle" fill="#000" font-size="16" font-family="Arial" font-weight="bold" dy=".3em">fi</text></svg>`;
