import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "../HomePage/Hero";

import ContactLabel from "../HomePage/ContactLabel";
import Footer from "../common/Footer";

import { HeroData } from "@/lib/data";
import GetInTouch from "./GetInTouch";

const Contact = () => {
    return (
        <Box>
            <Hero heroData={HeroData.contact} />
            <GetInTouch />

            <Footer />
        </Box>
    );
};

export default Contact;
