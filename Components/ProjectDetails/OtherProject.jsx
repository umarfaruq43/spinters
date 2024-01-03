import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";

const OtherProject = () => {
    return (
        <Box>
            <Box py={["4rem", "5rem", "6rem"]} bgColor="white">
                <Container>
                    <Text
                        fontSize={["2rem", null, "3rem"]}
                        fontWeight="700"
                        textAlign={"left"}
                    >
                        Other{" "}
                        <Text as="i" color="primary_10">
                            Projects
                        </Text>{" "}
                    </Text>

                    <SimpleGrid
                        mt="1.5rem"
                        columns={[1, 2, null, 3]}
                        spacing="2.3rem"
                    >
                        <Image
                            src={"/images/p_1.svg"}
                            alt="img"
                            w="100%"
                            h="100%"
                            maxW="100%"
                            borderRadius={"2rem"}
                            objectFit={"cover"}
                        />{" "}
                        <Image
                            src={"/images/p_2.svg"}
                            alt="img"
                            w="100%"
                            h="100%"
                            maxW="100%"
                            borderRadius={"2rem"}
                            objectFit={"cover"}
                        />{" "}
                        <Image
                            src={"/images/p_3.svg"}
                            alt="img"
                            w="100%"
                            h="100%"
                            maxW="100%"
                            borderRadius={"2rem"}
                            objectFit={"cover"}
                        />
                    </SimpleGrid>
                </Container>
            </Box>
        </Box>
    );
};

export default OtherProject;
