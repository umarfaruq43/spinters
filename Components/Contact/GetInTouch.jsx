import { Box, Flex, Text, Image, Stack, Icon } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";

const GetInTouch = () => {
    return (
        <Box>
            <Box py={["4rem", "5rem", "7rem"]}>
                <Container>
                    <Flex
                        flexDir={["column", null, "row"]}
                        gap={["2rem", null, "3rem", null, "8rem"]}
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
                                Get{" "}
                                <Text as="i" color="primary_10">
                                    in touch
                                </Text>
                            </Text>

                            <Text
                                fontSize={["1.125rem"]}
                                lineHeight={["155.556%"]}
                                color="light_6"
                            >
                                Our friendly team would love to hear from you.
                            </Text>

                            <Stack spacing="1.5rem" maxW={["25.8rem"]}></Stack>
                        </Stack>
                    </Flex>
                </Container>
            </Box>
        </Box>
    );
};

export default GetInTouch;
