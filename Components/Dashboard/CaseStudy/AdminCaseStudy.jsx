import {
    Box,
    Button,
    Flex,
    SimpleGrid,
    Skeleton,
    Stack,
    Text,
    useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdminBlogCard from "./AdminCaseStudyCard";
// import BlogForm from "./BlogForm";
import AdminCaseStudyCard from "./AdminCaseStudyCard";
import CaseStudyForm from "./CaseStudyForm";
import { endpointUrl } from "@/lib/data";

const AdminCaseStudy = () => {
    const [addProject, setAddProject] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [project, setProject] = useState([]);
    const toast = useToast();

    async function fetchProjects() {
        setIsLoading(true);
        const url = `${endpointUrl}/case-study`;

        try {
            const options = {
                method: "GET",
            };
            const response = await fetch(url, options);
            const data = await response.json(); // Parse the JSON response

            if (!response.ok) {
                toast({
                    title: data.message,
                    status: "error",
                    position: "top-left",
                });
            } else {
                setProject(data?.data);
            }
        } catch (error) {
            console.error("Error sending data:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProjects();
    }, []);
    console.log(project);

    return (
        <Box py="2rem">
            <Flex align="center" justify="space-between">
                <Text fontSize={["2rem", "3rem"]}>
                    {addProject ? "Case Study Form" : "Case Study"}
                </Text>
                <Button
                    _hover={{}}
                    _active={{}}
                    _focus={{}}
                    border="1px"
                    borderColor={addProject ? "red.500" : "primary_10"}
                    color={addProject ? "red.500" : "primary_10"}
                    bg="transparent"
                    fontSize=".9rem"
                    onClick={() => setAddProject(!addProject)}
                >
                    {addProject ? "Cancel" : "Add Case Study"}
                </Button>
            </Flex>

            <Box mt="2rem">
                {addProject ? (
                    <CaseStudyForm
                        setAddProject={setAddProject}
                        fetchProjects={fetchProjects}
                    />
                ) : (
                    <>
                        {isLoading ? (
                            <Box mt="2rem">
                                <SimpleGrid
                                    columns={[1, 2, null, 3]}
                                    spacing={4}
                                >
                                    <Skeleton height="10rem" />
                                    <Skeleton height="10rem" />
                                    <Skeleton height="10rem" />
                                </SimpleGrid>
                            </Box>
                        ) : (
                            <SimpleGrid columns={[1, 2, null, 3]} spacing={4}>
                                {project.map((project) => (
                                    <Box key={project._id}>
                                        <AdminCaseStudyCard
                                            caseStudyData={project}
                                            setAddProject={setAddProject}
                                            fetchProjects={fetchProjects}
                                        />
                                    </Box>
                                ))}
                            </SimpleGrid>
                        )}
                    </>
                )}
            </Box>
        </Box>
    );
};

export default AdminCaseStudy;

// const data = [
//     {
//         projectTitle: "Okada",
//         projectSubTitle: "Your Delivery Bookings Made Easy.",
//         projectDescription:
//             "A mobile application that facilitates users in contacting logistics companies and booking their delivery services.",
//         projectOverview:
//             "OKada is a comprehensive platform designed to streamline and simplify the process of booking and managing deliveries with preferred logistics brands. Our role was to provide a centralized and user-friendly interface for individuals and businesses to compare, book, and track shipments efficiently.",
//         projectPro:
//             "Logistics management suffers from fragmentation and complexity. Users grapple with scattered platforms, making it tedious to compare services and book shipments efficiently. The intricate booking process, vague pricing, and a lack of transparency across providers lead to dissatisfaction and uncertainty. Our client’s requirements encompassed the need for  a unified platform,simplified booking process, real-time tracking and transparency, transparent pricing, secured payment integration, feedback and support.",
//         projectSolution:
//             "To solve the problem, we implemented the OKada Mobile App which simplifies logistics by offering a unified platform where users effortlessly compare services and prices. The app streamlines bookings, providing real-time tracking, transparent pricing, and secure payments. With a feedback system and responsive customer support, it revolutionizes logistics management for individuals and businesses, ensuring a user-friendly, efficient, and transparent experience.",
//         clientName: "Emma Justice",
//         projectTimeline: "5 months",
//         projectCategory: "Mobile Application",
//         servicesProvided:
//             "User Research, UX Design, UI Design, Interaction Design, Protyping and Testing, Development",
//         imageUrl: "",
//     },
//     {
//         projectTitle: "Payme",
//         projectSubTitle: "Request and Send Money With Ease.",
//         projectDescription: "",
//         projectOverview:
//             "Payme is a versatile payment platform designed to facilitate seamless transactions between friends and loved ones. It offers users the convenience of sending and receiving payments within their social circles while also enabling simple money requests between users.",
//         projectPro:
//             "Traditionally, managing financial exchanges within personal circles pose numerous challenges. Fragmented payment methods led to confusion and inconvenience among users using various platforms for money transfers. Additionally, the absence of a streamlined process for requesting owed funds often created discomfort and strained relationships. Existing payment platforms lacked a social context, making transactions among friends and family less intuitive and engaging.",
//         projectSolution:
//             "We implemented Payme which simplifies peer-to-peer transactions by consolidating them into a unified, socially integrated platform. It eliminates confusion caused by multiple payment methods and discomfort in requesting owed funds. With a user-friendly interface, the app fosters engagement through social elements, allowing users to add comments or notes to transactions. Payme ensures secure transactions and minimizes misunderstandings with its notification system for pending transactions or requested payments. Personalization based on user history further enriches and streamlines the payment process, revolutionizing how individuals manage financial exchanges within their personal networks.",
//         clientName: "Janet James",
//         projectTimeline: "5 months",
//         projectCategory: "Mobile Application",
//         servicesProvided:
//             "User Research, UX Design, UI Design, Interaction Design, Protyping and Testing, Development",
//         imageUrl: "",
//     },
//     {
//         projectTitle: "SaleView",
//         projectSubTitle: "Sales, Analytics, Progress. All in one.",
//         projectDescription:
//             "A platform to manage sales, view business analytics and monitor progress.",
//         projectOverview:
//             "SalesView is an integrated platform designed to streamline sales management, provide comprehensive business analytics, and facilitate real-time monitoring of sales progress. It offers businesses a centralized hub to track, analyze, and optimize their sales operations.",
//         projectPro:
//             "Businesses often grapple with fragmented sales management tools, leading to inefficiencies in overseeing their sales operations comprehensively. The absence of a centralized analytics solution further complicates matters, leaving companies without vital insights into their sales performance and market trends. Moreover, the inability to monitor sales progress in real time results in delayed responses to market shifts, hindering the agility needed to adapt sales strategies effectively.",
//         projectSolution:
//             "Our solution addresses these challenges by offering an all-encompassing solution for sales management, analytics, and progress monitoring such as Unified Sales Management, Comprehensive Business Analytics, Real-time Progress Monitoring, Customizable Dashboards, Integration Capabilities, and a user-friendly Interface.",
//         clientName: "Esther Khan",
//         projectTimeline: "6 months",
//         projectCategory: "Responsive Web Application",
//         servicesProvided:
//             "User Research, UX Design, UI Design, Responsive Design, Interaction Design, Protyping and Testing, Development",
//         imageUrl: "",
//     },
// ];
