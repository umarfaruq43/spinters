import {
    Box,
    Button,
    Flex,
    Icon,
    Image,
    Text,
    useClipboard,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
    BiLogoFacebookCircle,
    BiLogoLinkedinSquare,
    BiLogoTwitter,
} from "react-icons/bi";
import { LuCopy } from "react-icons/lu";

const ShareBlog = () => {
    const { onCopy, value, setValue, hasCopied } = useClipboard("");

    useEffect(() => {
        const currentUrl = window.location.href;
        setValue(currentUrl);
    }, []);
    const socialsShare = [
        {
            icon: BiLogoTwitter,
            clickFunc: () => {
                const tweetUrl = `https://twitter.com/intent/tweet?url=${value}&text=${"A blog from Spinters /n"}`;
                window.open(tweetUrl, "_blank");
            },
        },
        {
            icon: BiLogoFacebookCircle,
            clickFunc: () => {
                const linkToShare = "https://www.yourwebsite.com/page-to-share";
                const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${linkToShare}`;
                window.open(shareUrl, "_blank");
            },
        },

        {
            icon: BiLogoLinkedinSquare,
            clickFunc: () => {
                const linkToShare = "https://www.yourwebsite.com/page-to-share"; // Replace with your actual link
                const shareTitle = "Spinters"; // Replace with desired title
                const shareSummary = "A brief description of your spinters"; // Replace with desired summary
                const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${value}&title=${shareTitle}&summary=${shareSummary}`;
                window.open(shareUrl, "_blank");
            },
        },
        // {
        //     icon: BiLogoInstagram,
        //     clickFunc: () => {},
        // },
    ];
    return (
        <Flex
            mt="3rem"
            borderTop="1px"
            pt="1.5rem"
            borderTopColor={"light_3"}
            align={["", "center"]}
            justify={"space-between"}
            gap="1rem"
            flexDir={["column", "row"]}
            w="100%"
        >
            <Flex gap="0.75rem" align="center">
                <Image
                    src="/images/t_1.svg"
                    alt="Blog author"
                    boxSize="2.5rem"
                    rounded="full"
                    objectFit="cover"
                />
                <Box>
                    <Text fontWeight={"600"} fontSize={"1.125rem"}>
                        Rhye
                    </Text>
                    <Text color="light_6" fontSize="1rem">
                        Product Designer, Untitled
                    </Text>
                </Box>
            </Flex>
            <Flex gap="0.75rem">
                <Button
                    _hover={{}}
                    _active={{ opacity: ".5" }}
                    maxW="fit-content"
                    px="1rem"
                    py="0.62rem"
                    color={hasCopied ? "primary_10" : "gray_4"}
                    border={"1px"}
                    borderColor={hasCopied ? "primary_10" : "gray_5"}
                    boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
                    display="flex"
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap="0.5rem"
                    bgColor={"transparent"}
                    onClick={onCopy}
                >
                    <Icon
                        as={LuCopy}
                        boxSize="1.25rem"
                        color={hasCopied ? "primary_10" : "gray_4"}
                    />
                    <Text fontSize="0.875rem" fontWeight={"600"}>
                        {hasCopied ? "Copied!" : "Copy link"}
                    </Text>
                </Button>

                {socialsShare.map((item) => {
                    return (
                        <Button
                            key={item?.icon}
                            _hover={{}}
                            _active={{ opacity: ".5" }}
                            maxW="fit-content"
                            p="0.62rem"
                            color="gray_4"
                            border={"1px"}
                            borderColor="gray_5"
                            boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
                            bgColor="transparent"
                            onClick={item?.clickFunc}
                        >
                            <Icon
                                as={item?.icon}
                                boxSize="1.25rem"
                                color="gray_7"
                            />
                        </Button>
                    );
                })}
            </Flex>
        </Flex>
    );
};

export default ShareBlog;
