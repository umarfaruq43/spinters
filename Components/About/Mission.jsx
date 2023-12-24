import { Box, Image, Flex, Text, Stack, Icon } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";
import { BiSolidCheckboxChecked } from "react-icons/bi";

const Mission = ({ about = "false" }) => {
    return (
        <Box pt={["4rem", "5rem", "7rem"]} bgColor="white">
            <Container>
                <Flex
                    flexDir={["column", null, "row-reverse"]}
                    gap={["2rem", null, "3rem", null, "8rem"]}
                    align="center"
                >
                    <Box w={["100%"]}>
                        <Image
                            src="/images/whoWeAre.svg"
                            alt="about us Image"
                        />
                    </Box>
                    <Box w={["100%"]}>
                        <Text
                            fontSize={["2rem", null, "3rem"]}
                            fontWeight="700"
                        >
                            Our{" "}
                            <Text as="i" color="primary_10">
                                Mission & Vision
                            </Text>
                        </Text>

                        <Stack spacing="1.5rem" mt={["1.5rem"]}>
                            <Text>
                                Our mission is deeply rooted in our belief that
                                every business, regardless of its size or
                                industry, should have access to world-class
                                technological solutions. We strive to empower
                                organizations to achieve their goals by
                                delivering transformative digital experiences,
                                enhancing security, and providing data-driven
                                insights.
                            </Text>

                            <Text>
                                Our vision is to be the catalyst that propels
                                businesses and organizations into a digitally
                                transformed future. We envision a world where
                                technology becomes a seamless and strategic
                                extension of your organization, where
                                data-driven decisions lead to exponential
                                growth, and where cybersecurity is an
                                impenetrable shield. Our vision is to make this
                                digital utopia a reality for each of our
                                clients.
                            </Text>
                        </Stack>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Mission;

const data = [
    "We pursue excellence in everything we do.",
    "We embrace innovation as a way of life.",
    "In a world where data is a prime target, we take security seriously.",
    "Our customized solutions are tailored to your specific requirements.",
];
