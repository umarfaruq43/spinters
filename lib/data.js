import {
    BiLogoFacebookCircle,
    BiLogoInstagram,
    BiLogoLinkedinSquare,
    BiLogoTwitter,
} from "react-icons/bi";

const processData = [
    {
        title: "Experience",
        imgPath: "/images/bulb.svg",
        des: "With years of experience in our respective domains, we bring a wealth of knowledge to the table. Our track record speaks for itself, and we continue to push the boundaries of what's possible.",
    },
    {
        title: "Personalized-Approach",
        imgPath: "/images/award.svg",
        des: "We don't believe in one-size-fits-all solutions. Each project is approached with a unique perspective to ensure it aligns perfectly with your objectives.",
    },
    {
        title: "Client-Centric",
        imgPath: "/images/elements.svg",
        des: "Your success is our success. We work tirelessly to deliver on our promises and exceed your expectations. Our clients are at the heart of everything we do.",
    },
];

export const navItemData = [
    {
        activeNo: 1,
        title: "About Us",
        href: "/",
    },
    {
        activeNo: 2,
        title: "Services",
        href: "/service",
    },
    {
        activeNo: 3,
        title: "Case Study",
        href: "/case_study",
    },
    {
        activeNo: 4,
        title: "FAQs",
        href: "/faqs",
    },
];

export const testimonyData = [
    {
        que: "What kind of projects does your agency specialize in?",
        ans: "We specialize in a wide range of projects, from custom software development and mobile app creation to website design, e-commerce solutions, fintech solutions, edtech solutions, tech consultation, automation, cybersecurity and data analytics services.",
    },

    {
        que: "How do you ensure the security and confidentiality of our project data?",
        ans: "We specialize in a wide range of projects, from custom software development and mobile app creation to website design, e-commerce solutions, fintech solutions, edtech solutions, tech consultation, automation, cybersecurity and data analytics services.",
    },
    {
        que: "How does your pricing structure work?",
        ans: "We specialize in a wide range of projects, from custom software development and mobile app creation to website design, e-commerce solutions, fintech solutions, edtech solutions, tech consultation, automation, cybersecurity and data analytics services.",
    },
    {
        que: "Do you provide consultations or assessments before starting a project?",
        ans: "We specialize in a wide range of projects, from custom software development and mobile app creation to website design, e-commerce solutions, fintech solutions, edtech solutions, tech consultation, automation, cybersecurity and data analytics services.",
    },
    {
        que: "How do you handle project timelines and deadlines?",
        ans: "We specialize in a wide range of projects, from custom software development and mobile app creation to website design, e-commerce solutions, fintech solutions, edtech solutions, tech consultation, automation, cybersecurity and data analytics services.",
    },
    {
        que: "What technologies or frameworks does your team work with?",
        ans: "We specialize in a wide range of projects, from custom software development and mobile app creation to website design, e-commerce solutions, fintech solutions, edtech solutions, tech consultation, automation, cybersecurity and data analytics services.",
    },
];

export const footerData = {
    company: [
        { text: "About Us", href: "#" },
        { text: "Services", href: "#" },
        { text: "Case Study", href: "#" },
        { text: "FAQs", href: "#" },
        { text: "Contact Info", href: "#" },
    ],
    support: [
        { text: "Help", href: "#" },
        { text: "Legal", href: "#" },
    ],
    transparency: [
        { text: "Terms of use", href: "#" },
        { text: "Privacy Policy", href: "#" },
        { text: "Complaints", href: "#" },
    ],
    socials: [
        { icon: BiLogoFacebookCircle, link: "#" },
        { icon: BiLogoLinkedinSquare, link: "#" },
        { icon: BiLogoInstagram, link: "#" },
        { icon: BiLogoTwitter, link: "#" },
    ],
};

export const ProjectData = [
    {
        title: "Okada",
        des: "A mobile application that facilitates users in contacting logistics companies and booking their delivery services.",
        projectLink: "#",
        imgUrl: "/images/p_1.svg",
        tags: ["Mobile", "", "Data Analytics"],
    },
    {
        title: "Payme",
        des: "A platform enabling users to receive payments from friends and loved ones, while also allowing users to request money from one another.",
        projectLink: "#",
        imgUrl: "/images/p_2.svg",
        tags: ["Mobile", "Automation", "Cybersecurity", "Data Analytics"],
    },
    {
        title: "Sale View",
        des: "A platform to manage sales, view business analytics and monitor progress.",
        projectLink: "#",
        imgUrl: "/images/p_3.svg",
        tags: ["Web", "Automation", "", "Data Analytics"],
    },
    {
        title: "Artify",
        des: "A platform that enables users to access a rich library of art tutorial videos and resources.",
        projectLink: "#",
        imgUrl: "/images/p_4.svg",
        tags: ["Web", "", "Cybersecurity", "Data Analytics"],
    },
];
