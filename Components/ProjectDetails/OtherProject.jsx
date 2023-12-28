import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";

const OtherProject = () => {
    return (
        <Box>
            <Box py={["4rem", "5rem", "6rem"]} bgColor="white">
                <Container>
                    <Flex
                        bgImage={"/images/lineBg.svg"}
                        bgColor="dark_2"
                        bgRepeat={"no-repeat"}
                        bgSize="cover"
                        bgPos={"center"}
                        w="100%"
                        rounded={"0.9375rem"}
                        py={["3.19rem", null, "5rem"]}
                        px={["2rem"]}
                    ></Flex>
                </Container>
            </Box>
        </Box>
    );
};

export default OtherProject;
