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

import { LuUploadCloud } from "react-icons/lu";
import RichEditor from "@/Components/common/RichEditor";
import CustomInput from "../common/CutomInputs";

const EditBlogModal = ({ blogData }) => {
    console.log("blogData", blogData);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [contents, setContents] = useState(blogData?.content || "");
    const [contentsErr, setContentsErr] = useState("");
    const [err, setErr] = useState(false);

    const [image, setImage] = useState(blogData?.imageUrl || null);
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
    // ****************** tex editor
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
                                if (!contents) {
                                    errors.blogContent =
                                        "Blog Content  is required";
                                    setContentsErr(true);
                                } else {
                                    setContentsErr(false);
                                }

                                if (!image) {
                                    errors.imageUrl =
                                        "image is required is required";
                                    setErr(true);
                                } else {
                                    setErr(false);
                                }

                                return errors;
                            }}
                            onSubmit={(values) => {
                                values.blogContent = contents;
                                values.imageUrl = image;
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
                                                        <Box>
                                                            <Icon
                                                                as={
                                                                    LuUploadCloud
                                                                }
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
                                                            Cover photo is
                                                            required{" "}
                                                        </Text>
                                                    )}
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

export default EditBlogModal;
