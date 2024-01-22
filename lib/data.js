import {
    BiLogoFacebookCircle,
    BiLogoInstagram,
    BiLogoLinkedinSquare,
    BiLogoTwitter,
} from "react-icons/bi";
import { FiBriefcase, FiSmartphone, FiShield } from "react-icons/fi";
import { GoGlobe } from "react-icons/go";

export const endpointUrl = "https://sprinters-api.onrender.com/v1";

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
        href_2: "/case_study/[index]",
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
        ans: "You can reach out to us through our Contact Page or email at sprinters.techagency@gmail.com Our team is ready to assist you with any questions or requirements.",
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
        ans: "To request a quote, please visit our Get in touch page and fill out the provided form. We will promptly review your requirements and get in touch with you.",
    },
];

export const footerData = {
    company: [
        { text: "About Us", href: "/about" },
        { text: "Services", href: "/service" },
        { text: "Case Study", href: "/case_study" },
        { text: "FAQs", href: "/faqs" },
        { text: "Contact Info", href: "/contact" },
    ],
    support: [
        { text: "Help", href: "/contact" },
        { text: "Legal", href: "/policies" },
    ],
    transparency: [
        { text: "Terms of use", href: "/terms" },
        { text: "Privacy Policy", href: "/policies" },
        { text: "Complaints", href: "/contact" },
    ],
    socials: [
        {
            icon: BiLogoFacebookCircle,
            link: "https://www.facebook.com/profile.php?id=61554202665350&mibextid=LQQJ4d",
        },

        {
            icon: BiLogoLinkedinSquare,
            link: "https://www.linkedin.com/company/sprinters-technologies-limited/",
        },
        {
            icon: BiLogoInstagram,
            link: "https://www.instagram.com/sprinterstech?igsh=YTQwZjQ0NmI0OA==",
        },
        { icon: BiLogoTwitter, link: "https://x.com/sprinterstech?s=21" },
    ],
};

export const ProjectData = [
    {
        title: "Okada",
        des: "A mobile application that facilitates users in contacting logistics companies and booking their delivery services.",
        projectLink: "/case_study/payme",
        imgUrl: "/images/p_4.svg",
        tags: ["Mobile", "", "Data Analytics"],
    },
    {
        title: "Payme",
        des: "A platform enabling users to receive payments from friends and loved ones, while also allowing users to request money from one another.",
        projectLink: "/case_study/payme",
        imgUrl: "/images/p_1.svg",
        tags: ["Mobile", "Automation", "Cybersecurity", "Data Analytics"],
    },
    {
        title: "Sale View",
        des: "A platform to manage sales, view business analytics and monitor progress.",
        projectLink: "/case_study/payme",
        imgUrl: "/images/p_2.svg",
        tags: ["Web", "Automation", "", "Data Analytics"],
    },
    {
        title: "Artify",
        des: "A platform that enables users to access a rich library of art tutorial videos and resources.",
        projectLink: "/case_study/payme",
        imgUrl: "/images/p_3.svg",
        tags: ["Web", "", "Cybersecurity", "Data Analytics"],
    },
];

export const ServiceDetailData = [
    {
        title: "Tech",
        img: "/images/s_1.png",
        normalTitle: "Tech",
        editableTitle: "consultation",
        des: "Sprinters Agency's Tech Consultancy division is your strategic partner in navigating the digital landscape, offering expert guidance. We specialize in crafting clear paths to success through comprehensive Technology Roadmaps, aligning with your business objectives.",
        des2: "We lead in Digital Transformation, ensuring seamless transitions into the digital age. At the core is efficient IT Optimization—analyzing your infrastructure, identifying enhancements and cost reductions. Success is the result of Strategic Technology Planning, collaborating closely to enhance your competitive edge.",
    },
    {
        title: "Web development",
        img: "/images/s_2.png",
        normalTitle: "Web",
        editableTitle: "development",
        des: "Sprinters Agency specializes in creating visually appealing and highly functional websites that align with your brand identity and business objectives. Our expertise extends to responsive web development, ensuring optimal performance across desktops, tablets, and mobile phones.",
        des2: "Additionally, we provide end-to-end e-commerce solutions, enabling the establishment or enhancement of your online store with features like product catalogs, shopping carts, and secure payment gateways. To empower you further, we offer Content Management System (CMS) integration, allowing easy management and updating of your website’s content to keep it fresh and relevant.",
    },
    {
        title: "Mobile development",
        img: "/images/s_3.png",
        normalTitle: "Mobile",
        editableTitle: "development",
        des: "Sprinters Agency excels in iOS and Android app development, crafting custom mobile applications tailored to meet your unique business needs and user expectations. Our expertise extends to cross-platform development, ensuring your app reaches a broader audience.",
        des2: "With a focus on user-centric design, our mobile apps prioritize intuitive interfaces and excellent user experiences to keep your audience engaged. Additionally, we prioritize security, incorporating stringent measures to protect your mobile app and data, ensuring compliance with privacy regulations.",
    },
    {
        title: "Automation",
        img: "/images/s_4.png",
        normalTitle: "",
        editableTitle: "Automation",
        des: "Sprinters Agency provides comprehensive solutions to elevate your business processes. Our expertise includes Business Process Automation to streamline operations, reduce manual tasks, and improve efficiency.",
        des2: "Leveraging the power of AI and machine learning, we make data-driven decisions and create personalized experiences for your users. Additionally, enhance customer support and engagement with AI-powered chatbots and virtual assistants.",
    },
    {
        title: "Cybersecurity",
        img: "/images/s_5.png",
        normalTitle: "",
        editableTitle: "Cybersecurity",
        des: "Sprinters Agency conducts comprehensive Security Audits and Assessments, identifying vulnerabilities and risks in your digital infrastructure. We prioritize Data Protection through the implementation of encryption, security authentication processes, and access controls to safeguard sensitive information.",
        des2: " In the event of a security incident, our team responds promptly with Incident Response, mitigating the impact and preventing future occurrences. Additionally, we provide Compliance and Regulatory Assistance, helping your business adhere to cybersecurity regulations and standards.",
    },
    {
        title: "Data ",
        normalTitle: "Data",
        img: "/images/s_6.png",
        editableTitle: "Analytics",
        des: "Sprinters Agency offers a comprehensive exploration and collection of diverse data from structured, unstructured sources, IoT devices, and social media which is followed by rigorous data cleaning and preparation using industry-standard techniques to ensure data accuracy. Leveraging advanced analytics such as predictive modeling and AI, our team uncovers insights driving innovation, operational optimization, and improved customer experiences.",
        des2: "We transform complex data into informative visualizations and facilitate easy interpretation and actionable insights. Additionally, our expertise extends to crafting custom dashboards providing real-time access to crucial performance indicators, enabling swift monitoring for informed decision-making",
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
        normalText_2: "  Partner  ",
        editedText: " Tech Solutions ",
        des: "We specialize in Tech consultation, web development, mobile development, automation, cybersecurity, and data analytics. Let us bring your digital dreams to life!",
        btnfunc: "/about",
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
        normalText_1: "",
        normalText_2: " at Sprinters Technologies!",
        editedText: " About us",
        des: "We’ve Got You Covered",
        btnfunc: null,
    },
    caseStudy: {
        theme: "light",
        activeNav: "/case_study",
        normalText_1: "Case Studies, Showcasing Some of Our ",
        normalText_2: "",
        projectTitle: "Case Studies ",
        projectSubTitle: "Showcasing Some of Our Finest Works",
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

    contact: {
        theme: "light",
        activeNav: "/contact",
        normalText_1: "Let’s ",
        normalText_2: "",
        editedText: "Connect",
        des: "We are eager to hear from you! Whether you have a project in mind, need assistance, or simply want to learn more about our services, drop us a message",
        btnfunc: null,
    },

    terms: {
        theme: "light",
        activeNav: "/terms",
        normalText_1: "Our  ",
        normalText_2: "",
        editedText: "Terms of Use",
        des: "We value your privacy",
        btnfunc: null,
    },
    policies: {
        theme: "light",
        activeNav: "/terms",
        normalText_1: "Our  ",
        normalText_2: "",
        editedText: "Privacy Policies",
        des: "We value your privacy",
        btnfunc: null,
    },
    blogs: {
        theme: "light",
        activeNav: "/blogs",
        normalText_1: "Our  ",
        normalText_2: "",
        editedText: "Blog",
        des: "Explore our library of expert knowledge - everything from skill development to business growth.",
        btnfunc: null,
    },
};

export const clientsData = [
    {
        name: "Usman",
        role: "Art director",
        imgUrl: "/images/t_1.png",
        activeNo: 1,
        comment:
            "The app's interface is incredibly user-friendly, allowing me to effortlessly compare services and prices from various providers in just a few taps. I no longer have to waste time jumping between different websites or making endless phone calls. Okada truly provides a centralized platform to streamline my logistics needs.",
    },
    {
        name: "Janet",
        role: "WIldlife photographer",
        imgUrl: "/images/t_2.png",
        activeNo: 2,
        comment:
            "Payme has truly simplified the way I handle my business transactions. With just a few taps on their app, I can effortlessly process payments and track my sales. The interface is clean and intuitive, making it a joy to use. I'm grateful for the convenience PAYME offers.",
    },
    {
        name: "Esther",
        role: "Creative director",
        imgUrl: "/images/t_3.png",
        activeNo: 3,
        comment:
            "Since implementing Sale view into our sales process, we've seen a significant improvement in our team's efficiency and productivity. The app provides real-time updates, analytics, and intuitive features that have helped us streamline our operations. Thanks to Sale view, our sales have soared.",
    },
    {
        name: "Emma",
        role: "Business owner",
        imgUrl: "/images/t_4.png",
        activeNo: 4,
        comment:
            "The extensive library of tutorial videos and resources on Artify is unlike anything I have ever seen before. The range of topics covered is truly impressive, ensuring that artists of all skill levels can find valuable content to learn from. Whether you're interested in painting, sketching, or even digital art, Artify has got you covered.",
    },
];

export const caseStudy = {
    Payme: {
        theme: "light",
        activeNav: "/",
        img: "/test.png",
        // img: "/images/pb_2.svg",
        projectTitle: "Payme",
        projectSubTitle: "Request and Send Money With Ease.",
        clientName: "Client Name",
        projectCategory: "Mobile Application",
        projectTimeline: "5 months",
        des: "A mobile application that facilitates users in contacting logistics companies and booking their delivery services.",
        serviceProvided:
            "Our mission is deeply rooted in our belief that every business, regardless of its size or industry, should have access to world-class technological solutions.",
        projectOverview:
            "Our mission is deeply rooted in our belief that every business, regardless of its size or industry, should have access to world-class technological solutions. We strive to empower organizations to achieve their goals by delivering transformative digital experiences, enhancing security, and providing data-driven insights.",
        projectProblem:
            "Our mission is deeply rooted in our belief that every business, regardless of its size or industry, should have access to world-class technological solutions. We strive to empower organizations to achieve their goals by delivering transformative digital experiences, enhancing security, and providing data-driven insights.",
        projectSolution:
            "Our mission is deeply rooted in our belief that every business, regardless of its size or industry, should have access to world-class technological solutions. We strive to empower organizations to achieve their goals by delivering transformative digital experiences, enhancing security, and providing data-driven insights.",

        btnfunc: "",
    },
};

export const blogData = [
    {
        id: 1,
        tag: "Management",
        title: "Bill Walsh leadership lessons",
        des: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        authorImg: "/images/b_1.png",
        authorName: "Alec Whitten",
    },
    {
        id: 2,
        tag: "Product",
        title: "PM mental models",
        des: "Mental models are simple expressions of complex processes or relationships.",
        authorImg: "/images/b_2.png",
        authorName: "Demi WIlkinson",
    },
    {
        id: 3,
        tag: "Design",
        title: "What is Wireframing?",
        des: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        authorImg: "/images/b_3.png",
        authorName: "Candice Wu",
    },
];

// async function makeApiRequest() {
//     const endpointUrl = "https://api.example.com/data"; // Replace with your actual API endpoint URL

//     const payload = {
//         key1: "value1", // Replace with your actual data to send in the request body
//         key2: "value2",
//     };

//     try {
//         const options = {
//             method: "POST",
//             body: JSON.stringify(payload), // Convert data to JSON format
//             headers: {
//                 "Content-Type": "application/json", // Specify JSON content type
//             },
//         };

//         const response = await fetch(endpointUrl, options);

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json(); // Parse the JSON response

//         console.log("Success! API response:", data);
//     } catch (error) {
//         console.error("Error sending data:", error);
//     }
// }

// // Call the function to make the request
// makeApiRequest();

//  async function makeApiRequest() {
//      const endpointUrl = "https://sprinters-api.onrender.com/"; // Replace with your actual API endpoint URL

//      try {
//          const response = await fetch(endpointUrl);

//          if (!response.ok) {
//              throw new Error(`HTTP error! Status: ${response.status}`);
//          }

//          const data = await response.json(); // Parse the JSON response

//          console.log("Success! API response:", data);
//      } catch (error) {
//          console.error("Error fetching data:", error);
//      }
//  }
