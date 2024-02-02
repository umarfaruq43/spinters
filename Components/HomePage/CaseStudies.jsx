import {
    Box,
    Text,
    Image,
    Stack,
    Flex,
    SimpleGrid,
    Button,
    useToast,
    Skeleton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import { endpointUrl } from "@/lib/data";
import { useRouter } from "next/router";

const CaseStudies = ({ theme = "light" }) => {
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(true);
    const [activeNav, setActiveNav] = useState(1);
    const [ProjectData, setProjectData] = useState([]);
    const router = useRouter();

    const [filteredData, setFilteredData] = useState([]);

    async function fetchProjects() {
        setIsLoading(true);
        const url = `${endpointUrl}/case-study`;

        try {
            const options = {
                method: "GET",
            };
            const response = await fetch(url, options);
            const data = await response.json(); // Parse the JSON response
            console.log("data", data);
            if (!response.ok) {
                toast({
                    title: data.message,
                    status: "error",
                    position: "top-left",
                });
            } else {
                setFilteredData(data?.data);

                setProjectData(data?.data);

                if (theme === "dark") {
                    setFilteredData(data?.data?.slice(0, 4));
                }
            }
        } catch (error) {
            console.error("Error sending data:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleActiveNav = (navName, navValue) => {
        if (navName === "All") {
            setFilteredData(ProjectData);
            setActiveNav(1);
            if (theme === "dark") {
                setFilteredData(filteredData?.slice(0, 3));
            }
        } else {
            const newData = ProjectData.filter((item) =>
                item.projectCategory.includes(navName)
            );
            setActiveNav(navValue);
            setFilteredData(newData);
            if (theme === "dark") {
                setFilteredData(filteredData?.slice(0, 3));
            }
        }
    };

    const navData = [
        { navName: "All", navValue: 1 },
        { navName: "Web", navValue: 2 },
        { navName: "Mobile", navValue: 3 },
        { navName: "Automation", navValue: 4 },
        { navName: "Cybersecurity", navValue: 5 },
        { navName: "Data Analytics", navValue: 6 },
    ];

    return (
        <Box
            py={["4rem", "5rem", "6rem"]}
            bgColor={theme === "dark" ? "dark_2" : "white"}
        >
            <Container>
                <Box color={theme === "dark" ? "white" : "dark_2"}>
                    {theme === "dark" && (
                        <Box>
                            <Text
                                fontSize={["2rem", null, "3rem"]}
                                fontWeight="700"
                                textAlign={"center"}
                            >
                                Case Studies, showcasing some of our
                                <Text as="i" display="block" color="primary_10">
                                    finest works
                                </Text>{" "}
                            </Text>

                            <Text
                                mt="1.5rem"
                                color="light_1"
                                maxW="50.3rem"
                                fontSize={"1.1rem"}
                                mx="auto"
                                textAlign={"center"}
                            >
                                Elevating our clients product with unparalleled
                                Value. Our case studies are a testament to our
                                unwavering commitment to creativity, innovation,
                                and delivering exceptional results.
                            </Text>
                        </Box>
                    )}

                    {/* Work Nav */}
                    <Box overflowX={"auto"}>
                        <Flex
                            mt={theme === "dark" ? "4.5rem" : ""}
                            justify={["auto", null, "center"]}
                            align="flex-start"
                            gap="1.2rem"
                            // overflowX={"scroll"}
                            maxW={["51rem"]}
                            w={["100%"]}
                            mx="auto"
                            // pl={{ base: "350px", sm: "200px", md: "0px" }}
                        >
                            {navData.map((item) => {
                                return (
                                    <Flex
                                        flexDir="column"
                                        align={"center"}
                                        key={item.navValue}
                                        flexShrink={0}
                                    >
                                        <Flex
                                            className="projectNav"
                                            w="fit-content"
                                            px="0.95rem"
                                            fontWeight="400"
                                            py="0.65rem"
                                            minW="6.2rem"
                                            // _hover={{ bgColor: "primary_10" }}
                                            bgColor={
                                                activeNav === item.navValue
                                                    ? "primary_10"
                                                    : `${
                                                          theme === "dark"
                                                              ? "gray_1"
                                                              : "primary_30"
                                                      }`
                                            }
                                            color={
                                                activeNav === item.navValue
                                                    ? "white"
                                                    : `${
                                                          theme === "dark"
                                                              ? "white"
                                                              : "dark_2"
                                                      }`
                                            }
                                            align="center"
                                            justify={"center"}
                                            rounded="12.5rem"
                                            // cursor="pointer"
                                            fontSize="0.875rem"
                                            as="button"
                                            onClick={() =>
                                                handleActiveNav(
                                                    item.navName,
                                                    item.navValue
                                                )
                                            }
                                        >
                                            {item.navName}
                                        </Flex>
                                        {activeNav === item.navValue && (
                                            <Box
                                                mt="1rem"
                                                w="2.5rem"
                                                h="0.9rem"
                                                bgColor={
                                                    theme === "dark"
                                                        ? "primary_40"
                                                        : "primary_10"
                                                }
                                                rounded="6.25rem"
                                            />
                                        )}
                                    </Flex>
                                );
                            })}
                        </Flex>
                    </Box>
                    {/*  */}

                    <Box mt="3rem">
                        {isLoading ? (
                            <SimpleGrid
                                columns={["1", "2", "3"]}
                                spacing={["2rem"]}
                            >
                                <Skeleton h="400px" rounded="2rem" />
                                <Skeleton h="400px" rounded="2rem" />
                                <Skeleton h="400px" rounded="2rem" />
                            </SimpleGrid>
                        ) : (
                            <>
                                {" "}
                                {filteredData?.length < 1 ? (
                                    <Flex
                                        minH="40vh"
                                        align="center"
                                        justify="center"
                                    >
                                        <Text> Not available </Text>
                                    </Flex>
                                ) : (
                                    <SimpleGrid
                                        columns={["1", "2"]}
                                        spacing={["2rem"]}
                                    >
                                        {filteredData.map((item) => {
                                            return (
                                                <Box
                                                    key={item?._id}
                                                    onClick={() =>
                                                        router.push(
                                                            `/case_study/${item?._id}`
                                                        )
                                                    }
                                                    // h="100%"
                                                    w="100%"
                                                    cursor="pointer"
                                                >
                                                    <Box>
                                                        <Image
                                                            src={
                                                                item?.coverPhoto
                                                                    ?.imageUrl
                                                            }
                                                            alt="img"
                                                            w="100%"
                                                            // h="100%"
                                                            // maxH={[
                                                            //     "20rem",
                                                            //     null,
                                                            //     "30rem",
                                                            //     "37.4rem",
                                                            // ]}
                                                            boxSize="37rem"
                                                            maxW="100%"
                                                            borderRadius={
                                                                "2rem"
                                                            }
                                                            objectFit={"cover"}
                                                        />
                                                    </Box>
                                                    <Box mt={["2.5rem"]}>
                                                        <Text
                                                            fontSize={"2.25rem"}
                                                            fontWeight={700}
                                                            color={
                                                                theme === "dark"
                                                                    ? "light_1"
                                                                    : "primary_10"
                                                            }
                                                        >
                                                            {item?.projectTitle}
                                                        </Text>
                                                        <Text mt="1rem">
                                                            {
                                                                item?.projectDescription
                                                            }
                                                        </Text>
                                                        {/* {theme === "dark" && ( */}
                                                        <Button
                                                            mt="2.5rem"
                                                            boxShadow={
                                                                "0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                                                            }
                                                            bgColor="gray_1"
                                                            color="white"
                                                            _hover={{
                                                                opacity: 0.8,
                                                            }}
                                                            _active={{}}
                                                            as="a"
                                                            href={`/case_study/${item?._id}`}
                                                        >
                                                            Read Case Study
                                                        </Button>
                                                        {/* )} */}
                                                    </Box>
                                                </Box>
                                            );
                                        })}
                                    </SimpleGrid>
                                )}
                            </>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default CaseStudies;
