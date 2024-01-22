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
import { BiPencil, BiTrash, BiWindowOpen } from "react-icons/bi";
import EditModal from "./EditModal";

const AdminCaseStudyCard = ({
    caseStudyData,
    onDelete,
    onEdit,
    editableData,
}) => {
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
                    src="/images/b_1.svg"
                    fallbackSrc="https://via.placeholder.com/150"
                    alt="image"
                    maxW={"7rem"}
                    // maxH={"7rem"}
                    minH="100%"
                    w="100%"
                    objectFit={"cover"}
                />
                <Box>
                    <Text fontSize="sm" fontWeight="bold" noOfLines={"2"}>
                        {caseStudyData.projectTitle}
                    </Text>
                    <Text noOfLines={"2"} maxW="15rem" fontSize=".8rem">
                        {caseStudyData.projectSubTitle}
                    </Text>
                    <HStack spacing={4} mt={"1rem"} alignItems="center">
                        <IconButton
                            icon={<Icon as={BiTrash} />}
                            onClick={onDelete}
                        />

                        <EditModal caseStudyData={caseStudyData} />
                        <IconButton
                            icon={<Icon as={BiWindowOpen} />}
                            as="a"
                            href={caseStudyData.href}
                        />
                    </HStack>
                </Box>
            </Flex>
        </Card>
    );
};

export default AdminCaseStudyCard;