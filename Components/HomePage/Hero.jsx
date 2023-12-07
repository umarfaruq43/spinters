import { Box, Button, Flex, Stack, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Container from "../common/Container";
import Navbar from "../common/Navbar";

const Hero = ({ heroData }) => {
    const {
        theme,
        activeNav,
        normalText_1,
        normalText_2,
        editedText,
        des,
        btnfunc,
    } = heroData;
    return (
        <Box bgColor={theme === "dark" ? "dark_2" : "light_1"}>
            <Container>
                <Box py={["2rem", "3rem", "4rem"]}>
                    <Navbar activeNav={activeNav} theme={theme} />
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
                        >
                            {/* <Text>Welcome to Sprinters,</Text> */}

                            <Text letterSpacing={"-0.09rem"}>
                                {normalText_1}{" "}
                                <Text as="i" color="primary_10">
                                    {editedText}{" "}
                                </Text>
                                {normalText_2}
                            </Text>
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
                            {des}
                        </Text>

                        {btnfunc && (
                            <Button
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
                                href={btnfunc}
                            >
                                Explore More
                            </Button>
                        )}
                    </Stack>

                    <Box pt="4rem">
                        <Image src="/images/heroimg.svg" alt="hero image" />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
