import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

const BlogCard = ({ blogData }) => {
    console.log("blogData", blogData);
    return (
        <Box
            rounded="0.9375rem"
            bgColor="white"
            p="1.5rem"
            boxShadow="0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)"
            pos="relative"
        >
            <Box>
                <Box>
                    <Image
                        src={blogData?.image?.imageUrl}
                        alt=""
                        w="100%"
                        // minH="15rem"
                        maxH="15rem"
                        h="100%"
                        rounded="0.4375rem"
                        objectFit="cover"
                        fallbackSrc="https://via.placeholder.com/150"
                    />
                </Box>

                <Box pt="2rem">
                    <Text fontSize="0.875rem" fontWeight={600}>
                        {blogData?.tags?.[0]}
                    </Text>
                    <Flex
                        as="a"
                        href={`/blogs/${blogData?._id}`}
                        mt="0.75rem"
                        gap="1rem"
                        justify="space-between"
                    >
                        <Text
                            as="span"
                            fontSize="1.5rem"
                            fontWeight="600"
                            noOfLines={1}
                        >
                            {blogData?.title}
                        </Text>
                        <Icon
                            mt="0.25rem"
                            as={LuArrowUpRight}
                            boxSize={"1.5rem"}
                            color="dark_3"
                        />
                    </Flex>
                    <Box mt="0.75rem">
                        <Text fontSize="1rem" noOfLines={3}>
                            {blogData?.description}
                        </Text>
                    </Box>

                    <Box mt="2rem" h="2.5rem"></Box>
                    <Flex
                        gap="0.75rem"
                        align="center"
                        pos="absolute"
                        bottom="2rem"
                    >
                        <Box>
                            <Text fontWeight={"600"} fontSize={"0.875rem"}>
                                {blogData?.authorName}
                            </Text>
                            <Text color="light_6" fontSize="0.875rem">
                                17 Jan 2022
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default BlogCard;
