import {
    Box,
    Flex,
    Icon,
    Image,
    Link,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";
import React from "react";
import Container from "./Container";
import { footerData } from "@/lib/data";

const Footer = () => {
    return (
        <Box py={["4rem", "5rem", "6rem"]} bgColor="dark_2" color="white">
            <Container>
                <Box>
                    <Flex
                        justify={"space-between"}
                        gap="1rem"
                        flexDir={["column", null, "row"]}
                    >
                        <Stack spacing={"1rem"} maxW="28.5rem" w="100%">
                            <Image
                                src="/images/greenLogo.png"
                                alt="logo"
                                w="13rem"
                            />
                            <Text fontSize={"1.125rem"}>
                                We specialize in Tech consultation, web
                                development, mobile development, automation,
                                cybersecurity, and data analytics. Let us bring
                                your digital dreams to life!
                            </Text>
                            <Box>
                                <Socials />
                            </Box>
                            <Box>
                                <Text>© Copyright 2024 Sprinters Agency</Text>
                            </Box>
                        </Stack>

                        <SimpleGrid
                            columns={[1, 2, 3]}
                            maxW="36.8rem"
                            w="100%"
                            spacing={"1rem"}
                        >
                            <Box>
                                <Text
                                    fontWeight={600}
                                    fontSize={["1.3rem", null, "1.5rem"]}
                                >
                                    Company
                                </Text>

                                <Stack
                                    spacing={["1rem", "2rem"]}
                                    mt={["1rem", "2rem"]}
                                >
                                    {footerData?.company?.map((item) => {
                                        return (
                                            <Link
                                                key={item.text}
                                                href={item.href}
                                                color={"light_4"}
                                            >
                                                {item.text}
                                            </Link>
                                        );
                                    })}
                                </Stack>
                            </Box>

                            <Box>
                                <Text
                                    fontWeight={600}
                                    fontSize={["1.3rem", null, "1.5rem"]}
                                >
                                    Support
                                </Text>

                                <Stack
                                    spacing={["1rem", "2rem"]}
                                    mt={["1rem", "2rem"]}
                                >
                                    {footerData?.support?.map((item) => {
                                        return (
                                            <Link
                                                key={item.text}
                                                href={item.href}
                                                color={"light_4"}
                                            >
                                                {item.text}
                                            </Link>
                                        );
                                    })}
                                </Stack>
                            </Box>

                            <Box>
                                <Text
                                    fontWeight={600}
                                    fontSize={["1.3rem", null, "1.5rem"]}
                                >
                                    Transparency
                                </Text>

                                <Stack
                                    spacing={["1rem", "2rem"]}
                                    mt={["1rem", "2rem"]}
                                >
                                    {footerData?.transparency?.map((item) => {
                                        return (
                                            <Link
                                                key={item.text}
                                                href={item.href}
                                                color={"light_4"}
                                            >
                                                {item.text}
                                            </Link>
                                        );
                                    })}
                                </Stack>
                            </Box>
                        </SimpleGrid>
                    </Flex>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;

const Socials = () => {
    return (
        <Stack direction={"row"} spacing={"1.5rem"}>
            {footerData?.socials?.map(({ icon, link }) => {
                return (
                    <Link href={link} key={icon} _groupHover={{}}>
                        <Icon
                            as={icon}
                            boxSize={"1.5rem"}
                            _hover={{ color: "primary_10" }}
                        />
                    </Link>
                );
            })}
        </Stack>
    );
};
