import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import BlogHero from "./BlogHero";
import Footer from "../common/Footer";
import Container from "../common/Container";
import BlogContent from "./BlogContent";
import ShareBlog from "./ShareBlog";
import NewsLetter from "../HomePage/NewsLetter";
import ContactLabel from "../HomePage/ContactLabel";
import RelatedBlogs from "./RelatedBlogs";

const SingleBlog = ({ blogData }) => {
    return (
        <div>
            <Box>
                <BlogHero heroData={blogData?.Blog} />
                <Container py="3rem">
                    <Box maxW="45rem" mx="auto">
                        <BlogContent blogData={blogData?.Blog} />
                        <ShareBlog blogData={blogData?.Blog} />
                    </Box>
                </Container>
                {blogData?.otherBlogs?.length > 0 && (
                    <RelatedBlogs blogData={blogData?.otherBlogs} />
                )}
                <NewsLetter />
                <ContactLabel data={"homepage"} />

                <Footer />
            </Box>
        </div>
    );
};

export default SingleBlog;
