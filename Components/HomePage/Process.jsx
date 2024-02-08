import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";

const Process = ({ bg }) => {
    return (
        <Box py={["4rem", "5rem", "6rem"]} bgColor={bg || "white"}>
            <Container>
                <Box>
                    <Text
                        fontSize={["2rem", null, "3rem"]}
                        fontWeight="700"
                        textAlign={"center"}
                        data-aos="fade-up"
                    >
                        Our seamless{" "}
                        <Text as="i" color="primary_10">
                            Process
                        </Text>{" "}
                    </Text>

                    <Text
                        data-aos="fade-up"
                        mt="1.5rem"
                        color="dark_1"
                        maxW="63.5rem"
                        fontSize={"1.1rem"}
                        mx="auto"
                        textAlign={"center"}
                    >
                        At Sprinters Agency, we are more than just a technology
                        agency. With our team of design thinkers, software
                        engineers, data analysts, and full-stack developers, we
                        collaborate with you to get to know your business and
                        bring your big ideas to life, pushing the boundaries of
                        what’s possible in the digital world.
                    </Text>
                </Box>
                <Box mt={["2rem", "4.5rem"]} data-aos="zoom-out-up">
                    <Image src="/images/process.svg" alt="process image" />
                </Box>
            </Container>
        </Box>
    );
};

export default Process;
