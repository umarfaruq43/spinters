import { Box, Button, Flex, Stack, Text, Image, Badge } from "@chakra-ui/react";
import React, { useState } from "react";
import Container from "../common/Container";
import Navbar from "../common/Navbar";
import { format } from "date-fns";

const BlogHero = ({ heroData, type = "normal" }) => {
    const originalDate = heroData?.createdAt;

    // Assuming you want to preserve the year as 2024:
    const formattedDate = format(
        new Date(originalDate || "2024-01-25T00:46:29.599Z"),
        "dd MMM yyyy"
    );
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
                                Published {formattedDate}
                            </Text>
                            <Text letterSpacing={"-0.09rem"} mt="0.75rem">
                                {/* <Text as="i" color="primary_10"> */}
                                {heroData?.title}
                                {/* </Text> */}
                            </Text>

                            <Text
                                mt="1.5rem"
                                color="light_6"
                                fontSize="1.25rem"
                                fontWeight={"400"}
                            >
                                {heroData?.description}
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
                                        {heroData?.tags?.[0]}
                                    </Badge>

                                    {heroData?.tags?.length > 1 && (
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
                                            {heroData?.tags?.[1]}
                                        </Badge>
                                    )}

                                    {heroData?.tags?.length > 2 && (
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
                                            {heroData?.tags?.[2]}
                                        </Badge>
                                    )}
                                </Flex>
                            </Box>
                        </Box>
                    </Stack>

                    <Box pt="4rem">
                        {/* <Image
                            src={heroData?.image?.imageUrl}
                            alt="hero image"
                            w="100%"
                            h={["20rem", "35.1875rem", "100%"]}
                            maxH="36.43rem"
                            objectFit={"cover"}
                            rounded={type === "normal" ? "0.9375rem" : "2rem"}
                        /> */}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default BlogHero;
