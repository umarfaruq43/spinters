import React from "react";
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
} from "@chakra-ui/react";
import { BiPencil, BiTrash } from "react-icons/bi";
import EditModal from "./EditBlogModal";

const AdminBlogCard = ({ blogData, onDelete, onEdit }) => {
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
                    src={blogData?.imageUrl || "/images/b_1.svg"}
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
                        {blogData.des}
                    </Text>
                    <HStack spacing={4} mt={"1rem"} alignItems="center">
                        <IconButton
                            icon={<Icon as={BiTrash} />}
                            onClick={onDelete}
                        />
                        {/* <IconButton
                            icon={<Icon as={BiPencil} />}
                            onClick={onEdit}
                        /> */}
                        <EditModal blogData={blogData} />
                    </HStack>
                </Box>
            </Flex>
        </Card>
    );
};

export default AdminBlogCard;
