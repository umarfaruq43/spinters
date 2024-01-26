// import { getServerSideProps } from "next";
import SingleBlog from "@/Components/Blogs/SingleBlog";
import Layout from "@/Layout/Layout";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { endpointUrl } from "@/lib/data";

const index = ({ blog }) => {
    // console.log("blog", blog);
    return (
        <Layout>
            <Box>
                {/* <SingleBlog blogData={blog?.data} /> */}

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, expedita modi! At, aspernatur veniam ut aperiam maiores magni officia temporibus nisi ullam illum itaque culpa voluptatum ipsa quis. Accusamus, ullam?
            </Box>
        </Layout>
    );
};

export default index;

export async function getServerSideProps(context) {
    // Get blog ID from query params
    const blogId = context.query.index;

    // Fetch the specific blog using the ID
    const res = await fetch(`${endpointUrl}/blog?blog_id=${"65b1af65815e81e648eadd4b"}`);
    const data = await res.json();

    if (!data) {
        // Handle blog not found case
        return { notFound: true };
    }

    return {
        props: {
            blog: data,
        },
    };
}
