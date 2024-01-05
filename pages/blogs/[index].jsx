import SingleBlog from "@/Components/Blogs/SingleBlog";
import Layout from "@/Layout/Layout";
import { Box } from "@chakra-ui/react";
import React from "react";

const index = () => {
    return (
        <Layout>
            <Box>
                <SingleBlog />
            </Box>
        </Layout>
    );
};

export default index;
