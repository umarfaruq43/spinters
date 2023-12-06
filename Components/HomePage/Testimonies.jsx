import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";

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
                <Box mt={["2rem", "4.5rem"]}>
                    <Box overflowX={"auto"}>
                        <Flex
                            justify="space-between"
                            borderBottom={"1px"}
                            borderBottomColor={"rgba(189, 189, 189, 0.50)"}
                        >
                            {[1, 2, 3, 4].map((item) => {
                                return (
                                    <Flex
                                        key={item}
                                        pos="relative"
                                        gap="0.88rem"
                                        w="fit-content"
                                        cursor="pointer"
                                        pb={["0.9rem", null, "1.5rem"]}
                                        pr="2rem"
                                        flexShrink={0}
                                    >
                                        <Image
                                            src="/images/u_1.svg"
                                            alt=""
                                            boxSize={["3rem", "5rem"]}
                                            rounded={"full"}
                                            objectFit={"cover"}
                                        />{" "}
                                        <Stack spacing={["0.2rem", "auto"]}>
                                            <Text
                                                color="dark_1"
                                                fontSize={["0.9rem", "1.5rem"]}
                                                fontWeight="500"
                                            >
                                                Usman
                                            </Text>
                                            <Text
                                                color="rgba(0,0,0,.50)"
                                                fontSize={[
                                                    "0.8rem",
                                                    "1.125rem",
                                                ]}
                                            >
                                                Art director
                                            </Text>
                                        </Stack>
                                        {item === 1 && (
                                            <Box
                                                w="100%"
                                                h="0.25rem"
                                                bgColor="primary_10"
                                                pos="absolute"
                                                bottom="0"
                                                borderRadius={
                                                    "0.1875rem 0.1875rem 0rem 0rem"
                                                }
                                            />
                                        )}
                                    </Flex>
                                );
                            })}
                        </Flex>
                    </Box>
                </Box>

                <Box mt="4.5rem">
                    <Flex
                        gap={["1rem", "2rem", "4.3rem"]}
                        flexDir={["column", null, "row"]}
                    >
                        <Image
                            w="100%"
                            src="/images/t_1.svg"
                            alt="images"
                            rounded="2rem"
                            objectFit={"cover"}
                            maxW={["24rem"]}
                            maxH={["22.4rem"]}
                            mx="auto"
                        />

                        <Flex
                            align={"flex-start"}
                            gap={["1rem", null, "2.4rem"]}
                        >
                            <Image
                                src="/images/quote.svg"
                                alt="qoutation mark"
                                boxSize={["3rem", "5rem"]}
                            />
                            <Box maxW="36.8rem" fontSize={["1.2rem", "1.5rem"]}>
                                <Text mt="1rem">
                                    I wanted to express my sincere appreciation
                                    for the outstanding job your team did on our
                                    recent project. Your dedication and
                                    professionalism were truly impressive, and
                                    the exceptional quality of work exceeded our
                                    expectations. Thank you for your remarkable
                                    performance; it was a pleasure working with
                                    your team!
                                </Text>

                                <Text mt="1rem">Best regards</Text>
                                <Text>Usman</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Container>
        </Box>
    );
};

export default Testimonies;
