import CaseStudies from "@/Components/HomePage/CaseStudies";
import ContactLabel from "@/Components/HomePage/ContactLabel";
import Faq from "@/Components/HomePage/Faq";
import GetToKnowUs from "@/Components/HomePage/GetToKnowUs";
import Hero from "@/Components/HomePage/Hero";
import Process from "@/Components/HomePage/Process";
import Service from "@/Components/HomePage/Service";
import Testimonies from "@/Components/HomePage/Testimonies";
import WhyChooseUs from "@/Components/HomePage/WhyChooseUs";
import Footer from "@/Components/common/Footer";
import { Box } from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
    return (
        <Box>
            <Hero />
            <GetToKnowUs />
            <Service />
            <CaseStudies />
            <WhyChooseUs />
            <Process />
            <Testimonies />
            <Faq />
            <ContactLabel />
            <Footer />
        </Box>
    );
};

export default HomePage;
