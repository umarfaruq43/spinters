import {
    Box,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Icon,
    Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import { LuMinusCircle } from "react-icons/lu";
import { MdAddCircleOutline } from "react-icons/md";
import { testimonyData } from "@/lib/data";
const Faq = ({ theme = "dark", homePage }) => {
    const [currentData, setCurrentData] = useState([]);
    const halfData = testimonyData.slice(0, 5);

    useEffect(() => {
        if (homePage) {
            setCurrentData(halfData);
        } else {
            setCurrentData(testimonyData);
        }
    }, []);

    return (
        <Box
            py={["4rem", "5rem", "6rem"]}
            bgColor={theme === "dark" ? "primary_30" : "white"}
        >
            <Container>
                <Box data-aos="fade-down">
                    <Text
                        fontSize={["2rem", null, "3rem"]}
                        fontWeight="700"
                        textAlign={"center"}
                    >
                        Frequently asked{" "}
                        <Text as="i" color="primary_10">
                            questions
                        </Text>{" "}
                    </Text>

                    {theme === "dark" && (
                        <Text
                            fontSize={["1.125rem"]}
                            lineHeight={["155.556%"]}
                            textAlign={"center"}
                            mt="1.25rem"
                        >
                            Everything you need to know about the product and
                            billing.
                        </Text>
                    )}
                </Box>
                <Box mt={["2rem", "4.5rem"]}>
                    <Box maxW="48rem" mx="auto">
                        <Accordion allowMultiple>
                            <Stack spacing={""}>
                                {currentData.map(({ que, ans }) => {
                                    return (
                                        <AccordionItem
                                            border="0px"
                                            key={que}
                                            _notFirst={{
                                                borderTop: "1px",
                                                borderTopColor: "light_3",
                                            }}
                                            pb={["1rem", null]}
                                            data-aos="fade-up"
                                        >
                                            {({ isExpanded }) => (
                                                <>
                                                    <h2>
                                                        <AccordionButton
                                                            pt="1.5rem"
                                                            _hover={{}}
                                                        >
                                                            <Box
                                                                as="span"
                                                                flex="1"
                                                                textAlign="left"
                                                                color="dark_1"
                                                                fontWeight={
                                                                    "500"
                                                                }
                                                                fontSize={
                                                                    "1.125rem"
                                                                }
                                                            >
                                                                {que}
                                                            </Box>
                                                            {isExpanded ? (
                                                                <Icon
                                                                    as={
                                                                        LuMinusCircle
                                                                    }
                                                                    boxSize="1.5rem"
                                                                    color="primary_10"
                                                                />
                                                            ) : (
                                                                <Icon
                                                                    as={
                                                                        MdAddCircleOutline
                                                                    }
                                                                    boxSize="1.5rem"
                                                                    color="primary_10"
                                                                />
                                                            )}
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel color="neutral_30">
                                                        <p
                                                            dangerouslySetInnerHTML={{
                                                                __html: ans,
                                                            }}
                                                        />
                                                    </AccordionPanel>
                                                </>
                                            )}
                                        </AccordionItem>
                                    );
                                })}
                            </Stack>
                        </Accordion>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Faq;
