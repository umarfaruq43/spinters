import { Box, Button, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import AdminBlogCard from "./AdminBlogCard";
import BlogForm from "./BlogForm";

const Blog = () => {
    const [addBlog, setAddBlog] = useState(false);
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

            <Box mt="2rem">
                {addBlog ? (
                    <BlogForm />
                ) : (
                    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                        {blogs.map((blog) => (
                            <AdminBlogCard
                                key={blog.id}
                                blogData={blog}
                                onDelete={() =>
                                    console.log("Delete blog:", blog.id)
                                }
                                onEdit={() =>
                                    console.log("Edit blog:", blog.id)
                                }
                            />
                        ))}
                    </SimpleGrid>
                )}
            </Box>
        </Box>
    );
};

export default Blog;

const blogs = [
    {
        id: 1,
        title: "7 Tips for Mastering Next.js",
        des: "Learn how to create performant and scalable React applications with Next.js. !",
        imageUrl: "",
        content:
            "Learn how to create performant and scalable React applications with Next.js. Dive into routing, data fetching, static generation, and more!",
    },
    {
        id: 2,
        title: "Designing Stunning UIs with Chakra UI",
        des: "Build beautiful and accessible user interfaces effortlessly with Chakra UI's modular and customizable components.",
        imageUrl: "",
        content:
            "Learn how to create performant and scalable React applications with Next.js. Dive into routing, data fetching, static generation, and more!",
    },
    {
        id: 3,
        title: "Unlocking the Power of GraphQL",
        des: "Explore GraphQL's ability to revolutionize your data fetching and API interactions. Learn how to integrate it seamlessly with Next.js.",
        imageUrl: "",
        content:
            "Learn how to create performant and scalable React applications with Next.js. Dive into routing, data fetching, static generation, and more!",
    },
    {
        id: 4,
        title: "Crafting Engaging Blog Posts",
        des: "Capture your audience's attention with compelling content. Discover tips for writing effective headlines, structuring articles, and SEO optimization.",
        imageUrl: "",
        content:
            "Learn how to create performant and scalable React applications with Next.js. Dive into routing, data fetching, static generation, and more!",
    },
    {
        id: 5,
        title: "Building a Thriving Developer Community",
        des: "Foster connections and share knowledge by creating a vibrant online community for developers. Learn strategies for engagement and growth.",
        imageUrl: "",
        content:
            "Learn how to create performant and scalable React applications with Next.js. Dive into routing, data fetching, static generation, and more!",
    },
];
