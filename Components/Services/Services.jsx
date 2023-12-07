import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "../HomePage/Hero";
import OurService from "./OurService";
import WhyChooseUs from "../HomePage/WhyChooseUs";
import ContactLabel from "../HomePage/ContactLabel";
import Footer from "../common/Footer";
import { HeroData } from "@/lib/data";

const Services = () => {
    return (
        <Box>
            <Hero heroData={HeroData.service} />
            <OurService />
            <WhyChooseUs />
            <ContactLabel />
            <Footer />
        </Box>
    );
};

export default Services;
