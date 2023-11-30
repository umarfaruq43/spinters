import { Box, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../Container";

const WhyChooseUs = () => {
    return (
        <Box py={["4rem", "5rem", "6rem"]} bgColor="primary_30">
            <Container>
                <Box>
                    <Text
                        fontSize={["2rem", null, "3rem"]}
                        fontWeight="700"
                        textAlign={"center"}
                    >
                        Why{" "}
                        <Text as="i" color="primary_10">
                            Choose
                        </Text>{" "}
                        Us
                    </Text>

                    <Text
                        mt="1.5rem"
                        color="dark_1"
                        maxW="63.5rem"
                        fontSize={"1.1rem"}
                        mx="auto"
                        textAlign={"center"}
                    >
                        At Sprinters Technologies, we are more than just a
                        technology agency. With our team of design thinkers,
                        software engineers, data analysts, and full-stack
                        developers, we collaborate with you to get to know your
                        business and bring your big ideas to life, pushing the
                        boundaries of what’s possible in the digital world
                    </Text>
                </Box>
                <Box mt="4.5rem">
                    <SimpleGrid
                        columns={[1, 2, 3]}
                        spacing={["2rem", null, "4rem", "7.88rem"]}
                    >
                        {data.map((item) => {
                            return (
                                <Stack key={item.title} spacing="1.5rem">
                                    <Image
                                        src={item.imgPath}
                                        alt="buld"
                                        boxSize="5rem"
                                    />

                                    <Text
                                        fontSize={"1.575rem"}
                                        fontWeight={600}
                                    >
                                        {item.title}
                                    </Text>

                                    <Text maxW="19.4rem">{item.des}</Text>
                                </Stack>
                            );
                        })}
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    );
};

export default WhyChooseUs;

const data = [
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
