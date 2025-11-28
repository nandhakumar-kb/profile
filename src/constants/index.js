
import nlc from "../assets/NLC.png";
import wizard from "../assets/wizard systems.jpg";
import foretec from "../assets/foretec electric.jpg";
import emglitz from "../assets/emglitz.jpg";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Electrical & Electronics Engineer",
        icon: "https://img.icons8.com/color/48/000000/electricity.png",
    },
    {
        title: "Embedded Systems Developer",
        icon: "https://img.icons8.com/color/48/000000/microcontroller.png",
    },
    {
        title: "IoT Solutions Architect",
        icon: "https://img.icons8.com/color/48/000000/internet-of-things.png",
    },
    {
        title: "Robotics Enthusiast",
        icon: "https://img.icons8.com/color/48/000000/robot-2.png",
    },
];

const skills = [
    {
        title: "Software and Simulation",
        skills: [
            { name: "ETAP", color: "#4db6ac", icon: "https://img.icons8.com/color/48/000000/electricity.png" },
            { name: "Proteus", color: "#4db6ac", icon: "https://img.icons8.com/color/48/000000/microchip.png" },
            { name: "Multisim", color: "#4db6ac", icon: "https://img.icons8.com/color/48/000000/oscilloscope.png" },
            { name: "Pspice", color: "#4db6ac", icon: "https://img.icons8.com/color/48/000000/electronics.png" },
            { name: "Keil Ide", color: "#4db6ac", icon: "https://img.icons8.com/color/48/000000/processor.png" },
        ],
    },
    {
        title: "Embedded Systems",
        skills: [
            { name: "NodeMcu", color: "#7e57c2", icon: "https://img.icons8.com/color/48/000000/arduino.png" },
            { name: "Embedded c", color: "#7e57c2", icon: "https://cdn.simpleicons.org/c" },
            { name: "Kicad", color: "#7e57c2", icon: "https://cdn.simpleicons.org/kicad" },
        ],
    },
    {
        title: "Control & Automation",
        skills: [
            { name: "PLC", color: "#ef5350", icon: "https://img.icons8.com/color/48/000000/industrial-robot.png" },
            { name: "Matlab", color: "#ef5350", icon: "https://cdn.simpleicons.org/mathworks" },
        ],
    },
    {
        title: "Robotics and Control",
        skills: [
            { name: "ROS2 Basic", color: "#29b6f6", icon: "https://cdn.simpleicons.org/ros" },
            { name: "Gazebo", color: "#29b6f6", icon: "https://cdn.simpleicons.org/gazebo" },
            { name: "Fusion 360", color: "#29b6f6", icon: "https://cdn.simpleicons.org/autodesk" },
            { name: "Unity", color: "#29b6f6", icon: "https://cdn.simpleicons.org/unity" },
        ],
    },
    {
        title: "Programming",
        skills: [
            { name: "Java", color: "#66bb6a", icon: "https://cdn.simpleicons.org/openjdk" },
            { name: "C", color: "#66bb6a", icon: "https://cdn.simpleicons.org/c" },
            { name: "Python", color: "#66bb6a", icon: "https://cdn.simpleicons.org/python" },
        ],
    },
    {
        title: "Tech Stacks",
        skills: [
            { name: "Linux", color: "#ffca28", icon: "https://cdn.simpleicons.org/linux" },
            { name: "IoT", color: "#ffca28", icon: "https://img.icons8.com/color/48/000000/internet-of-things.png" },
            { name: "Devops", color: "#ffca28", icon: "https://img.icons8.com/color/48/000000/devops.png" },
        ],
    },
];

const experiences = [
    {
        title: "Electrical Engineering Intern",
        company_name: "NLC India Limited",
        icon: nlc,
        iconBg: "#383E56",
        date: "July 2024 - Aug 2024",
        points: [
            "Learned 33 kV/11 kV substation operation and essential safety practices.",
            "Studied key protection systems such as differential and Buchholz relays.",
            "Observed CTs, PTs, circuit breakers, and isolators.",
        ],
    },
    {
        title: "Embedded Intern",
        company_name: "Wizzard Systems",
        icon: wizard,
        iconBg: "#E6DEDD",
        date: "Dec 2024 - Jan 2025",
        points: [
            "Learned embedded system design using microcontrollers.",
            "Worked with Keil IDE and Hands-on experience in embedded C coding.",
            "Performed basic debugging.",
        ],
    },
    {
        title: "Electrical Safety Intern",
        company_name: "Foretec Electric",
        icon: foretec,
        iconBg: "#383E56",
        date: "Jan 2025 - Feb 2025",
        points: [
            "Worked with the Safety Audit team at leading Hospital in Coimbatore.",
            "Had exposure to MCB/RCBO operation, tripping technologies.",
            "Contributed to safety compliance reports.",
        ],
    },
    {
        title: "IoT Development Intern",
        company_name: "Emgiltz Technologies",
        icon: emglitz,
        iconBg: "#E6DEDD",
        date: "June 2025 - July 2025",
        points: [
            "Involved in IoT development using sensors.",
            "Gained experience in data acquisition and cloud connectivity.",
            "Learned real-time monitoring and hardware-software integration.",
        ],
    },
];

const education = [
    {
        title: "B.E. Electrical and Electronics Engineering",
        school_name: "KPR Institute of Engineering and Technology",
        icon: "https://img.icons8.com/color/48/000000/student-center.png",
        iconBg: "#383E56",
        date: "2023 - 2027",
        points: [
            "CGPA: 8.29 (Upto 4th Semester)",
            "Pre Final Year EEE Student",
        ],
    },
    {
        title: "Higher Secondary Education",
        school_name: "South Indian Matric Higher Secondary School",
        icon: "https://img.icons8.com/color/48/000000/school.png",
        iconBg: "#E6DEDD",
        date: "2021 - 2023",
        points: [
            "Percentage: 90.5%",
        ],
    },
];

const projects = [
    {
        name: "Smart Parking Management System",
        description:
            "Automated parking system powered by solar energy with real-time slot detection using IR sensors. Integrated with ThingSpeak cloud for live monitoring.",
        tags: [
            {
                name: "Proteus",
                color: "blue-text-gradient",
            },
            {
                name: "NodeMCU",
                color: "green-text-gradient",
            },
            {
                name: "IoT",
                color: "pink-text-gradient",
            },
        ],
        image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        source_code_link: "https://github.com/",
    },
    {
        name: "Automated Street Light",
        description:
            "LDR-based night detection system, keeping light in dim mode and switching to high brightness on motion using PIR sensor. Added MOSFET regulator.",
        tags: [
            {
                name: "Proteus",
                color: "blue-text-gradient",
            },
            {
                name: "NodeMCU",
                color: "green-text-gradient",
            },
            {
                name: "Multisim",
                color: "pink-text-gradient",
            },
        ],
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80",
        source_code_link: "https://github.com/",
    },
    {
        name: "IoT Based Transformer Monitoring",
        description:
            "Transformer monitoring setup using NodeMCU to measure temperature, oil level, and vibration. Validated circuit using Proteus and MATLAB.",
        tags: [
            {
                name: "Proteus",
                color: "blue-text-gradient",
            },
            {
                name: "Matlab",
                color: "green-text-gradient",
            },
            {
                name: "Embedded C",
                color: "pink-text-gradient",
            },
        ],
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        source_code_link: "https://github.com/",
    },
    {
        name: "ROS2-Based Robotics Simulation",
        description:
            "Simulated a differential drive robot model in Gazebo using ROS2 Jazzy. Implemented publisher-subscriber nodes for robot motion control.",
        tags: [
            {
                name: "ROS2",
                color: "blue-text-gradient",
            },
            {
                name: "Linux",
                color: "green-text-gradient",
            },
            {
                name: "Python",
                color: "pink-text-gradient",
            },
        ],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        source_code_link: "https://github.com/",
    },
];

const certifications = [
    {
        name: "Foundation course on Electric Vehicle",
        issuer: "BOSCH",
        date: "2024",
        description: "Technical training program offered by BOSCH.",
    },
    {
        name: "Electronic System Design: Hands-on Circuits and PCB Design with CAD Software",
        issuer: "NPTEL",
        date: "2024",
        description: "Course by NPTEL.",
    },
    {
        name: "Introduction to Microsoft Azure : Describe cloud concepts",
        issuer: "Microsoft",
        date: "2024",
        description: "Course offered by Microsoft.",
    },
];

export { services, skills, experiences, education, projects, certifications };
