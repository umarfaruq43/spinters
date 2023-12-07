import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const CustomPagination = ({ totalSlides, activeSlide, goToSlide }) => {
    const paginationItems = [];

    for (let i = 0; i < totalSlides; i++) {
        paginationItems.push(
            <Box
                key={i}
                onClick={() => goToSlide(i)}
                // width={activeSlide === i ? "25px" : "15px"}
                boxSize="1rem"
                borderRadius={activeSlide === i ? "100px" : "50%"}
                background={activeSlide === i ? "primary_10" : "#f1f1f1"}
                cursor="pointer"
                transition={"ease-in-out"}
                transitionDuration={".6s"}
            ></Box>
        );
    }

    return (
        <Flex justify="center" gap="16px" mt={["1rem", "3.75rem"]}>
            {paginationItems}
        </Flex>
    );
};

export default CustomPagination;
