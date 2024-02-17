import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";
import BlogCard from "../common/BlogCard";

const RelatedBlogs = ({ blogData }) => {
    console.log(blogData);
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
