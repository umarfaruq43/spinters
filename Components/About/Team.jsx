import { Box, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";
import { teamData } from "@/lib/data";

const Team = () => {
    return (
        <Box py={["4rem", "5rem", "7rem"]}>
            <Container>
                <Box>
                    <Box>
                        <Text
                            fontSize={["2rem", null, "3rem"]}
                            fontWeight="700"
                            textAlign={"center"}
                        >
                            Meet{" "}
                            <Text as="i" color="primary_10">
                                The Team
                            </Text>{" "}
                        </Text>

                        <Text
                            mt="1.5rem"
                            color="dark_1"
                            maxW="48rem"
                            fontSize={"1.1rem"}
                            mx="auto"
                            textAlign={"center"}
                        >
                            Our philosophy is simple — hire a team of diverse,
                            passionate people and foster a culture that empowers
                            you to do you best work.
                        </Text>
                    </Box>
                    <Box mt="4rem">
                        <SimpleGrid
                            columns={[2, 3]}
                            spacing={["1rem", "2rem", "3rem", "4rem"]}
                        >
                            {teamData.map(({ name, role, img }) => {
                                return (
                                    <Stack
                                        textAlign={"center"}
                                        spacing="0px"
                                        key={name}
                                    >
                                        <Image
                                            src="/images/t_1.svg"
                                            alt="t1"
                                            boxSize="5rem"
                                            rounded={"full"}
                                            objectFit={"cover"}
                                            display="block"
                                            mx="auto"
                                        />
                                        <Text
                                            fontSize={"1.125rem"}
                                            fontWeight={"600"}
                                            mt="1rem"
                                        >
                                            {name}
                                        </Text>
                                        <Text
                                            fontSize={"1rem"}
                                            fontWeight={"500"}
                                            color="primary_10"
                                        >
                                            {role}
                                        </Text>
                                    </Stack>
                                );
                            })}
                        </SimpleGrid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Team;
