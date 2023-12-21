import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "../HomePage/Hero";
import { HeroData, caseStudy } from "@/lib/data";
import OtherDetails from "./OtherDetails";
import Process from "../HomePage/Process";
import ContactLabel from "../HomePage/ContactLabel";
import Footer from "../common/Footer";

const ProjectDetails = () => {
    return (
        <Box>
            <Hero heroData={caseStudy.Payme} type="projectDetails" />
            <OtherDetails data={caseStudy.Payme} />
            <Process bg="primary_30" />
            <ContactLabel data={"homepage"} />
            <Footer />
        </Box>
    );
};

export default ProjectDetails;
