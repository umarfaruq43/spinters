import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "../HomePage/Hero";
import ContactLabel from "../HomePage/ContactLabel";
import Footer from "../common/Footer";
import WhoWeAre from "./WhoWeAre";
import Team from "./Team";
import CoreValues from "./CoreValues";
import { HeroData } from "@/lib/data";
import Mission from "./Mission";

const About = () => {
    return (
        <Box>
            <Hero heroData={HeroData.aboutus} />
            <WhoWeAre />
            <Mission />
            <Team />
            <CoreValues />
            <ContactLabel />
            <Footer />
        </Box>
    );
};

export default About;
