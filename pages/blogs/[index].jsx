import SingleBlog from "@/Components/Blogs/SingleBlog";
import { Box } from "@chakra-ui/react";
import React from "react";
import { parseCookies } from "nookies";

const index = (props) => {
    const { blogData } = props;

    return (
        <>
            {/* // <Layout> */}
            <Box>
                <SingleBlog blogData={blogData?.data} />
            </Box>
            {/* // </Layout> */}
        </>
    );
};

export default index;

export async function getServerSideProps(context) {
    // Get blog ID from cookies params
    const cookies = parseCookies(context);
    const blogId = cookies.blogId;

    // Fetch the specific blog using the ID
    const res = await fetch(
        `https://sprinters-api.onrender.com/v1/blog?blog_id=${blogId}`
    );
    const data = await res.json();

    // if (!data) {
    //     // Handle blog not found case
    //     return { notFound: true };
    // }

    return {
        props: {
            blogData: data,
        },
    };
}

// export async function getServerSideProps(context) {
//     // Get blog ID from query params
//     const blogId = context?.query?.index;

//     // Fetch the specific blog using the ID
//     const res = await fetch(
//         `https://sprinters-api.onrender.com/v1/blog?blog_id=${blogId}`
//     );
//     const data = await res.json();

//     if (!data) {
//         // Handle blog not found case
//         return { notFound: true };
//     }

//     return {
//         props: {
//             blogData: data,
//         },
//     };
// }
