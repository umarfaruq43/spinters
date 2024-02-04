import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";
import BlogCard from "../common/BlogCard";

const RelatedBlogs = () => {
    return (
        <Box py={["4rem", "5rem", "6rem"]}>
            <Container>
                <Box>
                    <Text fontSize={"2.25rem"} fontWeight={"600"}>
                        From the blog
                    </Text>
                    <Text mt="1.25rem" color="light_6" fontSize={"1.25rem"}>
                        The latest industry news, interviews, technologies, and
                        resources.
                    </Text>
                </Box>
                <Box>
                    <Box mt={["2rem", "3rem"]}>
                        <SimpleGrid columns={[1, 2, null, 3]} spacing="2rem">
                            {blogData.map((item) => {
                                return (
                                    <BlogCard blogData={item} key={item.id} />
                                );
                            })}
                        </SimpleGrid>
                    </Box>

                    <Flex
                        justify={"center"}
                        mt="3rem"
                        borderTop="1px"
                        borderTopColor={"light_3"}
                        pt="1rem"
                    >
                        <Button
                            color="white"
                            border="1px"
                            borderColor="primary_10"
                            rounded="0.5rem"
                            h="auto"
                            py="0.75rem"
                            px="1.25rem"
                            bgColor={"primary_20"}
                            _hover={{}}
                            _focus={{}}
                            _active={{}}
                            as="a"
                            href="/blogs"
                        >
                            View all posts
                        </Button>
                    </Flex>
                </Box>
            </Container>
        </Box>
    );
};

export default RelatedBlogs;

const blogData = [
    {
        id: 1,
        tag: "Management",
        title: "Bill Walsh leadership lessons",
        des: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        authorImg: "",
        authorName: "Alec Whitten",
    },
    {
        id: 2,
        tag: "Product",
        title: "PM mental models",
        des: "Mental models are simple expressions of complex processes or relationships.",
        authorImg: "",
        authorName: "Demi WIlkinson",
    },
    {
        id: 3,
        tag: "Design",
        title: "What is Wireframing?",
        des: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        authorImg: "",
        authorName: "Candice Wu",
    },
];
