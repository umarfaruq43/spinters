import { Box, Image, Flex, Text, Stack, Icon } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";
import { BiSolidCheckboxChecked } from "react-icons/bi";

const CoreValues = ({ about = "false" }) => {
    return (
        <Box py={["4rem", "5rem", "7rem"]} bgColor="primary_30">
            <Container>
                <Flex
                    flexDir={["column", null, "row-reverse"]}
                    gap={["2rem", null, "3rem", null, "8rem"]}
                    align="center"
                >
                    <Box w={["100%"]}>
                        <Image
                            src="/images/our_value.png"
                            alt="about us Image"
                        />
                    </Box>
                    <Box w={["100%"]}>
                        {about ? (
                            <Text
                                fontSize={["2rem", null, "3rem"]}
                                fontWeight="700"
                            >
                                Our{" "}
                                <Text as="i" color="primary_10">
                                    Core Values
                                </Text>
                            </Text>
                        ) : (
                            <Text
                                fontSize={["2rem", null, "3rem"]}
                                fontWeight="700"
                            >
                                Who{" "}
                                <Text as="i" color="primary_10">
                                    We Are
                                </Text>
                            </Text>
                        )}
                        <Stack spacing="1.5rem" mt={["1.5rem"]}>
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
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default CoreValues;

const data = [
    "We pursue excellence in everything we do.",
    "We embrace innovation as a way of life.",
    "In a world where data is a prime target, we take security seriously.",
    "Our customized solutions are tailored to your specific requirements.",
];
