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
    useToast,
    Spinner,
} from "@chakra-ui/react";
import { BiPencil } from "react-icons/bi";
import { Formik } from "formik";

import { LuUploadCloud } from "react-icons/lu";
import RichEditor from "@/Components/common/RichEditor";
import CustomInput from "../common/CutomInputs";
import { bearerToken, endpointUrl } from "@/lib/data";

const EditBlogModal = ({ blogData, fetchBlogs }) => {
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const [contents, setContents] = useState(blogData?.content || "");
    const [contentsErr, setContentsErr] = useState("");
    const [err, setErr] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [uploadedImage, setUploadedImage] = useState(blogData?.image);

    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file && allowedTypes.includes(file.type)) {
            const preview = URL.createObjectURL(file);
            setUploadedImage(file);
            setPreviewUrl(preview);
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
        setPreviewUrl(null);
    };

    const handleUploadIconClick = () => {
        // Trigger the file input click when the upload icon is clicked
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    // ****************** Deformat Blog tags
    const tagsToString = blogData?.tags?.join(", "); // Join elements with a space as a separator

    // ****************** edit IMAGE

    // ****************** edit Blog

    const UploadBlog = async (values) => {
        setIsLoading(true);

        let formatedBlogTags = values?.blogTags?.split(",");

        const payload = new FormData();
        payload.append("title", values?.blogTitle);
        payload.append("description", values?.blogDes);
        formatedBlogTags?.forEach((tag, index) => {
            payload.append(`tags[${index}]`, tag);
        });
        payload.append("content", values?.blogContent);
        payload.append("blog_image", uploadedImage);
        payload.append("imageId", blogData?.image?.imageId);
        payload.append("blogId", blogData?._id);

        const url = `${endpointUrl}/blog/update`;

        try {
            const options = {
                method: "PATCH",
                body: payload,
                headers: {
                    // "Content-Type": "application/json",
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
                onClose();
                fetchBlogs();
            }
        } catch (error) {
            console.error("Error sending data:", error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <>
            <IconButton icon={<Icon as={BiPencil} />} onClick={onOpen} />

            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader> Blog Edit </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb="2rem">
                        <Formik
                            initialValues={{
                                blogTitle: blogData?.title || "",
                                blogDes: blogData?.description || "",
                                blogContent: blogData?.content || "",
                                blogTags: tagsToString || "",
                                imageUrl: blogData?.imageUrl || "",
                            }}
                            validate={(values) => {
                                let errors = {};

                                if (!values.blogTitle) {
                                    errors.blogTitle = "Blog Title is required";
                                }
                                if (!values.blogDes) {
                                    errors.blogDes =
                                        "Blog description is required";
                                }
                                if (!values.blogTags) {
                                    errors.blogTags = "Blog Tags are required";
                                }
                                if (!contents) {
                                    errors.blogContent =
                                        "Blog Content  is required";
                                    setContentsErr(true);
                                } else {
                                    setContentsErr(false);
                                }

                                if (!uploadedImage) {
                                    errors.imageUrl =
                                        "image is required is required";
                                    setErr(true);
                                } else {
                                    setErr(false);
                                }
                                console.log(errors);
                                return errors;
                            }}
                            onSubmit={(values) => {
                                values.blogContent = contents;
                                UploadBlog(values);
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
                                    >
                                        <CustomInput
                                            label="Blog Title"
                                            name="blogTitle"
                                            type="text"
                                            placeholder="UX Review Presentations"
                                            errors={errors}
                                            touched={touched}
                                        />
                                        <CustomInput
                                            label="Blog Description"
                                            name="blogDes"
                                            type="text"
                                            placeholder="How do you create compelling presentations that..."
                                            errors={errors}
                                            touched={touched}
                                        />{" "}
                                        <CustomInput
                                            label="Blog Tags"
                                            name="blogTags"
                                            type="text"
                                            placeholder="Design, Book, Stage"
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
                                                        borderColor={
                                                            err
                                                                ? "red.500"
                                                                : "gray_5"
                                                        }
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
                                                            <Icon
                                                                as={
                                                                    LuUploadCloud
                                                                }
                                                                boxSize={"5rem"}
                                                            />
                                                        </Flex>
                                                    </Flex>

                                                    {err && (
                                                        <Text
                                                            fontSize="12px"
                                                            color="red.500"
                                                            mt="0.7rem"
                                                        >
                                                            {" "}
                                                            Cover photo is
                                                            required{" "}
                                                        </Text>
                                                    )}
                                                </>
                                            ) : (
                                                <Box>
                                                    <Image
                                                        src={
                                                            uploadedImage?.imageUrl ||
                                                            previewUrl
                                                        }
                                                        alt="Preview"
                                                        style={{
                                                            maxWidth: "100%",
                                                            maxHeight: "200px",
                                                        }}
                                                        fallbackSrc="https://via.placeholder.com/150"
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
                                        {/* content   */}
                                        <Box>
                                            <Text
                                                color="gray_4"
                                                fontSize={"0.875rem"}
                                                fontWeight={500}
                                            >
                                                Blog Content
                                            </Text>
                                        </Box>
                                        <RichEditor
                                            value={contents}
                                            setValue={setContents}
                                        />
                                        {contentsErr && (
                                            <Text
                                                fontSize="12px"
                                                color="red.500"
                                                mt="0.5rem"
                                            >
                                                {" "}
                                                Blog Content cannot be empty{" "}
                                            </Text>
                                        )}
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
                                                {isLoading ? (
                                                    <Spinner />
                                                ) : (
                                                    "Submit"
                                                )}
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

export default EditBlogModal;
