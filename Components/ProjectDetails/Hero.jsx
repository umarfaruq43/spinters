import { Box, Button, Flex, Stack, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Container from "../common/Container";
import Navbar from "../common/Navbar";

const Hero = ({ heroData, type = "normal" }) => {
    const theme = "light";
    return (
        <Box bgColor={theme === "dark" ? "dark_2" : "light_1"}>
            <Container>
                <Box py={["2rem", "3rem", "4rem"]}>
                    <Navbar activeNav={""} theme={theme} />
                    <Stack
                        mt={["3rem", "4rem", "5rem", "6rem"]}
                        bgColor={""}
                        spacing="1.5rem"
                        maxW="70rem"
                        mx="auto"
                    >
                        <Box
                            fontSize={["2rem", "3rem", "4.5rem"]}
                            color={theme === "dark" ? "white" : "dark_2"}
                            fontWeight={"700"}
                            maxW="70rem"
                            mx="auto"
                            textAlign={"center"}
                            // lineHeight={"5.625rem"}
                        >
                            {type === "caseStudy" && (
                                <Text letterSpacing={"-0.09rem"}>
                                    <Text as="i" color="primary_10">
                                        {heroData?.projectTitle}{" "}
                                    </Text>
                                    - {heroData?.projectSubtitle}
                                </Text>
                            )}
                        </Box>

                        <Text
                            color={theme === "dark" ? "light_1" : "dark_2"}
                            textAlign={"center"}
                            fontSize={["", "", "1.125rem"]}
                            opacity="0.85"
                            pb="1rem"
                            maxW="50.5rem"
                            mx="auto"
                        >
                            {heroData?.projectDescription}
                        </Text>
                    </Stack>

                    <Box pt="4rem">
                        <Image
                            src={heroData?.coverPhoto?.imageUrl}
                            alt="hero image"
                            w="100%"
                            h={["20rem", "35.1875rem", "100%"]}
                            maxH={"35.1875rem"}
                            objectFit={"cover"}
                            rounded={type === "normal" ? "0.9375rem" : "2rem"}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
