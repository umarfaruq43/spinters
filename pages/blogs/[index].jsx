// import { getServerSideProps } from "next";
import SingleBlog from "@/Components/Blogs/SingleBlog";
import Layout from "@/Layout/Layout";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { endpointUrl } from "@/lib/data";

const index = ({ blog }) => {

    return (
        <Layout>
            <Box>
                <SingleBlog blogData={blog?.data} />
            </Box>
        </Layout>
    );
};

export default index;

// export async function getServerSideProps(context) {
//     // Get blog ID from query params
//     const blogId = context.query.index;

//     // Fetch the specific blog using the ID
//     const res = await fetch(`https://sprinters-api.onrender.com/v1/blog?blog_id=${blogId}`);
//     const data = await res.json();

//     if (!data) {
//         // Handle blog not found case
//         return { notFound: true };
//     }

//     return {
//         props: {
//             blog: data,
//         },
//     };
// }
