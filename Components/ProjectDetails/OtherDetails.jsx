import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";

const OtherDetails = ({ data }) => {
    return (
        <Box py={["3rem", null, "5rem"]}>
            <Container>
                <Stack spacing={["2rem", "3rem", "8.15rem"]}>
                    {/* Project Overview */}
                    <Flex
                        flexDir={["column", "row"]}
                        justify={"space-between"}
                        gap="1rem"
                    >
                        <Text
                            w="100%"
                            maxW="30.5rem"
                            letterSpacing={"-0.09rem"}
                            fontSize={["1.5rem", null, "2rem"]}
                            fontWeight={"700"}
                        >
                            Project{" "}
                            <Text as="span" color="primary_10">
                                Overview{" "}
                            </Text>
                        </Text>

                        <Text
                            fontSize={["1rem", "1.5rem"]}
                            fontWeight={"500"}
                            maxW="44rem"
                            w="100%"
                        >
                            {data?.projectOverview}
                        </Text>
                    </Flex>
                    {/* Problem */}
                    <Flex
                        flexDir={["column", "row"]}
                        justify={"space-between"}
                        gap="1rem"
                    >
                        <Text
                            w="100%"
                            maxW="30.5rem"
                            letterSpacing={"-0.09rem"}
                            fontSize={["1.5rem", null, "2rem"]}
                            fontWeight={"700"}
                        >
                            Project{" "}
                            <Text as="span" color="primary_10">
                                Overview{" "}
                            </Text>
                        </Text>

                        <Text
                            fontSize={["1rem", "1.5rem"]}
                            fontWeight={"500"}
                            maxW="44rem"
                            w="100%"
                        >
                            {data?.problem}
                        </Text>
                    </Flex>
                    {/* projectSolution */}
                    <Flex
                        flexDir={["column", "row"]}
                        justify={"space-between"}
                        gap="1rem"
                    >
                        <Text
                            w="100%"
                            maxW="30.5rem"
                            letterSpacing={"-0.09rem"}
                            fontSize={["1.5rem", null, "2rem"]}
                            fontWeight={"700"}
                        >
                            Our{" "}
                            <Text as="span" color="primary_10">
                                Solution{" "}
                            </Text>
                        </Text>

                        <Text
                            fontSize={["1rem", "1.5rem"]}
                            fontWeight={"500"}
                            maxW="44rem"
                            w="100%"
                        >
                            {data?.solution}
                        </Text>
                    </Flex>
                    {/* Client Name  */}
                    <Flex
                        flexDir={["column", "row"]}
                        justify={"space-between"}
                        gap="1rem"
                    >
                        <Text
                            w="100%"
                            maxW="30.5rem"
                            letterSpacing={"-0.09rem"}
                            fontSize={["1.5rem", null, "2rem"]}
                            fontWeight={"700"}
                        >
                            The{" "}
                            <Text as="span" color="primary_10">
                                Client{" "}
                            </Text>
                        </Text>

                        <Text
                            fontSize={["1rem", "1.5rem"]}
                            fontWeight={"500"}
                            maxW="44rem"
                            w="100%"
                        >
                            {data?.clientName}
                        </Text>
                    </Flex>
                    {/* Project Category */}
                    <Flex
                        flexDir={["column", "row"]}
                        justify={"space-between"}
                        gap="1rem"
                    >
                        <Text
                            w="100%"
                            maxW="30.5rem"
                            letterSpacing={"-0.09rem"}
                            fontSize={["1.5rem", null, "2rem"]}
                            fontWeight={"700"}
                        >
                            Project{" "}
                            <Text as="span" color="primary_10">
                                Category{" "}
                            </Text>
                        </Text>

                        <Text
                            fontSize={["1rem", "1.5rem"]}
                            fontWeight={"500"}
                            maxW="44rem"
                            w="100%"
                        >
                            {data?.projectCategory}
                        </Text>
                    </Flex>{" "}
                    <Flex
                        flexDir={["column", "row"]}
                        justify={"space-between"}
                        gap="1rem"
                    >
                        <Text
                            w="100%"
                            maxW="30.5rem"
                            letterSpacing={"-0.09rem"}
                            fontSize={["1.5rem", null, "2rem"]}
                            fontWeight={"700"}
                        >
                            Project{" "}
                            <Text as="span" color="primary_10">
                                Timeline{" "}
                            </Text>
                        </Text>

                        <Text
                            fontSize={["1rem", "1.5rem"]}
                            fontWeight={"500"}
                            maxW="44rem"
                            w="100%"
                        >
                            {data?.projectTimeline}
                        </Text>
                    </Flex>{" "}
                    <Flex
                        flexDir={["column", "row"]}
                        justify={"space-between"}
                        gap="1rem"
                    >
                        <Text
                            w="100%"
                            maxW="30.5rem"
                            letterSpacing={"-0.09rem"}
                            fontSize={["1.5rem", null, "2rem"]}
                            fontWeight={"700"}
                        >
                            Services{" "}
                            <Text as="span" color="primary_10">
                                Provided{" "}
                            </Text>
                        </Text>

                        <Text
                            fontSize={["1rem", "1.5rem"]}
                            fontWeight={"500"}
                            maxW="44rem"
                            w="100%"
                        >
                            {data?.servicesProvides}
                        </Text>
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
};

export default OtherDetails;
