import { Box } from "@chakra-ui/react";
import React from "react";

import { caseStudy } from "@/lib/data";
import OtherDetails from "./OtherDetails";
import Process from "../HomePage/Process";
import ContactLabel from "../HomePage/ContactLabel";
import Footer from "../common/Footer";
import OtherProject from "./OtherProject";
import Hero from "./Hero";

const ProjectDetails = ({ projectData }) => {
    return (
        <Box>
            <Hero heroData={projectData?.caseStudy} type="caseStudy" />
            <OtherDetails data={projectData?.caseStudy} />
            <Process bg="primary_30" />
            <OtherProject projectData={projectData?.otherCasestudy} />
            <ContactLabel data={"homepage"} />

            <Footer />
        </Box>
    );
};

export default ProjectDetails;
