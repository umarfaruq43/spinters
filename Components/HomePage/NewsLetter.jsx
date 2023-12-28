import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";

const NewsLetter = () => {
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
            </Container>
        </Box>
    );
};

export default NewsLetter;
