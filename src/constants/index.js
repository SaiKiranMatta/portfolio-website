import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nextjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    python,
    C,
    django,
    threejs,
    CBIT,
    Bhashyam,
    Chaitanya,
    prahethi,
    cosc,
    hfest23,
    leaderboard,
    lms,
} from "../assets";

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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "App Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const education = [
    {
        title: "Bachelor of Engineering",
        subject: "Major: CSE",
        grade: "CGPA: 9.47/10",
        company_name: "Chaitanya Bharathi Institute of Technology",
        icon: CBIT,
        date: "2021 - Present",
    },
    {
        title: "Intermediate",
        subject: "Major: MPC",
        grade: "Percent: 98.6%",
        company_name: "Sri Chaitanya Junior College",
        icon: Chaitanya,
        date: "2019 - 2021",
    },
    {
        title: "High School",
        subject: "Board: TS SSC",
        grade: "CGPA: 10/10",
        company_name: "Bhashyam High School",
        icon: Bhashyam,
        date: "2018 - 2019",
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "python",
        icon: python,
    },
    {
        name: "C",
        icon: C,
    },
    {
        name: "django",
        icon: django,
    },
];

const experiences = [
    {
        title: "Member of Car Design Team",
        company_name: "Prahethi Racing",
        icon: prahethi,
        iconBg: "#000000",
        date: "November 2022 - Present",
        points: [
            "Contributed to the design team, refining technical aspects of the racing car.",
            "Engaged in hands-on fabrication and assembly of the racing vehicle.",
            "Collaborated with team members to optimize car performance and efficiency.",
            "Gained practical insights into automotive engineering and design principles.",
        ],
    },
    {
        title: "Junior Developer",
        company_name: "COSC",
        icon: cosc,
        iconBg: "#E6DEDD",
        date: "January 2023 - Present",
        points: [
            "Organized hackathons and bootcamps, fostering innovation.",
            "Advocated open-source technology adoption.",
            "Built diverse web applications, enhancing coding proficiency.",
            "Collaborated on various open-source projects, promoting knowledge sharing.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Sai proved me wrong.",
        name: "Navya Matta",
        designation: "CEO",
        company: "NAYA",
        image: "",
    },
];

const projects = [
    {
        name: "COSC Hacktoberfest 2023",
        description:
            "The central hub for CBIT Hacktoberfest Hackathon 2023, offering dynamic responsiveness, captivating animations, and seamless event registration.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "gsap",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: hfest23,
        source_code_link: "https://github.com/cbitosc/cbit-hacktoberfest23",
    },
    {
        name: "CP Leaderboard",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: leaderboard,
        source_code_link: "https://github.com/cbitosc/LeaderBoard",
    },
    {
        name: "Library Management",
        description:
            "A comprehensive, user-friendly library system for students, efficiently managed by librarians. This responsive website features smooth parallax scroll animations.",
        tags: [
            {
                name: "django",
                color: "blue-text-gradient",
            },
            {
                name: "sqlite",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: lms,
        source_code_link:
            "https://github.com/SaiKiranMatta/Library-Management-System",
    },
];

export {
    services,
    technologies,
    experiences,
    education,
    testimonials,
    projects,
};
