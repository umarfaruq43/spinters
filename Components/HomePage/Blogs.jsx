import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";
import BlogCard from "../common/BlogCard";
import { blogData } from "@/lib/data";

const Blogs = () => {
    return (
        <Box py={["4rem", "5rem", "6rem"]} bgColor="white">
            <Container>
                <Box>
                    <Text
                        fontSize={["2rem", null, "3rem"]}
                        fontWeight="700"
                        textAlign={"center"}
                    >
                        <Text as="span" color="primary_10">
                            Our Blog
                        </Text>
                    </Text>
                    <Text
                        mt="1.5rem"
                        color="dark_1"
                        maxW="45.4rem"
                        fontSize={"1.1rem"}
                        mx="auto"
                        textAlign={"center"}
                    >
                        Explore our library of expert knowledge - everything
                        from skill development to business growth.
                    </Text>
                </Box>
                <Box mt={["2rem", "3rem"]}>
                    <SimpleGrid columns={[1, 2, null, 3]} spacing="2rem">
                        {blogData.map((item) => {
                            return <BlogCard blogData={item} key={item.id} />;
                        })}
                    </SimpleGrid>
                </Box>

                {blogData.lenght > 3 && <Flex justify={"center"} mt="3rem"  >
                    <Button
                        color="primary_10"
                        border="1px"
                        borderColor="primary_10"
                        rounded="0.5rem"
                        h="auto"
                        py="0.75rem"
                        px="1.25rem"
                        bgColor={"transparent"}
                        _hover={{}}
                        _focus={{}}
                        _active={{}}
                        as="a"
                        href="/blogs"
                    >
                        See more
                    </Button>
                </Flex>}
            </Container>
        </Box>
    );
};

export default Blogs;
