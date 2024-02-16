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
    useToast,
    Spinner,
} from "@chakra-ui/react";
import { BiPencil, BiTrash, BiWindowOpen } from "react-icons/bi";
import EditModal from "./EditModal";
import { bearerToken, endpointUrl } from "@/lib/data";

const AdminCaseStudyCard = ({
    caseStudyData,
    setAddProject,
    fetchProjects,
    editableData,
}) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const toast = useToast();
    const deleteProject = async (projectId) => {
        setIsDeleting(true);
        const url = `${endpointUrl}/case-study?caseStudyId=${projectId}&imageId=sprinters/${caseStudyData?.image?.imageId}`;
        // const url = `${endpointUrl}/case-study/${projectId}`;

        try {
            const options = {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${bearerToken}`,
                },
            };
            const response = await fetch(url, options);
            const data = await response.json(); // Parse the JSON response
            console.log(data);
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
                fetchProjects();
            }
        } catch (error) {
            console.error("Error sending data:", error);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <Card bg="white" boxShadow="md" rounded="md" overflow="hidden" p={4}>
            <Flex gap="1.2rem" align="center">
                <Image
                    src={caseStudyData?.coverPhoto?.imageUrl}
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
                        {caseStudyData?.projectTitle}
                    </Text>
                    <Text noOfLines={"2"} maxW="15rem" fontSize=".8rem">
                        {caseStudyData?.projectSubtitle}
                    </Text>
                    <HStack spacing={4} mt={"1rem"} alignItems="center">
                        <IconButton
                            icon={
                                isDeleting ? <Spinner /> : <Icon as={BiTrash} />
                            }
                            onClick={() => deleteProject(caseStudyData?._id)}
                        />

                        <EditModal
                            caseStudyData={caseStudyData}
                            fetchProjects={fetchProjects}
                        />
                        {/* <IconButton
                            icon={<Icon as={BiWindowOpen} />}
                            as="a"
                            href={caseStudyData?.href}
                        /> */}
                    </HStack>
                </Box>
            </Flex>
        </Card>
    );
};

export default AdminCaseStudyCard;
