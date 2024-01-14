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
                        </Text>
                    </Text>

                    <SimpleGrid
                        mt="1.5rem"
                        columns={[1, 2, null, 3]}
                        spacing="2.3rem"
                    >
                        {data.map((item) => {
                            return (
                                <Box
                                    key={item.id}
                                    pos="relative"
                                    className="otherProject"
                                >
                                    <Image
                                        src={item.img}
                                        alt="img"
                                        w="100%"
                                        h="100%"
                                        maxW="100%"
                                        borderRadius={"2rem"}
                                        objectFit={"cover"}
                                    />
                                    <Flex
                                        pos="absolute"
                                        bg={"rgba_1"}
                                        top="0"
                                        bottom="0"
                                        w="100%"
                                        borderRadius={"2rem"}
                                        px="1.5rem"
                                        // pb="3.19rem"
                                        color="white"
                                        alignItems={"flex-end"}
                                        className="otherProject_overlay"
                                    >
                                        <Text
                                            className="otherProject_text"
                                            fontSize="1.5rem"
                                            fontWeight="700"
                                        >
                                            {item.title}
                                        </Text>
                                    </Flex>
                                </Box>
                            );
                        })}
                    </SimpleGrid>
                </Container>
            </Box>
        </Box>
    );
};

export default OtherProject;

const data = [
    {
        id: 1,
        title: "Okada",
        img: "/images/p_4.svg",
    },
    {
        id: 2,
        title: "Artify",
        img: "/images/p_3.svg",
    },
    {
        id: 3,
        title: "Payme",
        img: "/images/p_1.svg",
    },
];
