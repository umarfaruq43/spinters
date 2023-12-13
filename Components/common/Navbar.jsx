import { navItemData } from "@/lib/data";
import {
    Box,
    Button,
    Flex,
    Icon,
    Image,
    Link,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
const Navbar = ({ activeNav, theme }) => {
    const [showNav, setShowNav] = useState(false);
    const toggleNav = () => {
        setShowNav(!showNav);
    };
    return (
        <Box>
            <Flex
                align="center"
                gap={["3rem", "4rem", "3rem", "10rem"]}
                justify={{ base: "space-between", md: "flex-start" }}
                pos={"relative"}
            >
                <Link href="/">
                    <Image
                        src="/images/greenLogo.svg"
                        alt="Spinters Logo"
                        w={["5rem", "6rem", "7rem"]}
                    />
                </Link>
                <Box
                    w="fit-content"
                    maxW="45rem"
                    // color="white"
                    color={theme === "dark" ? "white" : "dark_2"}
                    display={{ base: "none", md: "block" }}
                >
                    <Flex
                        rounded={"6.25rem"}
                        className={
                            theme === "dark" ? "blurDarkNav" : "blurLightNav"
                        }
                        py="1.06rem"
                        px="1.56rem"
                        gap="2.44rem"
                        align="center"
                    >
                        <Flex flexShrink={1}>
                            {navItemData.map((item) => {
                                console.log(item);
                                return (
                                    <NavItem
                                        activeNav={activeNav}
                                        href={item.href}
                                        key={item.activeNo}
                                        title={item.title}
                                        theme={theme}
                                        href_2={item.href_2}
                                    />
                                );
                            })}
                        </Flex>

                        <Button
                            h="3rem"
                            bgColor="gray_1"
                            color="white"
                            px="1.25rem"
                            py="0.75rem"
                            display={"block"}
                            _hover={{}}
                            _focus={{}}
                            _active={{}}
                            fontSize={[""]}
                            as="a"
                            href="/contact"
                        >
                            Contact Us
                        </Button>
                    </Flex>
                </Box>

                <Icon
                    as={FaBars}
                    boxSize="1.5rem"
                    color={theme === "dark" ? "white" : "dark"}
                    display={{ base: "block", md: "none", lg: "none" }}
                    cursor="pointer"
                    onClick={toggleNav}
                />
                {showNav && (
                    <MobileNav showNav={showNav} activeNav={activeNav} />
                )}
            </Flex>
        </Box>
    );
};

export default Navbar;

const NavItem = ({ activeNav, href, title, theme, href_2 }) => {
    const router = useRouter();
    let isActive = activeNav === href;
    if (router.asPath === "/" && href === "/about") {
        isActive = true;
    }
    return (
        <Link
            flexShrink={0}
            className={`${
                isActive
                    ? theme === "dark"
                        ? "darkNavItem "
                        : "lightNavItem"
                    : ""
            } rounded_min`}
            color={
                isActive
                    ? `${theme === "dark" ? "white" : "dark_1"}`
                    : `${theme === "dark" ? "light_1" : "dark_1"}`
            }
            borderColor={
                isActive
                    ? `${theme === "dark" ? "white" : "dark_1"}`
                    : "transparent"
            }
            rounded={"6.25rem"}
            opacity={isActive ? "1" : "0.5"}
            py="0.7rem"
            px="1.4rem"
            cursor="pointer"
            textDecor={"none"}
            href={href}
            fontWeight={600}
            _hover={{ textDecor: "none" }}
        >
            {title}
        </Link>
    );
};

const MobileNav = ({ showNav, activeNav }) => {
    return (
        <Box
            pos="absolute"
            bgColor="gray_1"
            w="100%"
            left="0"
            right={0}
            // h="300px"
            top="75px"
            display={{ md: "none" }}
            rounded="1rem"
            overflow={"hidden"}
            zIndex={"500"}
        >
            <Stack spacing="0">
                {navItemData.map((item) => {
                    const isActive = activeNav === item.href;
                    return (
                        <Link
                            key={item.activeNo}
                            className={`${isActive ? "navItem" : ""} `}
                            href={item.href}
                            bgColor={"rgba(255,255,255,0.12)"}
                            py="1.07rem"
                            px="1rem"
                            fontSize="1rem"
                            color={isActive ? "white" : "neutral_50"}
                            _hover={{
                                textDecor: "none",
                                bgColor: "rgba(255,255,255,.12)",
                                color: "white",
                            }}
                            fontWeight={isActive ? "600" : "500"}
                        >
                            {item.title}
                        </Link>
                    );
                })}
            </Stack>
        </Box>
    );
};
