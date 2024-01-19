import { Box, Button, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import AdminBlogCard from "./AdminCaseStudyCard";
// import BlogForm from "./BlogForm";
import AdminCaseStudyCard from "./AdminCaseStudyCard";
import CaseStudyForm from "./CaseStudyForm";

const AdminCaseStudy = () => {
    const [addProject, setAddProject] = useState(false);
    return (
        <Box py="2rem">
            <Flex align="center" justify="space-between">
                <Text fontSize={["2rem", "3rem"]}>
                    {addProject ? "Case Study Form" : "Case Study"}
                </Text>
                <Button
                    _hover={{}}
                    _active={{}}
                    _focus={{}}
                    border="1px"
                    borderColor={addProject ? "red.500" : "primary_10"}
                    color={addProject ? "red.500" : "primary_10"}
                    bg="transparent"
                    fontSize=".9rem"
                    onClick={() => setAddProject(!addProject)}
                >
                    {addProject ? "Cancel" : "Add Case Study"}
                </Button>
            </Flex>

            <Box mt="2rem">
                {addProject ? (
                    <CaseStudyForm />
                ) : (
                    <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                        {data.map((project) => (
                            <Box key={project.id}>
                                <AdminCaseStudyCard
                                    caseStudyData={project}
                                    onDelete={() =>
                                        console.log(
                                            "Delete project:",
                                            project.id
                                        )
                                    }
                                    onEdit={() => {
                                        setAddProject(true);
                                    }}
                                />
                            </Box>
                        ))}
                    </SimpleGrid>
                )}
            </Box>
        </Box>
    );
};

export default AdminCaseStudy;

const data = [
    {
        id: 1,
        title: "7 Tips for Mastering Next.js",
        excerpt:
            "Learn how to create performant and scalable React applications with Next.js. Dive into routing, data fetching, static generation, and more!",
    },
    {
        id: 2,
        title: "Designing Stunning UIs with Chakra UI",
        excerpt:
            "Build beautiful and accessible user interfaces effortlessly with Chakra UI's modular and customizable components.",
    },
    {
        id: 3,
        title: "Unlocking the Power of GraphQL",
        excerpt:
            "Explore GraphQL's ability to revolutionize your data fetching and API interactions. Learn how to integrate it seamlessly with Next.js.",
    },
    {
        id: 4,
        title: "Crafting Engaging Blog Posts",
        excerpt:
            "Capture your audience's attention with compelling content. Discover tips for writing effective headlines, structuring articles, and SEO optimization.",
    },
    {
        id: 5,
        title: "Building a Thriving Developer Community",
        excerpt:
            "Foster connections and share knowledge by creating a vibrant online community for developers. Learn strategies for engagement and growth.",
    },
];
