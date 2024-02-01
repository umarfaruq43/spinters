import ProjectDetails from "@/Components/ProjectDetails/ProjectDetails";
import { Box } from "@chakra-ui/react";
import React from "react";

const index = (props) => {
    const { projectData } = props;
    console.log(projectData);
    return (
        <Box>
            <ProjectDetails projectData={projectData?.data} />
        </Box>
    );
};

export default index;

export async function getServerSideProps(context) {
    // Get blog ID from query params
    const projectId = context?.query?.index;

    // Fetch the specific blog using the ID
    const res = await fetch(
        `https://sprinters-api.onrender.com/v1/case-study?caseStudyId=${projectId}`
    );
    const data = await res.json();

    if (!data) {
        // Handle blog not found case
        return { notFound: true };
    }

    return {
        props: {
            projectData: data,
        },
    };
}
