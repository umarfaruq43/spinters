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
        href: "/about",
        href_2: "homePage",
    },
    {
        activeNo: 2,
        title: "Services",
        href: "/service",
        href_2: null,
    },
    {
        activeNo: 3,
        title: "Case Study",
        href: "/case_study",
        href_2: null,
    },
    {
        activeNo: 4,
        title: "FAQs",
        href: "/faqs",
        href_2: null,
    },
];

export const testimonyData = [
    {
        que: "What services does Sprinters Tech provide?",
        ans: " Sprinters Tech specializes in a range of tech services, including web development, mobile development, automation solutions, tech consultancy, and data analytics. We leverage cutting-edge technologies to deliver tailored solutions for our clients.",
    },

    {
        que: "How can I contact Sprinters tech for inquiries or assistance?",
        ans: "You can reach out to us through our Contact Page or email at [Email Address] Our team is ready to assist you with any questions or requirements.",
    },
    {
        que: "What types of websites does Sprinters Tech develop?",
        ans: "Sprinters Tech has expertise in developing a variety of websites, including but not limited to corporate websites, e-commerce platforms, content management systems (CMS), and custom web applications.",
    },
    {
        que: "Can Sprinters tech redesign an existing website?",
        ans: "Absolutely! We offer website redesign services to enhance the user experience, update the design, and incorporate new features. Contact us, and we'll be happy to discuss your specific requirements.",
    },
    {
        que: "Which mobile platforms does Sprinters tech develop for?",
        ans: "Sprinters Tech specializes in mobile app development for iOS and Android platforms. Our team utilizes the latest technologies to create high-performance and user-friendly mobile applications.",
    },
    {
        que: "Can Sprinters tech assist with cross-platform app development?",
        ans: "Yes, we have expertise in cross-platform app development using frameworks such as React Native and Flutter. This allows us to create apps that run seamlessly on multiple platforms.",
    },
    {
        que: "What automation solutions do Sprinters Tech offer?",
        ans: "Sprinters tech provides automation solutions for streamlining business processes, improving efficiency, and reducing manual workload. This includes customized automation tailored to your specific needs.",
    },
    {
        que: "How can Sprinters Tech assist my business through tech consultancy?",
        ans: "Our tech consultancy services involve assessing your current technology infrastructure, providing strategic recommendations, and offering solutions to enhance your overall tech strategy. We focus on aligning technology with your business goals.",
    },
    {
        que: "What types of data analytics services does Sprinters Tech offer?",
        ans: "Sprinters Tech specializes in data analytics services, including data visualization, predictive analytics, and business intelligence. We help businesses derive actionable insights from their data to make informed decisions.",
    },
    {
        que: "Is my data secure when using Sprinter analytics services?",
        ans: "Absolutely! we prioritize data security. Sprinters Tech follows industry best practices to ensure the confidentiality and integrity of your data. We implement robust security measures to protect against unauthorized access.",
    },
    {
        que: "Does Sprinters Tech offer ongoing support for its services?",
        ans: "Yes, we provide ongoing support and maintenance for our solutions. Our dedicated support team is available to address any issues and ensure the continued success of your technology investments.",
    },
    {
        que: "How can I request a quote for Sprinters tech services?",
        ans: "To request a quote, please visit our Get a Quote page and fill out the provided form. We will promptly review your requirements and get in touch with you.",
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

export const ServiceDetailData = [
    {
        title: "Tech consultation",
        normalTitle: "Tech",
        editableTitle: "consultation",
        des: "Sprinters Agency's Tech Consultancy division is your strategic partner in navigating the digital landscape, offering expert guidance. We specialize in crafting clear paths to success through comprehensive Technology Roadmaps, aligning with your business objectives. We lead in Digital Transformation, ensuring seamless transitions into the digital age. At the core is efficient IT Optimization—analyzing your infrastructure, identifying enhancements and cost reductions. Success is the result of Strategic Technology Planning, collaborating closely to enhance your competitive edge.",
    },
    {
        title: "Web consultation",
        normalTitle: "Web",
        editableTitle: "consultation",
        des: "Sprinters Agency specializes in creating visually appealing and highly functional websites that align with your brand identity and business objectives. Our expertise extends to responsive web development, ensuring optimal performance across desktops, tablets, and mobile phones. Additionally, we provide end-to-end e-commerce solutions, enabling the establishment or enhancement of your online store with features like product catalogs, shopping carts, and secure payment gateways. To empower you further, we offer Content Management System (CMS) integration, allowing easy management and updating of your website’s content to keep it fresh and relevant.",
    },
    {
        title: "Mobile consultation",
        normalTitle: "Mobile",
        editableTitle: "consultation",
        des: "Sprinters Agency excels in iOS and Android app development, crafting custom mobile applications tailored to meet your unique business needs and user expectations. Our expertise extends to cross-platform development, ensuring your app reaches a broader audience. With a focus on user-centric design, our mobile apps prioritize intuitive interfaces and excellent user experiences to keep your audience engaged. Additionally, we prioritize security, incorporating stringent measures to protect your mobile app and data, ensuring compliance with privacy regulations.",
    },
    {
        title: "Automation",
        normalTitle: "",
        editableTitle: "Automation",
        des: "Sprinters Agency provides comprehensive solutions to elevate your business processes. Our expertise includes Business Process Automation to streamline operations, reduce manual tasks, and improve efficiency. Leveraging the power of AI and machine learning, we make data-driven decisions and create personalized experiences for your users. Additionally, enhance customer support and engagement with AI-powered chatbots and virtual assistants.",
    },
    {
        title: "Cybersecurity",
        normalTitle: "",
        editableTitle: "Cybersecurity",
        des: "Sprinters Agency conducts comprehensive Security Audits and Assessments, identifying vulnerabilities and risks in your digital infrastructure. We prioritize Data Protection through the implementation of encryption, security authentication processes, and access controls to safeguard sensitive information. In the event of a security incident, our team responds promptly with Incident Response, mitigating the impact and preventing future occurrences. Additionally, we provide Compliance and Regulatory Assistance, helping your business adhere to cybersecurity regulations and standards.",
    },
];

export const teamData = [
    {
        name: "Raheem",
        img: "/images/t_1.svg",
        role: "Founder & CEO",
    },
    {
        name: "Temitope Adewole",
        img: "/images/t_1.svg",
        role: "Product Manager",
    },
    {
        name: "Damilare Abdulkadir",
        img: "/images/t_1.svg",
        role: "UI/UX Designer",
    },
    {
        name: "Umar Faruq",
        img: "/images/t_1.svg",
        role: "Frontend Developer",
    },
    {
        name: "Natali Craig",
        img: "/images/t_1.svg",
        role: "Backend Developer",
    },
    {
        name: "Drew Cano",
        img: "/images/t_1.svg",
        role: "Graphics Designer",
    },
];

export const HeroData = {
    landingPage: {
        theme: "dark",
        activeNav: "/",
        normalText_1: "Welcome to Sprinters,Your ",
        normalText_2: "Partner",
        editedText: " Tech Solutions ",
        des: "We specialize in Tech consultation, web development, mobile development, automation, cybersecurity, and data analytics. Let us bring your digital dreams to life!",
        btnfunc: "#",
    },
    service: {
        theme: "light",
        activeNav: "/service",
        normalText_1: "Discover   ",
        normalText_2: "at Sprinters Technologies!",
        editedText: " our Tech services ",
        des: "We’ve Got You Covered",
        btnfunc: null,
    },
    aboutus: {
        theme: "light",
        activeNav: "/about",
        normalText_1: "Discover   ",
        normalText_2: "at Sprinters Technologies!",
        editedText: " our Tech services ",
        des: "We’ve Got You Covered",
        btnfunc: null,
    },
    caseStudy: {
        theme: "light",
        activeNav: "/case_study",
        normalText_1: "Case Studies Showcasing Some of Our ",
        normalText_2: "",
        editedText: " Finest Works ",
        des: "Elevating our clients product with unparalleled Value. Our case studies are a testament to our unwavering commitment to creativity, innovation, and delivering exceptional results.",
        btnfunc: null,
    },

    faq: {
        theme: "light",
        activeNav: "/faqs",
        normalText_1: "Ask  ",
        normalText_2: "",
        editedText: " Us Anything ",
        des: "Need something cleared up? Here are our most frequently asked questions?",
        btnfunc: null,
    },
};
