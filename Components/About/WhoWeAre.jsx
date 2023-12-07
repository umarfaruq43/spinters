import { Box, Image, Flex, Text, Stack } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";

const WhoWeAre = () => {
    return (
        <Box pt={["4rem", "5rem", "7rem"]}>
            <Container>
                <Flex
                    flexDir={["column", null, "row"]}
                    gap={["2rem", null, "3rem", null, "8rem"]}
                    align="center"
                >
                    <Box w={["100%"]}>
                        <Image
                            src="/images/whoWeAre.svg"
                            alt="about us Image"
                        />
                    </Box>
                    <Stack w={["100%"]} spacing="1.5rem">
                        <Text
                            fontSize={["2rem", null, "3rem"]}
                            fontWeight="700"
                        >
                            Who{" "}
                            <Text as="i" color="primary_10">
                                We Are
                            </Text>
                        </Text>

                        <Text fontSize={["1.125rem"]} lineHeight={["155.556%"]}>
                            Sprinters technologies was born out of a vision to
                            bridge the gap between technology and human
                            potential. We believe that technology when harnessed
                            intelligently, can revolutionize businesses, elevate
                            experiences, and transform the way we live and work.
                        </Text>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    );
};

export default WhoWeAre;

const data = [
    "We pursue excellence in everything we do.",
    "We embrace innovation as a way of life.",
    "In a world where data is a prime target, we take security seriously.",
    "Our customized solutions are tailored to your specific requirements.",
];
