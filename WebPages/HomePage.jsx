import GetToKnowUs from "@/Components/HomePage/GetToKnowUs";
import Hero from "@/Components/HomePage/Hero";
import { Box } from "@chakra-ui/react";
import React from "react";

const HomePage = () => {
    return (
        <Box>
            <Hero />
            <GetToKnowUs />
        </Box>
    );
};

export default HomePage;
