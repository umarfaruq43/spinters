import { Box, Button, Flex, Stack, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Container from "../common/Container";
import Navbar from "../common/Navbar";
import { motion } from "framer-motion";

const Hero = ({ heroData, type = "normal" }) => {
    return (
        <Box
            bgColor={heroData?.theme === "dark" ? "dark_2" : "light_1"}
            position="relative"
        >
            <Container>
                <Box py={["2rem", "3rem", "4rem"]} className="hero">
                    <Navbar
                        activeNav={heroData?.activeNav}
                        theme={heroData?.theme}
                    />
                    <Stack
                        mt={["3rem", "4rem", "5rem", "6rem"]}
                        bgColor={""}
                        spacing="1.5rem"
                        // maxW="70rem"
                        mx="auto"
                    >
                        <Box
                            fontSize={["2rem", "3rem", "4.5rem"]}
                            color={
                                heroData?.theme === "dark" ? "white" : "dark_2"
                            }
                            fontWeight={"700"}
                            maxW="70rem"
                            mx="auto"
                            textAlign={"center"}
                            // lineHeight={"5.625rem"}
                        >
                            {/* <Text>Welcome to Sprinters,</Text> */}
                            {type === "normal" && (
                                <Text letterSpacing={"-0.09rem"}>
                                    {heroData?.normalText_1}{" "}
                                    <Text as="i" color="primary_10">
                                        {heroData?.editedText}{" "}
                                    </Text>
                                    {heroData?.normalText_2}
                                </Text>
                            )}

                            {type === "caseStudy" && (
                                <Text letterSpacing={"-0.09rem"}>
                                    <Text as="i" color="primary_10">
                                        {heroData?.projectTitle}{" "}
                                    </Text>
                                    - {heroData?.projectSubTitle}
                                </Text>
                            )}
                        </Box>
                        {type === "homePage" && (
                            <Text
                                data-aos="zoom-in"
                                letterSpacing={"-0.09rem"}
                                fontSize={["2rem", "3rem", "4.5rem"]}
                                color={
                                    heroData?.theme === "dark"
                                        ? "white"
                                        : "dark_2"
                                }
                                fontWeight={"700"}
                                // maxW="70rem"
                                mx="auto"
                                textAlign={"center"}
                            >
                                Welcome to Sprinters Technologies, <br /> Your
                                <Text as="i" color="primary_10">
                                    Tech Solutions{" "}
                                </Text>
                                Partner
                            </Text>
                        )}

                        <Text
                            data-aos="zoom-in"
                            color={
                                heroData?.theme === "dark"
                                    ? "light_1"
                                    : "dark_2"
                            }
                            textAlign={"center"}
                            fontSize={["", "", "1.125rem"]}
                            opacity="0.85"
                            pb="1rem"
                            maxW={type === "homePage" ? "78rem" : "50.5rem"}
                            mx="auto"
                        >
                            {heroData?.des}
                        </Text>

                        {heroData?.btnfunc && (
                            <Button
                                data-aos="zoom-in"
                                display={"block"}
                                mx="auto"
                                py="1rem"
                                px="1.75rem"
                                maxW="10rem"
                                h="auto"
                                fontSize={["1rem", "1.125rem"]}
                                bgColor={"primary_10"}
                                color="white"
                                _focus={{}}
                                _hover={{ opacity: "0.9" }}
                                _active={{ opacity: "0.8" }}
                                as="a"
                                href={heroData?.btnfunc}
                            >
                                Explore More
                            </Button>
                        )}
                    </Stack>

                    <Box pt="4rem" data-aos="zoom-in">
                        <Image
                            src={heroData?.img || "/images/heroimg.png"}
                            alt="hero image"
                            w="100%"
                            maxW="100%"
                            h={["20rem", "35.1875rem", "100%"]}
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
