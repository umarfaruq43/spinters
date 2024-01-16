import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "../HomePage/Hero";

import ContactLabel from "../HomePage/ContactLabel";
import Footer from "../common/Footer";
import CaseStudies from "../HomePage/CaseStudies";
import { HeroData } from "@/lib/data";

const CaseStudy = () => {
    return (
        <Box>
            <Hero heroData={HeroData.caseStudy} type="caseStudy" />
            <CaseStudies />
            <ContactLabel />
            <Footer />
        </Box>
    );
};

export default CaseStudy;
