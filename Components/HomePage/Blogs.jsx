import {
    Box,
    Button,
    Flex,
    SimpleGrid,
    Skeleton,
    Text,
    useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import BlogCard from "../common/BlogCard";
import { endpointUrl } from "@/lib/data";

const Blogs = () => {
    const toast = useToast();

    const [blogData, setBlogData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchBlogs() {
        setIsLoading(true);
        const url = `${endpointUrl}/blog`;

        try {
            const options = {
                method: "GET",
            };
            const response = await fetch(url, options);
            const data = await response.json(); // Parse the JSON response
            console.log("data", data);
            if (!response.ok) {
                toast({
                    title: data.message,
                    status: "error",
                    position: "top-left",
                });
            } else {
                setBlogData(data?.data);
            }
        } catch (error) {
            console.error("Error sending data:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <Box py={["4rem", "5rem", "6rem"]} bgColor="white">
            <Container>
                <Box>
                    <Text
                        fontSize={["2rem", null, "3rem"]}
                        fontWeight="700"
                        textAlign={"center"}
                        data-aos="fade-down"
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
                <Box>
                    <Box mt={["2rem", "3rem"]}>
                        {isLoading ? (
                            <Box>
                                <SimpleGrid
                                    columns={[1, 2, null, 3]}
                                    spacing="2rem"
                                >
                                    <Skeleton height="25rem" rounded="2rem" />
                                    <Skeleton height="25rem" rounded="2rem" />
                                    <Skeleton height="25rem" rounded="2rem" />
                                </SimpleGrid>
                            </Box>
                        ) : (
                            <>
                                {blogData.length < 1 ? (
                                    <Flex
                                        minH="300px"
                                        align="center"
                                        justify="center"
                                    >
                                        <Text>No data available 🥲</Text>
                                    </Flex>
                                ) : (
                                    <>
                                        <SimpleGrid
                                            columns={[1, 2, null, 3]}
                                            spacing="2rem"
                                        >
                                            {blogData
                                                ?.slice(0, 3)
                                                ?.map((item) => {
                                                    return (
                                                        <BlogCard
                                                            blogData={item}
                                                            key={item.id}
                                                        />
                                                    );
                                                })}
                                        </SimpleGrid>

                                        <Flex justify={"center"} mt="3rem">
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
                                                See All
                                            </Button>
                                        </Flex>
                                    </>
                                )}
                            </>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Blogs;
