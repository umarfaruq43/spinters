import { navItemData } from "@/lib/data";
import {
    useDisclosure,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Stack,
    Box,
    Flex,
    Drawer,
    Icon,
    Link,
    Image,
    Button,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { CgChevronRight, CgMenuRight } from "react-icons/cg";

export default function MobileNav({ theme, activeNav }) {
    const firstField = React.useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Icon
                as={CgMenuRight}
                boxSize="2rem"
                color={theme === "dark" ? "white" : "dark_2"}
                display={{ base: "block", md: "none", lg: "none" }}
                cursor="pointer"
                onClick={onOpen}
            />

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                initialFocusRef={firstField}
            >
                <DrawerOverlay />
                <DrawerContent bgColor={theme === "dark" ? "white" : "dark_1"}>
                    <DrawerHeader
                        borderBottomWidth="1px"
                        borderBottomColor={
                            theme === "dark"
                                ? "rgba(0,0,0,.2)"
                                : "rgba(255,255,255,.2)"
                        }
                    >
                        <Flex
                            pos="relative"
                            align="center"
                            justify="space-between"
                        >
                            <Link href="/" _focusVisible={{}}>
                                <Image
                                    src={`${
                                        theme === "dark"
                                            ? "/logo/blackLogo.png"
                                            : "/logo/whiteLogo.png"
                                    }`}
                                    alt="Spinters Logo"
                                    w="7rem"
                                />
                            </Link>
                            <DrawerCloseButton
                                pos="relative"
                                top="unset"
                                right="unset"
                                // color="white"
                                color={theme !== "dark" ? "white" : "dark_2"}
                                boxSize={"2rem"}
                            />
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing="0px" onClick={onClose}>
                            {navItemData.map((item) => {
                                return (
                                    <Link
                                        href={item.href}
                                        key={item?.title}
                                        display="flex"
                                        py="1rem"
                                        color={
                                            theme === "dark"
                                                ? "dark_2"
                                                : "white"
                                        }
                                        alignItems={"center"}
                                        justifyContent={"space-between"}
                                        fontWeight={
                                            activeNav === item.href ||
                                            item.href_2 === "homePage"
                                                ? "700"
                                                : "400"
                                        }
                                        // _hover={{}}
                                    >
                                        <Text fontSize="1rem">
                                            {" "}
                                            {item.title}{" "}
                                        </Text>
                                        <Icon
                                            as={CgChevronRight}
                                            boxSize="1.4rem"
                                        />
                                    </Link>
                                );
                            })}

                            <Box onClick={onClose}>
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
                                    mt="3rem"
                                    textAlign={"center"}
                                    rounded="0px"
                                >
                                    Contact Us
                                </Button>
                            </Box>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}
