"use client";

import React from "react";
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    Image,
} from "@chakra-ui/react";
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
} from "react-icons/fi";

const LinkItems = [
    {
        name: "Blog",
        icon: FiHome,
        href: "/dashboard",
        activeUrl: "blog",
    },
    {
        name: "Case Study",
        icon: FiTrendingUp,
        href: "/dashboard/case_study",
        activeUrl: "case_study",
    },
];

export default function DashNav({ activeNav, children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={"light_7"}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
                activeNav={activeNav}
            />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} activeNav={activeNav} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {/* Content */}
                {children}
            </Box>
        </Box>
    );
}

const SidebarContent = ({ onClose, activeNav, ...rest }) => {
    return (
        <Box
            bg={"gray.900"}
            borderRight="1px"
            borderRightColor={"gray.700"}
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="full"
            color="white"
            {...rest}
        >
            <Flex
                // h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Box as="a" href="/" pt="2rem">
                    <Image src="/images/greenLogo.svg" alt="logo" />
                </Box>
                <CloseButton
                    display={{ base: "flex", md: "none" }}
                    onClick={onClose}
                />
            </Flex>
            <Box mt="2rem">
                {LinkItems.map((link) => (
                    <NavItem
                        key={link.name}
                        icon={link.icon}
                        href={link.href}
                        activeNav={activeNav}
                        activeUrl={link.activeUrl}
                    >
                        {link.name}
                    </NavItem>
                ))}
            </Box>
        </Box>
    );
};

const NavItem = ({ icon, children, href, activeNav, activeUrl, ...rest }) => {
    return (
        <Box
            as="a"
            href={href}
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                bgColor={activeNav === activeUrl ? "primary_10" : "transparent"}
                _hover={{
                    bg: "primary_10",
                    color: "white",
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: "white",
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    );
};

const MobileNav = ({ onOpen, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={"gray.900"}
            borderBottomWidth="1px"
            borderBottomColor={"gray.700"}
            justifyContent="space-between"
            {...rest}
            color="white"
        >
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
                color="white"
            />

            <Image src="/images/greenLogo.svg" alt="logo" w="5rem" />
        </Flex>
    );
};
