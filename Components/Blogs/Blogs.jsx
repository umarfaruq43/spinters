import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "../HomePage/Hero";
import Footer from "../common/Footer";
import { HeroData } from "@/lib/data";
import BlogsContainer from "./BlogsContainer";
import NewsLetter from "../HomePage/NewsLetter";
import ContactLabel from "../HomePage/ContactLabel";

const Blogs = () => {
    return (
        <Box>
            <Hero heroData={HeroData.blogs} />
            <BlogsContainer />
            <NewsLetter />
            <ContactLabel />
            <Footer />
        </Box>
    );
};

export default Blogs;
