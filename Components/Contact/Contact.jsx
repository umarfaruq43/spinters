import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "../HomePage/Hero";

import Footer from "../common/Footer";

import { HeroData } from "@/lib/data";
import GetInTouch from "./GetInTouch";
import Location from "./Location";

const Contact = () => {
    return (
        <Box>
            <Hero heroData={HeroData.contact} />
            <GetInTouch />
            <Location />

            <Footer />
        </Box>
    );
};

export default Contact;
