import { Box, Image, Flex, Text, Stack, Icon } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";
import { BiSolidCheckboxChecked } from "react-icons/bi";

const GetToKnowUs = () => {
    return (
        <Box py={["4rem", "5rem", "7rem"]}>
            <Container>
                <Flex
                    flexDir={["column", null, "row"]}
                    gap={["2rem", null, "3rem", null, "8rem"]}
                >
                    <Box w={["100%"]} data-aos="slide-right">
                        <Image src="/images/about.png" alt="about us Image" />
                    </Box>
                    <Stack w={["100%"]} spacing="1.5rem" data-aos="slide-left">
                        <Text
                            fontSize={["2rem", null, "3rem"]}
                            fontWeight="700"
                        >
                            Get to{" "}
                            <Text as="i" color="primary_10">
                                Know Us
                            </Text>
                        </Text>

                        <Text fontSize={["1.125rem"]} lineHeight={["155.556%"]}>
                            Sprinters technologies was born out of a vision to
                            bridge the gap between technology and human
                            potential. We believe that technology when harnessed
                            intelligently, can revolutionize businesses, elevate
                            experiences, and transform the way we live and work.
                            Our core values include:
                        </Text>

                        <Stack spacing="1.5rem" maxW={["25.8rem"]}>
                            {data.map((item) => {
                                return (
                                    <Flex
                                        gap="0.5rem"
                                        align={["center"]}
                                        key={item}
                                    >
                                        <Icon
                                            color="primary_10"
                                            as={BiSolidCheckboxChecked}
                                            boxSize={"1.8rem"}
                                        />
                                        <Text fontSize="1.125rem">{item}</Text>
                                    </Flex>
                                );
                            })}
                        </Stack>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    );
};

export default GetToKnowUs;

const data = [
    "We pursue excellence in everything we do.",
    "We embrace innovation as a way of life.",
    "In a world where data is a prime target, we take security seriously.",
    "Our customized solutions are tailored to your specific requirements.",
];
