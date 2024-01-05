import { Box, Button, Flex, Icon, Input, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import { CiSearch } from "react-icons/ci";
import BlogCard from "../common/BlogCard";
const BlogsContainer = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [fetchBlogs, setFetchBlogs] = useState(blogData);
    const [filterBlog, setFilterBlog] = useState(blogData);

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    useEffect(() => {
        const fBlog = fetchBlogs.filter((item) => {
            return (
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.des.toLowerCase().includes(searchQuery.toLowerCase())
            );
        });
        setFilterBlog(fBlog);
    }, [searchQuery]);
    console.log(filterBlog);

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

                <Box mt="3rem">
                    <SimpleGrid columns={[1, 2, null, 3]} spacing="2rem">
                        {filterBlog.map((item) => {
                            return <BlogCard key={item.id} blogData={item} />;
                        })}
                    </SimpleGrid>
                </Box>

                <Flex
                    justify={"center"}
                    mt="3rem"
                    display={fetchBlogs > filterBlog ? "none" : "flex"}
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
    {
        id: 4,
        tag: "Design",
        title: "UX review presentations",
        des: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        authorImg: "",
        authorName: "Olivia Rhye",
    },
    {
        id: 5,
        tag: "Design",
        title: "UX review presentations",
        des: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        authorImg: "",
        authorName: "Olivia Rhye",
    },
    {
        id: 6,
        tag: "Design",
        title: "UX review presentations",
        des: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        authorImg: "",
        authorName: "Olivia Rhye",
    },
];
