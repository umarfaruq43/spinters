import { Box, Button, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";
import { FiBriefcase, FiSmartphone, FiShield } from "react-icons/fi";
import { GoGlobe } from "react-icons/go";

const Service = () => {
    return (
        <Box pb={["4rem", "5rem", "6rem"]}>
            <Container>
                <Box>
                    <Text
                        fontSize={["2rem", null, "3rem"]}
                        fontWeight="700"
                        textAlign={"center"}
                        maxW="49.8rem"
                        mx="auto"
                    >
                        We Offer Several{" "}
                        <Text as="i" color="primary_10">
                            Services
                        </Text>{" "}
                        in the Following Fields
                    </Text>

                    <Text
                        mt="1.5rem"
                        textAlign="center"
                        color="dark_1"
                        fontSize={"1.125rem"}
                    >
                        Discover Our Tech Services at Sprinters Agency! – We’ve
                        Got You Covered!
                    </Text>
                </Box>

                <Box mt="4.5rem">
                    <SimpleGrid columns={[1, 2, 3]} spacing={"2rem"}>
                        {data.map((item) => {
                            return (
                                <Box
                                    key={item.title}
                                    bgColor="light_2"
                                    px={["1rem", null, "1.54rem", "2rem"]}
                                    py="3.69rem"
                                    rounded="2rem"
                                    pos="relative"
                                >
                                    <Box>
                                        {item.icon && (
                                            <Icon
                                                as={item.icon}
                                                boxSize="4rem"
                                                color="primary_10"
                                            />
                                        )}

                                        {item.img && (
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                boxSize={"4rem"}
                                            />
                                        )}
                                    </Box>

                                    <Text
                                        mt="1rem"
                                        fontSize={["1.8rem", "2rem"]}
                                        fontWeight="700"
                                        maxW="15.75rem"
                                    >
                                        {item?.title}
                                    </Text>

                                    <Text
                                        mt="1.5rem"
                                        maxW={["100%", "19.56rem"]}
                                        fontSize={"1.1rem"}
                                        // minH={["auto", "13.5rem"]}
                                    >
                                        {" "}
                                        {item?.des}
                                    </Text>

                                    <Box mt="1rem" minH="3rem">
                                        <Button
                                            pos={"absolute"}
                                            bottom={"3rem"}
                                            boxShadow={
                                                "0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                                            }
                                            display={"block"}
                                            py="0.75rem"
                                            h="auto"
                                            px="1.75rem"
                                            fontSize={"1rem"}
                                            bgColor={"primary_20"}
                                            color="white"
                                            _focus={{}}
                                            _hover={{ opacity: "0.9" }}
                                            _active={{ opacity: "0.8" }}
                                            rounded="0.5rem"
                                            onClick={item.action}
                                        >
                                            Learn more
                                        </Button>
                                    </Box>
                                </Box>
                            );
                        })}
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    );
};

export default Service;

const data = [
    {
        title: "Tech Consultation",
        des: "Navigating the Digital Landscape. Our seasoned consultants provide expert guidance for technology decisions, digital transformation, IT optimization, and strategic planning. Let us lead the way.",
        action: () => console.log("ji"),
        icon: FiBriefcase,
    },
    {
        title: "Web Development",
        des: "We specialize in creating visually appealing and highly functional websites that align with your brand identity and business objectives,ensuring your website is optimized for various devices,  phones.",
        action: () => console.log("ji"),
        icon: GoGlobe,
    },
    {
        title: "Mobile Development",
        des: "We create custom mobile applications for iOS and Android platforms, designed to meet your unique business needs and user expectations. We provide both cross-platform development and user- centric designs",
        action: () => console.log("ji"),
        icon: FiSmartphone,
    },
    {
        title: "Data Analytics",
        des: "From data exploration to advanced analytics, we transform information into innovation. Our experts collect, clean, and visualize data, unlocking insights for smarter decisions with custom dashboards.",
        action: () => console.log("ji"),
        img: "/images/s_2.svg",
    },
    {
        title: "Cybersecurity",
        des: "We perform thorough cybersecurity assessments to spot vulnerabilities and risks within your digital infrastructure, we implement data encryption, security authentication process, and access controls to safeguard your sensitive information.",
        action: () => console.log("ji"),
        icon: FiShield,
    },
    {
        title: "Automation",
        des: "We offer automation solutions to streamline your business operations, reduce manual tasks, and improve efficiency. AI and Machine Learning Integration, Chatbots and Virtual Assistants.",
        action: () => console.log("ji"),
        img: "/images/s_1.svg",
    },
];
