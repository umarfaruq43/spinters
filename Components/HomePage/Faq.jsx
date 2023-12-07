import {
    Box,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Icon,
    Stack,
} from "@chakra-ui/react";
import React from "react";
import Container from "../common/Container";
import { LuMinusCircle } from "react-icons/lu";
import { MdAddCircleOutline } from "react-icons/md";
import { testimonyData } from "@/lib/data";
const Faq = ({ theme = "dark" }) => {
    return (
        <Box
            py={["4rem", "5rem", "6rem"]}
            bgColor={theme === "dark" ? "primary_30" : "white"}
        >
            <Container>
                <Box>
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
                                {testimonyData.map(({ que, ans }) => {
                                    return (
                                        <AccordionItem
                                            border="0px"
                                            key={que}
                                            _notFirst={{
                                                borderTop: "1px",
                                                borderTopColor: "light_3",
                                            }}
                                            pb={["1rem", null]}
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
                                                        {ans}
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
