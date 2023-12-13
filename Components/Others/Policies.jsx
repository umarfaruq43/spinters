import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "../HomePage/Hero";

import ContactLabel from "../HomePage/ContactLabel";
import Footer from "../common/Footer";

import { HeroData } from "@/lib/data";
import Faq from "../HomePage/Faq";

const Policies = () => {
    return (
        <Box>
            <Hero heroData={HeroData.policies} />

            <Footer />
        </Box>
    );
};

export default Policies;
