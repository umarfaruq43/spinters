import { Box, Button, Flex, Stack, Text, Image, Badge } from "@chakra-ui/react";
import React, { useState } from "react";
import Container from "../common/Container";
import Navbar from "../common/Navbar";

const BlogHero = ({ heroData, type = "normal" }) => {
    return (
        <Box bgColor={heroData?.theme === "dark" ? "dark_2" : "light_1"}>
            <Container>
                <Box py={["2rem", "3rem", "4rem"]}>
                    <Navbar
                        activeNav={heroData?.activeNav}
                        theme={heroData?.theme}
                    />
                    <Stack
                        mt={["3rem", "4rem", "5rem", "6rem"]}
                        bgColor={""}
                        spacing="1.5rem"
                        maxW="70rem"
                        mx="auto"
                    >
                        <Box
                            fontSize={["2rem", "3rem", "4.5rem"]}
                            color={
                                heroData?.theme === "dark" ? "white" : "dark_2"
                            }
                            fontWeight={"700"}
                            maxW="60rem"
                            mx="auto"
                            textAlign={"center"}
                        >
                            <Text
                                fontSize="1rem"
                                fontWeight="600"
                                color="primary_60"
                            >
                                Published 20 Jan 2022
                            </Text>
                            <Text letterSpacing={"-0.09rem"} mt="0.75rem">
                                {/* <Text as="i" color="primary_10"> */}
                                {"UX review presentations"}
                                {/* </Text> */}
                            </Text>

                            <Text
                                mt="1.5rem"
                                color="light_6"
                                fontSize="1.25rem"
                                fontWeight={"400"}
                            >
                                How do you create compelling presentations that
                                wow your colleagues and impress your managers?
                            </Text>

                            <Box>
                                <Flex
                                    mt="2.5rem"
                                    align="center"
                                    justify="center"
                                    gap="0.5rem"
                                >
                                    <Badge
                                        px="0.62rem"
                                        rounded="1rem"
                                        py="0.12rem"
                                        fontSize="0.875rem"
                                        fontWeight="500"
                                        color="primary_60"
                                        bgColor="primary_30"
                                        textTransform={"capitalize"}
                                    >
                                        Design
                                    </Badge>

                                    <Badge
                                        px="0.62rem"
                                        rounded="1rem"
                                        py="0.12rem"
                                        fontSize="0.875rem"
                                        fontWeight="500"
                                        color="blue_1"
                                        bgColor="blue_2"
                                        textTransform={"capitalize"}
                                    >
                                        Research
                                    </Badge>

                                    <Badge
                                        px="0.62rem"
                                        rounded="1rem"
                                        py="0.12rem"
                                        fontSize="0.875rem"
                                        fontWeight="500"
                                        color="pink_1"
                                        bgColor="pink_2"
                                        textTransform={"capitalize"}
                                    >
                                        Presentation
                                    </Badge>
                                </Flex>
                            </Box>
                        </Box>
                    </Stack>

                    <Box pt="4rem">
                        <Image
                            src={heroData?.img || "/images/heroimg.svg"}
                            alt="hero image"
                            w="100%"
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

export default BlogHero;
