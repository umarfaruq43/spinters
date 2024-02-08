import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";

const Location = () => {
    return (
        <Box py="4.12rem">
            <Container>
                <Flex
                    gap={["2rem", "4rem", "8rem"]}
                    flexDir={["column", null, "row"]}
                    justify={"center"}
                >
                    <Box>
                        <Text
                            fontSize={["2rem", null, "3rem"]}
                            fontWeight={600}
                        >
                            Lagos, Nigeria
                        </Text>
                    </Box>
                    <Stack>
                        <Text
                            fontSize={["1rem", null, "1.5rem"]}
                            color="gray_6"
                        >
                            CONTACT
                        </Text>{" "}
                        <Text
                            as="a"
                            href="mailto:info@sprinterstechnologies.com"
                            fontSize={["1rem", null, "1.5rem"]}
                            color="dark_1"
                            fontWeight={"500"}
                        >
                            info@sprinterstechnologies.com
                        </Text>{" "}
                        <Text
                            as="a"
                            href="tel:+234910227406"
                            fontSize={["1rem", null, "1.5rem"]}
                            color="dark_1"
                            fontWeight={"500"}
                        >
                            +234 (911) 022 7406
                        </Text>
                    </Stack>
                </Flex>
            </Container>
        </Box>
    );
};

export default Location;
