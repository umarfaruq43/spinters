import { clientsData } from "@/lib/data";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const CustomPagination = ({ totalSlides, activeSlide, goToSlide }) => {
    const [activeNav, setActiveNav] = useState(0);
    useEffect(() => {
        setActiveNav(activeSlide);
    }, [activeSlide]);
    // const paginationItems = [];

    // for (let i = 0; i < totalSlides; i++) {
    //     paginationItems.push(
    //         <Box
    //             key={i}
    //             onClick={() => goToSlide(i)}
    //             // width={activeSlide === i ? "25px" : "15px"}
    //             boxSize="1rem"
    //             borderRadius={activeSlide === i ? "100px" : "50%"}
    //             background={activeSlide === i ? "primary_10" : "#f1f1f1"}
    //             cursor="pointer"
    //             transition={"ease-in-out"}
    //             transitionDuration={".6s"}
    //         ></Box>
    //     );
    // }

    return (
        <>
            {clientsData.map((item) => {
                return (
                    <Flex
                        key={item.id}
                        onClick={() => {
                            setActiveNav(item.id);
                            goToSlide(item.id);
                        }}
                        transition={"ease-in-out"}
                        transitionDuration={".6s"}
                        // key={item.activeNo}
                        pos="relative"
                        gap="0.88rem"
                        w="fit-content"
                        cursor="pointer"
                        pb={["0.9rem", null, "1.5rem"]}
                        pr="2rem"
                        flexShrink={0}
                        className="testimonyNav"
                    >
                        <Image
                            // src="/images/u_1.svg"
                            src={item.imgUrl}
                            alt="images"
                            boxSize={["3rem", "5rem"]}
                            rounded={"full"}
                            objectFit={"cover"}
                            _focusVisible={{}}
                        />{" "}
                        <Stack spacing={["0.2rem", "auto"]}>
                            <Text
                                color="dark_1"
                                fontSize={["0.9rem", "1.5rem"]}
                                fontWeight="500"
                            >
                                {item.name}
                            </Text>
                            <Text
                                color="rgba(0,0,0,.50)"
                                fontSize={["0.8rem", "1.125rem"]}
                            >
                                {item.role}
                            </Text>
                        </Stack>
                        {
                            <Box
                                w={activeNav === item.id ? "100%" : "0%"}
                                h="0.25rem"
                                bgColor="primary_10"
                                pos="absolute"
                                bottom="0"
                                borderRadius={"0.1875rem 0.1875rem 0rem 0rem"}
                                className="indicator"
                            />
                        }
                    </Flex>
                );
            })}
        </>
    );
};

export default CustomPagination;
