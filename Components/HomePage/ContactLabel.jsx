import {
    Box,
    Button,
    Flex,
    Image,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";

const ContactLabel = () => {
    return (
        <Box py={["4rem", "5rem", "6rem"]} bgColor="white">
            <Container>
                <Flex
                    bgImage={"/images/lineBg.svg"}
                    bgColor="dark_2"
                    bgRepeat={"no-repeat"}
                    bgSize="cover"
                    bgPos={"center"}
                    w="100%"
                    rounded={"0.9375rem"}
                    py={["3.19rem", null, "5rem"]}
                    px={["2rem"]}
                >
                    <Box maxW="37.2rem" mx="auto">
                        <Text
                            fontSize={["2rem", null, "3rem"]}
                            fontWeight="700"
                            color={"white"}
                            textAlign={"center"}
                        >
                            Want to Build Something{" "}
                        </Text>
                        <Text
                            fontSize={["2rem", null, "3rem"]}
                            fontWeight="700"
                            textAlign={"center"}
                            color="primary_10"
                        >
                            <i> Great Together?</i>
                        </Text>

                        <Button
                            mt={["1.81rem", null, "2.81rem"]}
                            boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
                            display={"block"}
                            mx="auto"
                            py="1rem"
                            h="auto"
                            px="1.75rem"
                            fontSize={"1rem"}
                            bgColor={"primary_10"}
                            color="white"
                            _focus={{}}
                            _hover={{ opacity: "0.9" }}
                            _active={{ opacity: "0.8" }}
                            rounded="0.5rem"
                        >
                            Get in Touch
                        </Button>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default ContactLabel;
