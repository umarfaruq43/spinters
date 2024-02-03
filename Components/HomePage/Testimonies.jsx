import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Container from "../common/Container";
import { clientsData } from "@/lib/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimoniesNav from "./TestimoniesNav";

const Testimonies = () => {
    const [activeClient, setActiveClient] = useState(1);
    const [activeData, setActiveData] = useState(clientsData[0]);
    console.log(activeData);

    const [activeSlide, setActiveSlide] = useState(3);
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (currentSlide) => setActiveSlide(currentSlide),
        autoplay: false,
        // autoplaySpeed: 100,
        // speed: 1000,
        pauseOnFocus: false,
        pauseOnHover: true,
        arrows: true,
    };

    const goToSlide = (slideIndex) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(slideIndex);
            setActiveSlide(slideIndex);
        }
    };

    return (
        <Box py={["4rem", "5rem", "6rem"]} bgColor="white">
            <Container>
                <Box>
                    <Text
                        fontSize={["2rem", null, "3rem"]}
                        fontWeight="700"
                        textAlign={"center"}
                    >
                        What{" "}
                        <Text as="i" color="primary_10">
                            Our Clients
                        </Text>{" "}
                        Say
                    </Text>
                </Box>
                <Box mt={["2rem", "4.5rem"]}>
                    <Box overflowX={"auto"}>
                        <Flex
                            justify="space-between"
                            borderBottom={"1px"}
                            borderBottomColor={"rgba(189, 189, 189, 0.50)"}
                        >
                            {/* {clientsData?.map((item) => {
                                return (
                                    <Flex
                                        key={item.activeNo}
                                        pos="relative"
                                        gap="0.88rem"
                                        w="fit-content"
                                        cursor="pointer"
                                        pb={["0.9rem", null, "1.5rem"]}
                                        pr="2rem"
                                        flexShrink={0}
                                        onClick={() => {
                                            setActiveClient(item.activeNo);
                                            setActiveData(item);
                                        }}
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
                                                fontSize={[
                                                    "0.8rem",
                                                    "1.125rem",
                                                ]}
                                            >
                                                {item.role}
                                            </Text>
                                        </Stack>
                                        {
                                            <Box
                                                w={
                                                    activeClient ===
                                                    item.activeNo
                                                        ? "100%"
                                                        : "0%"
                                                }
                                                h="0.25rem"
                                                bgColor="primary_10"
                                                pos="absolute"
                                                bottom="0"
                                                borderRadius={
                                                    "0.1875rem 0.1875rem 0rem 0rem"
                                                }
                                                className="indicator"
                                            />
                                        }
                                    </Flex>
                                );
                            })} */}

                            <TestimoniesNav
                                totalSlides={clientsData?.length}
                                activeSlide={activeSlide}
                                goToSlide={goToSlide}
                            />
                        </Flex>
                    </Box>
                </Box>

                <Box mt="4.5rem">
                    <Slider ref={sliderRef} {...settings}>
                        {clientsData.map((item) => {
                            return (
                                <Box key={item?.name}>
                                    <Flex
                                        gap={["1rem", "2rem", "4.3rem"]}
                                        flexDir={["column", null, "row"]}
                                    >
                                        <Image
                                            w="100%"
                                            // src="/images/t_1.svg"
                                            src={item.imgUrl}
                                            alt="images"
                                            rounded="2rem"
                                            objectFit={"cover"}
                                            maxW={["24rem"]}
                                            maxH={["22.4rem"]}
                                            mx="auto"
                                        />

                                        <Flex
                                            align={"flex-start"}
                                            gap={["1rem", null, "2.4rem"]}
                                        >
                                            <Image
                                                src="/images/quote.svg"
                                                alt="qoutation mark"
                                                boxSize={["3rem", "5rem"]}
                                            />
                                            <Box
                                                maxW="36.8rem"
                                                fontSize={["1.2rem", "1.5rem"]}
                                            >
                                                <Text mt="1rem">
                                                    {item?.comment}
                                                </Text>

                                                <Text mt="1rem">
                                                    Best regards
                                                </Text>
                                                <Text>{item?.name}</Text>
                                            </Box>
                                        </Flex>
                                    </Flex>
                                </Box>
                            );
                        })}
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
};

export default Testimonies;
