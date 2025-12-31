import project1 from '../assets/project/project-1.jpg'
import project2 from '../assets/project/project-2.png'

export const PROJECTS = [
    {
        title: "Task Manager Web App",
        href: "https://task-manager-njjo.vercel.app/",
        image: project1,
        description: "A Web App which helps you to Create, Delete, Update and assign TASKS to users. You can even organize your users",
        pointList: [
            `Role-based Functionality: Designed and implemented multi-role access (Admin/User) enabling role
specific permissions for task creation, editing, assigning users, managing todos, and handling file
attachments.`,
            `Modular Frontend with Validation: Built reusable form components using React, integrated React
Hook For Zod for field-level validation, and applied Tailwind CSS for a clean, responsive UI.`,
            `Secure Backend & Data Handling: Developed REST APIs using Express.js with JWT authentication,
protected routes, MongoDB + Mongoose for robust data models (tasks, users, todos, attachments),
and applied ObjectId validation across endpoints.`
        ],
        technologies: ["HTML", "TailwindCss", "REACT", "MongoDB", "Express", "Node"],
    },
    {
        title: "Todo Web App",
        href: "https://react-js-course-pi.vercel.app/",
        pointList: [],
        image: project2,
        description: "A Todo Web App like Task Manager but it's a very small project compares to that.",
        technologies: ["HTML", "TailwindCss", "REACT", "Local Storage"],
    },
]

export const CONTACT = {
    address: "Sonia Vihar, North-East Delhi, Delhi, India",
    tel: "+91 9625038714",
    email: "ravinder729090@gmail.com"
}

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
            "Firebase (basic)"
        ]
    }
]

export const HERO_CONTENT = `I’m a Full Stack Web Developer skilled in building fast, scalable, and user-focused web applications. From creating responsive UIs with React to developing robust APIs with Node.js, Express, and MongoDB, I bring full-stack solutions that deliver performance and reliability.`;
