import React, { useState } from "react";
import {
    Box,
    Card,
    Stack,
    IconButton,
    Icon,
    Text,
    VStack,
    HStack,
    Flex,
    Image,
    Spinner,
    useToast,
} from "@chakra-ui/react";
import { BiPencil, BiTrash } from "react-icons/bi";

import EditBlogModal from "./EditBlogModal";
import { bearerToken, endpointUrl } from "@/lib/data";

const AdminBlogCard = ({ blogData, fetchBlogs }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const toast = useToast();
    // console.log(blogData);
    const deleteBlog = async (blogId) => {
        setIsDeleting(true);
        const url = `${endpointUrl}/blog?blogId=${blogId}&imagId=${blogData?.image?.imageId}`;
        console.log(url);
        try {
            console.log("bearerToken", bearerToken);
            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${bearerToken}`,
                },
            };
            const response = await fetch(url, options);
            const data = await response.json(); // Parse the JSON response
            if (!response.ok) {
                toast({
                    title: data.message,
                    status: "error",
                    position: "top-left",
                });
            } else {
                toast({
                    title: data.message,
                    status: "success",
                    position: "top-left",
                });
                fetchBlogs();
            }
        } catch (error) {
            console.error("Error sending data:", error);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <Card
            bg="white"
            boxShadow="md"
            rounded="md"
            overflow="hidden"
            p={4}
            // maxW="30rem"
            // mr={4}
            // mb={4}
        >
            <Flex gap="1.2rem" align="center">
                <Image
                    src={blogData?.image?.imageUrl}
                    fallbackSrc="https://via.placeholder.com/150"
                    alt="image"
                    maxW={"7rem"}
                    maxH={"7rem"}
                    w="100%"
                    h="100%"
                    objectFit={"cover"}
                />
                <Box>
                    <Text fontSize="sm" fontWeight="bold" noOfLines={"2"}>
                        {blogData.title}
                    </Text>
                    <Text noOfLines={"2"} maxW="15rem" fontSize=".8rem">
                        {blogData.description}
                    </Text>
                    <HStack spacing={4} mt={"1rem"} alignItems="center">
                        <IconButton
                            icon={
                                isDeleting ? <Spinner /> : <Icon as={BiTrash} />
                            }
                            onClick={() => {
                                if (
                                    confirm(
                                        "Are you sure you want to delete this",
                                    )
                                ) {
                                    deleteBlog(blogData?._id);
                                }
                            }}
                        />
                        {/* <IconButton
                            icon={<Icon as={BiPencil} />}
                            onClick={onEdit}
                        /> */}
                        <EditBlogModal
                            blogData={blogData}
                            fetchBlogs={fetchBlogs}
                        />
                    </HStack>
                </Box>
            </Flex>
        </Card>
    );
};

export default AdminBlogCard;
