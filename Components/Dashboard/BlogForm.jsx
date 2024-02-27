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
import CustomInput from "../common/CutomInputs";
import { LuUploadCloud } from "react-icons/lu";
import RichEditor from "../common/RichEditor";
import { bearerToken, endpointUrl } from "@/lib/data";

const BlogForm = ({ setAddBlog, fetchBlogs }) => {
    const toast = useToast();
    const [contents, setContents] = useState("");
    const [contentsErr, setContentsErr] = useState("");
    const [err, setErr] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];

    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file && allowedTypes.includes(file.type)) {
            // upLoadImage(file);
            const preview = URL.createObjectURL(file);

            setSelectedImage(file);
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
        setSelectedImage(null);
    };

    const handleUploadIconClick = () => {
        // Trigger the file input click when the upload icon is clicked
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    // ****************** tex editor

    const UploadBlog = async (values) => {
        setIsLoading(true);

        let formatedBlogTags = values?.blogTags?.split(",");
        // Payload section
        const payload = new FormData();
        payload.append("title", values?.blogTitle);
        payload.append("description", values?.blogDes);
        formatedBlogTags?.forEach((tag, index) => {
            payload.append(`tags[${index}]`, tag);
        });
        payload.append("content", values?.blogContent);
        payload.append("blog_image", values?.imageUrl);

        const url = `${endpointUrl}/blog`;

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
                setAddBlog();
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
                blogTitle: "",
                blogDes: "",
                blogContent: "",
                blogTags: "",
                authorName: "",
                imageUrl: "",
            }}
            validate={(values) => {
                let errors = {};

                if (!values.blogTitle) {
                    errors.blogTitle = "Blog Title is required";
                }
                if (!values.blogDes) {
                    errors.blogDes = "Blog description is required";
                }
                if (!values.blogTags) {
                    errors.blogTags = "Blog Tags are required";
                }
                if (!values.authorName) {
                    errors.authorName = "Author Name is required";
                }
                if (!contents) {
                    errors.blogContent = "Blog Content  is required";
                    setContentsErr(true);
                } else {
                    setContentsErr(false);
                }

                if (!selectedImage) {
                    errors.imageUrl = "image is required is required";
                    setErr(true);
                } else {
                    setErr(false);
                }

                return errors;
            }}
            onSubmit={(values) => {
                values.blogContent = contents;
                values.imageUrl = selectedImage;
                UploadBlog(values);
            }}
        >
            {({ handleSubmit, errors, touched, isValid, dirty }) => (
                <form onSubmit={handleSubmit}>
                    <Stack maxW="56rem" mx="auto" spacingY={"2rem"}>
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
                        />
                        <CustomInput
                            label="Blog Tags"
                            name="blogTags"
                            type="text"
                            placeholder="Design, Book, Stage"
                            errors={errors}
                            touched={touched}
                        />{" "}
                        <CustomInput
                            label="Author Name"
                            name="authorName"
                            type="text"
                            placeholder="Olivia Rhye"
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

                            {!selectedImage ? (
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
                                            {/* {isLoadingImage ? (
                                                <Flex align="center" gap="1rem">
                                                    <Text align="center">
                                                        Uploading Image, please
                                                        wait....
                                                    </Text>
                                                    <Spinner size="sm" />
                                                </Flex>
                                            ) : ( */}
                                            <Icon
                                                as={LuUploadCloud}
                                                boxSize={"5rem"}
                                            />
                                            {/* )} */}
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
                                        src={previewUrl}
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
                        <RichEditor value={contents} setValue={setContents} />
                        {contentsErr && (
                            <Text fontSize="12px" color="red.500" mt="0.5rem">
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
                                _disabled={{ opacity: ".6" }}
                                isDisabled={isLoading}
                            >
                                {isLoading ? <Spinner /> : "Upload blog"}
                            </Button>
                        </Box>
                    </Stack>
                </form>
            )}
        </Formik>
    );
};

export default BlogForm;
