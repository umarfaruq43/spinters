import { Box, Button, Flex, Stack, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import Container from "../Container";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <Box bgColor={"neutral_10"}>
            <Container>
                <Box py={["2rem", "3rem", "4rem"]}>
                    <Navbar activeNav={"/"} />
                    <Stack
                        mt={["3rem", "4rem", "5rem", "6rem"]}
                        bgColor={""}
                        spacing="1.5rem"
                        maxW="70rem"
                        mx="auto"
                    >
                        <Box
                            fontSize={["2rem", "3rem", "4.5rem"]}
                            color="white"
                            fontWeight={"700"}
                            textAlign={"center"}
                        >
                            <Text>Welcome to Sprinters,</Text>

                            <Text>
                                Your{" "}
                                <Text as="i" color="primary_10">
                                    Tech Solutions{" "}
                                </Text>
                                Partner
                            </Text>
                        </Box>

                        <Text
                            color="light_1"
                            textAlign={"center"}
                            fontSize={["", "", "1.125rem"]}
                            opacity="0.85"
                            pb="1rem"
                        >
                            We specialize in Tech consultation, web development,
                            mobile development, automation, cybersecurity, and
                            data analytics. Let us bring your digital dreams to
                            life!
                        </Text>

                        <Button
                            display={"block"}
                            mx="auto"
                            py="1rem"
                            px="1.75rem"
                            maxW="10rem"
                            h="3.75rem"
                            fontSize={"1.125rem"}
                            bgColor={"primary_10"}
                            color="white"
                            _focus={{}}
                            _hover={{ opacity: "0.9" }}
                            _active={{ opacity: "0.8" }}
                        >
                            Explore More
                        </Button>
                    </Stack>

                    <Box pt="4rem">
                        <Image src="/images/heroimg.svg" alt="" />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
