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
import React, { useEffect, useRef, useState } from "react";
import CustomInput from "../common/CutomInputs";
import { LuUploadCloud } from "react-icons/lu";
import RichEditor from "../common/RichEditor";
import { endpointUrl } from "@/lib/data";

const BlogForm = ({ setAddBlog, fetchBlogs }) => {
    const toast = useToast();
    const [contents, setContents] = useState("");
    const [contentsErr, setContentsErr] = useState("");
    const [err, setErr] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    // useEffect(() => {
    //     async function upLoadImage() {
    //         const url = `${endpointUrl}/blog/upload/image`;
    //         const payload = {
    //             blogImage: image,
    //         };
    //         try {
    //             const options = {
    //                 method: "POST",
    //                 body: JSON.stringify(payload), // Convert data to JSON format
    //                 headers: {
    //                     "Content-Type": "multipart/form-data", // Specify JSON content type
    //                 },
    //             };
    //             const response = await fetch(url, options);
    //             const data = await response.json(); // Parse the JSON response
    //             console.log(data);
    //             // if (!response.ok) {
    //             //     toast({
    //             //         title: data.message,
    //             //         status: "error",
    //             //         position: "top-left",
    //             //     });
    //             // } else {
    //             //     toast({
    //             //         title: data.message,
    //             //         status: "success",
    //             //         position: "top-left",
    //             //     });
    //             // }
    //         } catch (error) {
    //             console.error("Error sending data:", error);
    //         } finally {
    //             // setIsLoading(false);
    //         }
    //     }
    //     // image && upLoadImage();
    //     console.log(image);
    // }, [image]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        //  if (selectedFile && allowedTypes.includes(selectedFile.type)) {
        //      setFile(selectedFile);
        //      // toast.error("Please select a valid PNG or JPEG file")
        //  }
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
    // ****************** tex editor

    const UploadBlog = async (values) => {
        setIsLoading(true);

        let formatedBlogTags = values?.blogTags?.split(",");
        const payload = {
            title: values?.blogTitle,
            description: values?.blogDes,
            tags: formatedBlogTags,
            content: values?.blogContent,
            image: {
                imageId: "sprinters/b4129df28e55301c",
                imageUrl:
                    "https://res.cloudinary.com/dprg3f2vd/image/upload/v1706013508/sprinters/b4129df28e55301c.jpg",
            },
        };
        console.log(payload);

        const url = `${endpointUrl}/blog`;

        try {
            const options = {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
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
                if (!contents) {
                    errors.blogContent = "Blog Content  is required";
                    setContentsErr(true);
                } else {
                    setContentsErr(false);
                }

                if (!image) {
                    errors.imageUrl = "image is required is required";
                    setErr(true);
                } else {
                    setErr(false);
                }

                return errors;
            }}
            onSubmit={(values) => {
                values.blogContent = contents;

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
                                        <Box>
                                            <Icon
                                                as={LuUploadCloud}
                                                boxSize={"5rem"}
                                            />
                                        </Box>
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
                                    {/* <Image
                                        src={image}
                                        alt="Preview"
                                        style={{
                                            maxWidth: "100%",
                                            maxHeight: "200px",
                                        }}
                                    /> */}
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
                                {isLoading ? <Spinner /> : "Send message"}
                            </Button>
                        </Box>
                    </Stack>
                </form>
            )}
        </Formik>
    );
};

export default BlogForm;
