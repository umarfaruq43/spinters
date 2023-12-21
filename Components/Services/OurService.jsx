import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useRef } from "react";
import CustomPagination from "../common/CustomPagination";
import Container from "../common/Container";
import { ServiceDetailData } from "@/lib/data";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const CustomArrow = ({ onClick, icon, ...props }) => (
    <Button
        w="100%"
        onClick={onClick}
        bg="transparent"
        color="primary_10"
        _hover={{ bg: "transparent", color: "primary_20" }}
        fontSize={["1rem", null, "1.5rem"]}
        cursor="pointer"
        display={["none", "block"]}
        {...props}
    >
        {icon}
    </Button>
);

const OurService = () => {
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
        arrows: false,
    };

    const goToSlide = (slideIndex) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(slideIndex);
            setActiveSlide(slideIndex);
        }
    };

    return (
        <Box py="5rem">
            <Container>
                <Box>
                    <Text
                        fontSize={["1.25rem"]}
                        fontWeight={500}
                        color="dark_1"
                        textAlign={"center"}
                    >
                        Our services includes
                    </Text>
                </Box>

                <Box>
                    <Flex
                        w="100%"
                        align="center"
                        justify="space-between"
                        mt="3.75rem"
                    >
                        <CustomArrow
                            onClick={() => sliderRef.current.slickPrev()}
                            icon={
                                <Icon
                                    as={FiArrowLeft}
                                    boxSize="1.5rem"
                                    color="neutral_30"
                                />
                            }
                            flexShrink={1}
                        />
                        <Box
                            pos="relative"
                            maxW={["38rem", null, "40rem", "48rem", "58rem"]}
                            mx="auto"
                            flexShrink={1}
                            w="100%"
                        >
                            <Slider ref={sliderRef} {...settings}>
                                {ServiceDetailData.map(
                                    ({
                                        normalTitle,
                                        editableTitle,
                                        des,
                                        title,
                                    }) => {
                                        return (
                                            <Box key={title} px="1rem">
                                                <Box>
                                                    <Text
                                                        fontSize={[
                                                            "2rem",
                                                            null,
                                                            "3rem",
                                                        ]}
                                                        fontWeight="700"
                                                        textAlign={"center"}
                                                        w="100%"
                                                        mx="auto"
                                                    >
                                                        {normalTitle}{" "}
                                                        <Text
                                                            as="i"
                                                            color="primary_10"
                                                        >
                                                            {editableTitle}
                                                        </Text>{" "}
                                                    </Text>

                                                    <Box mt="1.5rem">
                                                        <Text
                                                            fontSize={[
                                                                "1rem",
                                                                null,
                                                                "1.87rem",
                                                            ]}
                                                            color={"light_5"}
                                                            textAlign={"center"}
                                                        >
                                                            {des}
                                                        </Text>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        );
                                    }
                                )}
                            </Slider>
                        </Box>
                        <CustomArrow
                            onClick={() => sliderRef.current.slickNext()}
                            icon={
                                <Icon
                                    as={FiArrowRight}
                                    boxSize="1.5rem"
                                    color="neutral_30"
                                />
                            }
                        />
                    </Flex>
                </Box>
                <CustomPagination
                    totalSlides={ServiceDetailData?.length}
                    activeSlide={activeSlide}
                    goToSlide={goToSlide}
                />
            </Container>
        </Box>
    );
};

export default OurService;
