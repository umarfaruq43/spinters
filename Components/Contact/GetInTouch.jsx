import { Box, Flex, Text, Image, Stack, Icon } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";
import ContactForm from "./ContactForm";

const GetInTouch = () => {
    return (
        <Box bgColor="light_7" id="form">
            <Box py={["4rem", "5rem", "7rem"]}>
                <Container>
                    <Flex
                        align="center"
                        flexDir={["column", null, "row"]}
                        gap={["2rem", null, "3rem", null, "8rem"]}
                    >
                        <Box w={["100%"]}>
                            <Image
                                src="/images/whoWeAre.png"
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

                            <ContactForm />
                        </Stack>
                    </Flex>
                </Container>
            </Box>
        </Box>
    );
};

export default GetInTouch;
