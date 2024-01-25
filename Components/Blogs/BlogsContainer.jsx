import {
    Box,
    Button,
    Flex,
    Icon,
    Input,
    SimpleGrid,
    Skeleton,
    Text,
    useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import { CiSearch } from "react-icons/ci";
import BlogCard from "../common/BlogCard";
import { blogData, endpointUrl } from "@/lib/data";
const BlogsContainer = () => {
    const toast = useToast();
    const [searchQuery, setSearchQuery] = useState("");
    const [fetchedBlogs, setFetchedBlogs] = useState([]);
    const [filterBlog, setFilterBlog] = useState(blogData);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const fetchBlogs = async () => {
        setIsLoading(true);
        const url = `${endpointUrl}/blog`;

        try {
            const options = {
                method: "GET",
            };
            const response = await fetch(url, options);
            const data = await response.json(); // Parse the JSON response
            console.log(data);
            if (!response.ok) {
                toast({
                    title: data.message,
                    status: "error",
                    position: "top-left",
                });
            } else {
                setFetchedBlogs(data?.data);
                setFilterBlog(data?.data);
            }
        } catch (error) {
            console.error("Error sending data:", error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchBlogs();
    }, []);

    useEffect(() => {
        const fBlog = fetchedBlogs?.filter((item) => {
            return (
                item?.title
                    ?.toLowerCase()
                    ?.includes(searchQuery?.toLowerCase()) ||
                item?.description
                    ?.toLowerCase()
                    .includes(searchQuery?.toLowerCase())
            );
        });
        setFilterBlog(fBlog);
    }, [searchQuery]);

    return (
        <Box pt={["4rem", "5rem", "6rem"]} bgColor={"white"}>
            <Container>
                <Box maxW="20rem" mx="auto" pos="relative">
                    <Input
                        value={searchQuery}
                        onChange={handleChange}
                        type="text"
                        px="1rem"
                        py="0.75rem"
                        pl="2.75rem"
                        boxShadow="0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                        borderColor="gray_5"
                        rounded="0.5rem"
                        _focusVisible={{}}
                    />
                    <Icon
                        as={CiSearch}
                        pos="absolute"
                        left="1rem"
                        top="50%"
                        transform={"translateY(-50%)"}
                        boxSize={"1.25rem"}
                        color="light_6"
                    />
                </Box>

                {isLoading ? (
                    <Box mt="4rem">
                        <SimpleGrid columns={[1, 2, null, 3]} spacing="2rem">
                            <Skeleton height="30rem" rounded="0.9375rem" />
                            <Skeleton height="30rem" rounded="0.9375rem" />
                            <Skeleton height="30rem" rounded="0.9375rem" />
                        </SimpleGrid>
                    </Box>
                ) : (
                    <Box mt="3rem">
                        {filterBlog?.length < 1 ? (
                            <Flex minH="40vh" align="center" justify={"center"}>
                                <Text fontSize="2rem" fontWeight={"700"}>
                                    {" "}
                                    Blog not available at the Moment 🥲{" "}
                                </Text>
                            </Flex>
                        ) : (
                            <SimpleGrid
                                columns={[1, 2, null, 3]}
                                spacing="2rem"
                            >
                                {filterBlog?.map((item) => {
                                    return (
                                        <BlogCard
                                            key={item.id}
                                            blogData={item}
                                        />
                                    );
                                })}
                            </SimpleGrid>
                        )}
                    </Box>
                )}

                <Flex
                    justify={"center"}
                    mt="3rem"
                    display={fetchedBlogs > 3 ? "flex" : "none"}
                >
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
                    >
                        Load more
                    </Button>
                </Flex>
            </Container>
        </Box>
    );
};

export default BlogsContainer;
