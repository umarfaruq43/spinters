import Blogs from "@/Components/HomePage/Blogs";
import CaseStudies from "@/Components/HomePage/CaseStudies";
import ContactLabel from "@/Components/HomePage/ContactLabel";
import Faq from "@/Components/HomePage/Faq";
import GetToKnowUs from "@/Components/HomePage/GetToKnowUs";
import Hero from "@/Components/HomePage/Hero";
import NewsLetter from "@/Components/HomePage/NewsLetter";
import Process from "@/Components/HomePage/Process";
import Service from "@/Components/HomePage/Service";
import Testimonies from "@/Components/HomePage/Testimonies";
import WhyChooseUs from "@/Components/HomePage/WhyChooseUs";
import Footer from "@/Components/common/Footer";
import { HeroData } from "@/lib/data";
import { Box } from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
    return (
        <Box>
            <Hero heroData={HeroData.landingPage} type="homePage" />
            <GetToKnowUs />
            <Service />
            <CaseStudies theme="dark" />
            <WhyChooseUs />
            <Process />
            <Testimonies />
            <Blogs />
            <NewsLetter />
            <Faq homePage={true} />

            <ContactLabel data={"homepage"} />
            <Footer />
        </Box>
    );
};

export default HomePage;
