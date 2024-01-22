import {
    Box,
    Button,
    Flex,
    Image,
    Input,
    SimpleGrid,
    Spinner,
    Stack,
    Text,
    useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Container from "../common/Container";
import { endpointUrl } from "@/lib/data";

const NewsLetter = ({ data }) => {
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    async function subscribe(payload) {
        const url = `https://sprinters-api.onrender.com/v1/users/subscribe`;
        // const url = `${endpointUrl}v1/users/subscribe`;
        try {
            setIsLoading(true);
            const options = {
                method: "POST",
                body: JSON.stringify(payload), // Convert data to JSON format
                headers: {
                    "Content-Type": "application/json", // Specify JSON content type
                },
            };

            const response = await fetch(url, options);
            const data = await response.json(); // Parse the JSON response

            if (!response.ok) {
                toast({
                    title: data.message,
                    status: "error",
                    position: "top-left",
                });
            } else {
                toast({
                    title: data.message,
                    status: "success",
                    position: "top-left",
                });
                setEmail("");
            }
        } catch (error) {
            toast({
                title: "Error sending data",
                status: "error",
                position: "top-left",
            });
        } finally {
            setIsLoading(false);
        }
    }

    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email: email,
        };

        subscribe(payload);
    };
    return (
        <Box pt={["4rem", "5rem", "6rem"]}>
            <Flex
                // bgImage={"/images/lineBg.svg"}
                bgColor="primary_50"
                bgRepeat={"no-repeat"}
                bgSize="cover"
                bgPos={"center"}
                w="100%"
                py={["3.19rem", null, "5rem"]}
                px={["2rem"]}
            >
                <Box maxW="48rem" mx="auto">
                    <Text
                        fontSize={["2rem", null, "3rem"]}
                        fontWeight="700"
                        color={"white"}
                        textAlign={"center"}
                    >
                        <Text as="span" color="dark_2">
                            Sign up for our newsletter
                        </Text>
                    </Text>

                    <Text
                        mt="1.2rem"
                        fontSize="1.125rem"
                        textAlign="center"
                        color="dark_1"
                    >
                        Be the first to know about releases and industry news
                        and insights.
                    </Text>
                    <form onSubmit={handleSubmit}>
                        <Flex
                            gap="1rem"
                            mt={["1.81rem", null, "2.81rem"]}
                            maxW="31rem"
                            justify="center"
                            mx="auto"
                            flexDir={["column", "row"]}
                        >
                            <Box>
                                <Input
                                    onChange={handleChange}
                                    value={email}
                                    id={"email"}
                                    name={"email"}
                                    type="email"
                                    placeholder={"Enter your email"}
                                    fontSize={"1rem"}
                                    px={"1rem"}
                                    py="0.75rem"
                                    display="inline-block"
                                    _focusVisible={{
                                        border: "1px",
                                        borderColor: "gray_5",
                                    }}
                                    border="1px"
                                    borderColor="gray_5"
                                    rounded="0.5rem"
                                    color="light_6"
                                    h="3rem"
                                    w="100%"
                                    maxW={["100%", "22.3rem"]}
                                    fontWeight={"400"}
                                    boxShadow={
                                        "0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                                    }
                                    bgColor={"white"}
                                />
                                <Text
                                    fontSize="0.875rem"
                                    color="light_5"
                                    mt="0.5rem"
                                    textAlign={["left", "center"]}
                                >
                                    We care about your data in our{" "}
                                    <Text
                                        as="a"
                                        href="/policies"
                                        textDecor={"underline"}
                                    >
                                        privacy policy
                                    </Text>
                                </Text>
                            </Box>

                            <Box>
                                <Button
                                    boxShadow={
                                        "0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                                    }
                                    display={"block"}
                                    mx="auto"
                                    py="0.75rem"
                                    h="auto"
                                    px="1.25rem"
                                    fontSize={"1rem"}
                                    bgColor={"primary_10"}
                                    color="white"
                                    _focus={{}}
                                    _hover={{ opacity: "0.9" }}
                                    _active={{ opacity: "0.8" }}
                                    rounded="0.5rem"
                                    minW="7.4rem"
                                    maxW="7.4rem"
                                    w="100%"
                                    type="submit"
                                    isDisabled={isLoading}
                                >
                                    {isLoading ? (
                                        <Spinner size="sm" />
                                    ) : (
                                        "Subscribe"
                                    )}
                                </Button>
                            </Box>
                        </Flex>
                    </form>
                </Box>
            </Flex>
            <Container></Container>
        </Box>
    );
};

export default NewsLetter;
