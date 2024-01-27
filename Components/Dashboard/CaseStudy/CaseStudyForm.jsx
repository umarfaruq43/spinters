import {
    Box,
    Button,
    Flex,
    FormLabel,
    Icon,
    Image,
    Input,
    Spinner,
    Stack,
    Text,
    useToast,
} from "@chakra-ui/react";
import { Formik } from "formik";
import React, { useRef, useState } from "react";
import CustomInput from "../../common/CutomInputs";
import { LuUploadCloud } from "react-icons/lu";
import RichEditor from "@/Components/common/RichEditor";
import CustomTextarea from "@/Components/common/CustomTextarea";
import { bearerToken, endpointUrl } from "@/lib/data";

// import CKEditor from "@ckeditor/ckeditor5-react";
// // import Editor from "ckeditor5-custom-build";

const CaseStudyForm = () => {
    const toast = useToast();

    const fileInputRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingImage, setIsLoadingImage] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [err, setErr] = useState(false);
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

    async function upLoadImage(file) {
        setIsLoadingImage(true);
        const url = `${endpointUrl}/blog/upload/image`;
        const payload = new FormData();
        payload.append("blogImage", file);

        try {
            const options = {
                method: "POST",
                body: payload,
                headers: {
                    Authorization: `Bearer ${bearerToken}`,
                },
            };
            const response = await fetch(url, options);
            const data = await response.json();
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
                setUploadedImage(data?.data);
            }
        } catch (error) {
            console.error("Error sending data:", error);
        } finally {
            setIsLoadingImage(false);
        }
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file && allowedTypes.includes(file.type)) {
            upLoadImage(file);
        } else {
            toast({
                title: "Invalid Image",
                position: "top-left",
                status: "error",
                description: "Please select a valid PNG, JPG or JPEG file",
            });
        }
    };

    const handleRemoveImage = () => {
        setUploadedImage(null);
    };

    const handleUploadIconClick = () => {
        // Trigger the file input click when the upload icon is clicked
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const UploadProject = async (values) => {
        setIsLoading(true);

        const payload = {
            projectTitle: values?.projectTitle,
            projectSubtitle: values?.projectSubTitle,
            projectDescription: values?.projectDescription,
            projectOverview: values?.projectOverview,
            problem: values?.projectPro,
            solution: values?.projectSolution,
            clientName: values?.clientName,
            projectTimeline: values?.projectTimeline,
            projectCategory: values?.projectCategory,
            servicesProvides: values?.servicesProvided,
            coverPhoto: values?.imageUrl,
        };

        const url = `${endpointUrl}/case-study`;

        try {
            const options = {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${bearerToken}`,
                },
            };
            const response = await fetch(url, options);
            const data = await response.json();
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
            }
        } catch (error) {
            console.error("Error sending data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Formik
            initialValues={{
                projectTitle: "",
                projectSubTitle: "",
                projectDescription: "",
                projectOverview: "",
                projectPro: "",
                projectSolution: "",
                clientName: "",
                projectTimeline: "",
                projectCategory: "",
                servicesProvided: "",
                imageUrl: "",
            }}
            validate={(values) => {
                let errors = {};
                if (!values.projectTitle) {
                    errors.projectTitle = "Required";
                }
                if (!values.projectSubTitle) {
                    errors.projectSubTitle = "Required";
                }
                if (!values.projectDescription) {
                    errors.projectDescription = "Required";
                }
                if (!values.projectOverview) {
                    errors.projectOverview = "Required";
                }
                if (!values.projectPro) {
                    errors.projectPro = "Required";
                }
                if (!values.projectSolution) {
                    errors.projectSolution = "Required";
                }
                if (!values.clientName) {
                    errors.clientName = "Required";
                }
                if (!values.projectTimeline) {
                    errors.projectTimeline = "Required";
                }
                if (!values.projectCategory) {
                    errors.projectCategory = "Required";
                }
                if (!values.servicesProvided) {
                    errors.servicesProvided = "Required";
                }
                if (!uploadedImage) {
                    errors.imageUrl = "image is required is required";
                    setErr(true);
                } else {
                    setErr(false);
                }

                return errors;
            }}
            onSubmit={(values) => {
                console.log(values);
                values.imageUrl = uploadedImage;
                UploadProject(values);
            }}
        >
            {({ handleSubmit, errors, touched, isValid, dirty }) => (
                <form onSubmit={handleSubmit}>
                    <Stack maxW="56rem" mx="auto" spacingY={"2rem"}>
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

                            {!uploadedImage ? (
                                <>
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        name="image"
                                        display={"none"}
                                        ref={fileInputRef}
                                    />

                                    <Flex
                                        style={{ cursor: "pointer" }}
                                        onClick={handleUploadIconClick}
                                        bgColor="white"
                                        color="black"
                                        border="1px"
                                        borderColor={err ? "red.500" : "gray_5"}
                                        borderStyle={"dashed"}
                                        borderRadius={"0.5rem"}
                                        boxShadow={
                                            "0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                                        }
                                        h="15rem"
                                        justify="center"
                                        align="center"
                                    >
                                        <Flex align="center">
                                            {isLoadingImage ? (
                                                <Flex align="center" gap="1rem">
                                                    <Text align="center">
                                                        Uploading Image, please
                                                        wait....
                                                    </Text>
                                                    <Spinner size="sm" />
                                                </Flex>
                                            ) : (
                                                <Icon
                                                    as={LuUploadCloud}
                                                    boxSize={"5rem"}
                                                />
                                            )}
                                        </Flex>
                                    </Flex>

                                    {err && (
                                        <Text
                                            fontSize="12px"
                                            color="red.500"
                                            mt="0.7rem"
                                        >
                                            {" "}
                                            Cover photo is required{" "}
                                        </Text>
                                    )}
                                </>
                            ) : (
                                <Box>
                                    <Image
                                        src={uploadedImage?.imageUrl}
                                        alt="Preview"
                                        style={{
                                            maxWidth: "100%",
                                            maxHeight: "200px",
                                        }}
                                    />
                                    <button onClick={handleRemoveImage}>
                                        <Text color="red">Remove Image</Text>
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
                                isDisabled={isLoading}
                            >
                                {isLoading ? <Spinner /> : "Submit"}
                            </Button>
                        </Box>
                    </Stack>
                </form>
            )}
        </Formik>
    );
};

export default CaseStudyForm;
