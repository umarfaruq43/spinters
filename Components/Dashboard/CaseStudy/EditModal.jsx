import React, { useRef, useState } from "react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Icon,
    IconButton,
    Box,
    Flex,
    FormLabel,
    Image,
    Input,
    Stack,
    Text,
} from "@chakra-ui/react";
import { BiPencil } from "react-icons/bi";
import { Formik } from "formik";
import CustomInput from "../../common/CutomInputs";
import { LuUploadCloud } from "react-icons/lu";
import RichEditor from "@/Components/common/RichEditor";
import CustomTextarea from "@/Components/common/CustomTextarea";

const EditModal = ({ caseStudyData }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [value, setValue] = useState("");

    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
    };

    const handleUploadIconClick = () => {
        // Trigger the file input click when the upload icon is clicked
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <IconButton icon={<Icon as={BiPencil} />} onClick={onOpen} />

            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Case Study</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Formik
                            initialValues={{
                                projectTitle: caseStudyData?.projectTitle || "",
                                projectSubTitle:
                                    caseStudyData?.projectSubTitle || "",
                                projectDescription:
                                    caseStudyData?.projectDescription || "",
                                projectOverview:
                                    caseStudyData?.projectOverview || "",
                                projectPro: caseStudyData?.projectPro || "",
                                projectSolution:
                                    caseStudyData?.projectSolution || "",
                                clientName: caseStudyData?.clientName || "",
                                projectTimeline:
                                    caseStudyData?.projectTimeline || "",
                                projectCategory:
                                    caseStudyData?.projectCategory || "",
                                servicesProvided:
                                    caseStudyData?.servicesProvided || "",
                                imageUrl: caseStudyData?.imageUrl || "",
                            }}
                            validate={(values) => {
                                let errors = {};
                                if (!values.projectTitle) {
                                    errors.projectTitle = "required";
                                }
                                if (!values.projectSubTitle) {
                                    errors.projectSubTitle = "required";
                                }
                                if (!values.projectDescription) {
                                    errors.projectDescription = "required";
                                }
                                if (!values.projectOverview) {
                                    errors.projectOverview = "required";
                                }
                                if (!values.projectPro) {
                                    errors.projectPro = "required";
                                }
                                if (!values.projectSolution) {
                                    errors.projectSolution = "required";
                                }
                                if (!values.clientName) {
                                    errors.clientName = "required";
                                }
                                if (!values.projectTimeline) {
                                    errors.projectTimeline = "required";
                                }
                                if (!values.projectCategory) {
                                    errors.projectCategory = "required";
                                }
                                if (!values.servicesProvided) {
                                    errors.servicesProvided = "required";
                                }
                                if (!values.imageUrl) {
                                    errors.imageUrl = "required";
                                }

                                return errors;
                            }}
                            onSubmit={(values) => {
                                console.log(values);
                            }}
                        >
                            {({
                                handleSubmit,
                                errors,
                                touched,
                                isValid,
                                dirty,
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <Stack
                                        maxW="56rem"
                                        mx="auto"
                                        spacingY={"2rem"}
                                        pb="2rem"
                                    >
                                        <CustomInput
                                            label="Project Title"
                                            name="projectTitle"
                                            type="text"
                                            placeholder=""
                                            errors={errors}
                                            touched={touched}
                                        />{" "}
                                        <CustomInput
                                            label="Project Subtitle"
                                            name="projectSubTitle"
                                            type="text"
                                            placeholder=""
                                            errors={errors}
                                            touched={touched}
                                        />{" "}
                                        <CustomTextarea
                                            label="Project Description"
                                            name="projectDescription"
                                            type="text"
                                            placeholder=""
                                            errors={errors}
                                            touched={touched}
                                        />{" "}
                                        <CustomTextarea
                                            label="Project Overview"
                                            name="projectOverview"
                                            type="text"
                                            placeholder=""
                                            errors={errors}
                                            touched={touched}
                                        />{" "}
                                        <CustomTextarea
                                            label="The Problem"
                                            name="projectPro"
                                            type="text"
                                            placeholder=""
                                            errors={errors}
                                            touched={touched}
                                        />{" "}
                                        <CustomTextarea
                                            label="Our Solution"
                                            name="projectSolution"
                                            type="text"
                                            placeholder=""
                                            errors={errors}
                                            touched={touched}
                                        />{" "}
                                        <CustomInput
                                            label="Client Name"
                                            name="clientName"
                                            type="text"
                                            placeholder=""
                                            errors={errors}
                                            touched={touched}
                                        />{" "}
                                        <CustomInput
                                            label="Project Timeline"
                                            name="projectTimeline"
                                            type="text"
                                            placeholder=""
                                            errors={errors}
                                            touched={touched}
                                        />{" "}
                                        <CustomInput
                                            label="Project Category"
                                            name="projectCategory"
                                            type="text"
                                            placeholder=""
                                            errors={errors}
                                            touched={touched}
                                        />{" "}
                                        <CustomInput
                                            label="Services Provided"
                                            name="servicesProvided"
                                            type="text"
                                            placeholder=""
                                            errors={errors}
                                            touched={touched}
                                        />
                                        {/* Photo Upload */}
                                        <Box>
                                            <FormLabel
                                                htmlFor="image"
                                                color="gray_4"
                                                fontSize={"0.875rem"}
                                                fontWeight={500}
                                            >
                                                Upload Cover Photo
                                            </FormLabel>
                                            {!image ? (
                                                <>
                                                    <Input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={
                                                            handleImageChange
                                                        }
                                                        name="image"
                                                        display={"none"}
                                                        ref={fileInputRef}
                                                    />

                                                    <Flex
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={
                                                            handleUploadIconClick
                                                        }
                                                        bgColor="white"
                                                        color="black"
                                                        border="1px"
                                                        borderColor="gray_5"
                                                        borderStyle={"dashed"}
                                                        borderRadius={"0.5rem"}
                                                        boxShadow={
                                                            "0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                                                        }
                                                        h="15rem"
                                                        justify="center"
                                                        align="center"
                                                    >
                                                        <Box>
                                                            <Icon
                                                                as={
                                                                    LuUploadCloud
                                                                }
                                                                boxSize={"5rem"}
                                                            />
                                                        </Box>
                                                    </Flex>
                                                </>
                                            ) : (
                                                <Box>
                                                    <Image
                                                        src={image}
                                                        alt="Preview"
                                                        style={{
                                                            maxWidth: "100%",
                                                            maxHeight: "200px",
                                                        }}
                                                    />
                                                    <button
                                                        onClick={
                                                            handleRemoveImage
                                                        }
                                                    >
                                                        <Text color="red">
                                                            Remove Image
                                                        </Text>
                                                    </button>
                                                </Box>
                                            )}
                                        </Box>
                                        {/* Submit  */}
                                        <Box mt="2rem">
                                            <Button
                                                _focus={{}}
                                                _hover={{}}
                                                _active={{}}
                                                type="submit"
                                                color="white"
                                                w="100%"
                                                h="auto"
                                                py="1rem"
                                                px="1.25rem"
                                                bgColor={"primary_10"}
                                                boxShadow={
                                                    "0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                                                }
                                            >
                                                Send message
                                            </Button>
                                        </Box>
                                    </Stack>
                                </form>
                            )}
                        </Formik>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default EditModal;
