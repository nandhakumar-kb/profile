import greencartImg from "../assets/projects/greencart.png";
import carrentalImg from "../assets/projects/carrental.png";
import smartcampusImg from "../assets/projects/smartcampus.png";
import fullstackCertImg from "../assets/certifications/fullstack.png";
import javapythonCertImg from "../assets/certifications/javapython.png";
import uiuxCertImg from "../assets/certifications/uiux.png";

export const navLinks = [
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "education",
        title: "Education",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const profileData = {
    fullName: "Nandha Kumar K B",
    headline: "UI/UX Designer & Full-Stack Engineer",
    location: "Coimbatore, India",
    phone: "+91 7200942020",
    email: "nandhakumarkb2005@gmail.com",
    resumeFile: "/resume.pdf",
    resumeDownloadName: "Nandha_Kumar_K_B_Resume.pdf",
    linkedin: "https://www.linkedin.com/in/nandha-kumar-k-b/",
    github: "https://github.com/nandhakumarkb2005",
    portfolio: "https://nandhakumarkb.vercel.app/",
};

const services = [
    {
        title: "UI/UX Designer",
        icon: "https://img.icons8.com/color/48/000000/design.png",
    },
    {
        title: "Full-Stack Engineer",
        icon: "https://img.icons8.com/color/48/000000/source-code.png",
    },
    {
        title: "React Frontend Specialist",
        icon: "https://img.icons8.com/color/48/000000/react-native.png",
    },
    {
        title: "AI-Native Product Thinker",
        icon: "https://img.icons8.com/color/48/000000/artificial-intelligence.png",
    },
];

const skills = [
    {
        title: "Languages",
        skills: [
            { name: "Java", color: "#29b6f6", icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" },
            { name: "Python", color: "#29b6f6", icon: "https://img.icons8.com/color/48/000000/python.png" },
            { name: "JavaScript", color: "#ef5350", icon: "https://img.icons8.com/color/48/000000/javascript.png" },
            { name: "SQL", color: "#29b6f6", icon: "https://img.icons8.com/color/48/000000/database.png" },
        ],
    },
    {
        title: "Web Development",
        skills: [
            { name: "UI/UX", color: "#7e57c2", icon: "https://img.icons8.com/color/48/000000/design.png" },
            { name: "HTML", color: "#ef5350", icon: "https://img.icons8.com/color/48/000000/html-5.png" },
            { name: "CSS", color: "#ef5350", icon: "https://img.icons8.com/color/48/000000/css3.png" },
            { name: "React.js", color: "#ef5350", icon: "https://img.icons8.com/color/48/000000/react-native.png" },
        ],
    },
    {
        title: "Data Analytics",
        skills: [
            { name: "Microsoft Power BI", color: "#fbc02d", icon: "https://img.icons8.com/color/48/000000/power-bi.png" },
            { name: "Microsoft Excel", color: "#4caf50", icon: "https://img.icons8.com/color/48/000000/ms-excel.png" },
        ],
    },
    {
        title: "Developer Tools",
        skills: [
            { name: "VS Code", color: "#29b6f6", icon: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" },
            { name: "GitHub", color: "#333", icon: "https://img.icons8.com/ios-filled/50/000000/github.png" },
            { name: "Figma", color: "#4db6ac", icon: "https://img.icons8.com/color/48/000000/figma.png" },
            { name: "Canva", color: "#4db6ac", icon: "https://img.icons8.com/color/48/000000/canva.png" },
            { name: "Antigravity", color: "#ff9800", icon: "https://img.icons8.com/color/48/000000/artificial-intelligence.png" },
        ],
    },
];

const education = [
    {
        title: "B.E. Computer Science and Engineering",
        school_name: "KPR Institute of Engineering and Technology",
        icon: "https://img.icons8.com/color/48/000000/student-center.png",
        iconBg: "#383E56",
        date: "2023 - 2027",
        points: [
            "CGPA: 8.55",
            "2027 Batch",
        ],
    },
    {
        title: "Higher Secondary Education",
        school_name: "Einsstein Matric Higher Secondary School",
        icon: "https://img.icons8.com/color/48/000000/school.png",
        iconBg: "#E6DEDD",
        date: "Completed",
        points: [
            "Percentage: 92%",
        ],
    },
];

const projects = [
    {
        name: "GreenCart – Full-Stack Grocery E-Commerce Platform",
        description:
            "Built a comprehensive MERN stack grocery delivery platform featuring a dynamic product catalog, real-time shopping cart state management, and secure checkout. Developed a dedicated seller dashboard enabling vendors to list products, upload and optimize media, toggle inventory status, and track user orders.",
        tags: [
            {
                name: "MERN Stack",
                color: "blue-text-gradient",
            },
            {
                name: "E-Commerce",
                color: "green-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
            },
        ],
        image: greencartImg,
        source_code_link: "https://greencart-nk.vercel.app/",
    },
    {
        name: "Car Rental Booking System",
        description:
            "Engineered a dual-role car rental application allowing users to filter available vehicles by location and date, while enabling car owners to list vehicles and manage booking statuses. Optimized platform load speed and media delivery and enhanced user experience (UX) by implementing smooth page transitions and interactive interface animations.",
        tags: [
            {
                name: "System Design",
                color: "blue-text-gradient",
            },
            {
                name: "UI/UX",
                color: "green-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
            },
        ],
        image: carrentalImg,
        source_code_link: "https://carrental-nk.vercel.app/",
    },
    {
        name: "Smart Campus KPR – Institution Management Solution",
        description:
            "Architected a specialized digital campus platform aimed at centralizing resources and streamlining academic operations for students and faculty. Leveraged modern Git workflows for version control and successfully deployed the scalable web application globally via Vercel.",
        tags: [
            {
                name: "Web App",
                color: "blue-text-gradient",
            },
            {
                name: "Architecture",
                color: "green-text-gradient",
            },
            {
                name: "Deployment",
                color: "pink-text-gradient",
            },
        ],
        image: smartcampusImg,
        source_code_link: "https://smartcampus-kpr.vercel.app/",
    },
];

const certifications = [
    {
        name: "MERN Stack Development",
        issuer: "GreatStack & ExcelR",
        date: "Certified",
        description: "Specialized in end-to-end application architecture through 'Full Stack Development' and 'React.js'.",
        image: fullstackCertImg,
    },
    {
        name: "Enterprise Logic & Backend",
        issuer: "HackerRank & Infosys SpringBoard",
        date: "Certified",
        description: "Validated proficiency in backend engineering with 'Java' and 'Python'.",
        image: javapythonCertImg,
    },
    {
        name: "Design & User Experience",
        issuer: "Great Learning & LearnTube",
        date: "Certified",
        description: "Mastered 'UI/UX Design' & 'Figma', focusing on the intersection of brand aesthetics and technical usability.",
        image: uiuxCertImg,
    },
];

export { profileData, services, skills, education, projects, certifications };
