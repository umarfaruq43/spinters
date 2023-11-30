import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../Container";

const Testimonies = () => {
    return (
        <Box pb={["4rem", "5rem", "6rem"]} bgColor="white">
            <Container>
                <Box>
                    <Text
                        fontSize={["2rem", null, "3rem"]}
                        fontWeight="700"
                        textAlign={"center"}
                    >
                        What{" "}
                        <Text as="i" color="primary_10">
                            Our Clients
                        </Text>{" "}
                        Say
                    </Text>
                </Box>
                <Box mt={["2rem", "4.5rem"]}>{/*  */}</Box>
            </Container>
        </Box>
    );
};

export default Testimonies;
