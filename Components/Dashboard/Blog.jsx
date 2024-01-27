import {
    Box,
    Button,
    Flex,
    SimpleGrid,
    Skeleton,
    SkeletonText,
    Stack,
    Text,
    useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdminBlogCard from "./AdminBlogCard";
import BlogForm from "./BlogForm";
import { endpointUrl } from "@/lib/data";

const Blog = () => {
    const toast = useToast();
    const [addBlog, setAddBlog] = useState(false);
    const [blogs, setBlogs] = useState([]);
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
            console.log(data);
            if (!response.ok) {
                toast({
                    title: data.message,
                    status: "error",
                    position: "top-left",
                });
            } else {
                setBlogs(data?.data);
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
        <Box py="2rem">
            <Flex align="center" justify="space-between">
                <Text fontSize={["2rem", "3rem"]}>
                    {addBlog ? "Blog Form" : "Blogs"}
                </Text>
                <Button
                    _hover={{}}
                    _active={{}}
                    _focus={{}}
                    border="1px"
                    borderColor={addBlog ? "red.500" : "primary_10"}
                    color={addBlog ? "red.500" : "primary_10"}
                    bg="transparent"
                    fontSize=".9rem"
                    onClick={() => setAddBlog(!addBlog)}
                >
                    {addBlog ? "Cancle" : "Add Blog"}
                </Button>
            </Flex>

            {isLoading ? (
                <Box mt="2rem">
                    <SimpleGrid columns={[1, 2, null,3]} spacing={4}>
                        <Skeleton height="10rem" />
                        <Skeleton height="10rem" />
                        <Skeleton height="10rem" />
                    </SimpleGrid>
                </Box>
            ) : (
                <Box mt="2rem">
                    {addBlog ? (
                        <BlogForm
                            addBlog={addBlog}
                            setAddBlog={setAddBlog}
                            fetchBlogs={fetchBlogs}
                        />
                    ) : (
                        <Box>
                            {blogs?.length < 1 ? (
                                <Flex
                                    minH="40vh"
                                    align="center"
                                    justify="center"
                                    // border="1px"
                                    // borderColor={"black.100"}
                                >
                                    <Text>Blog is Empty</Text>
                                </Flex>
                            ) : (
                                <Box>
                                    <SimpleGrid
                                        columns={[1, 2, null, 3]}
                                        spacing={4}
                                    >
                                        {blogs.map((blog) => (
                                            <AdminBlogCard
                                                key={blog?.id}
                                                blogData={blog}
                                                fetchBlogs={fetchBlogs}
                                                onEdit={() =>
                                                    console.log(
                                                        "Edit blog:",
                                                        blog?.id
                                                    )
                                                }
                                            />
                                        ))}
                                    </SimpleGrid>
                                </Box>
                            )}
                        </Box>
                    )}
                </Box>
            )}
        </Box>
    );
};

export default Blog;
