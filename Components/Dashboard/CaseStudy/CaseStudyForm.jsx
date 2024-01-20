import {
    Box,
    Button,
    Flex,
    FormLabel,
    Icon,
    Image,
    Input,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Formik } from "formik";
import React, { useRef, useState } from "react";
import CustomInput from "../../common/CutomInputs";
import { LuUploadCloud } from "react-icons/lu";
import RichEditor from "@/Components/common/RichEditor";

// import CKEditor from "@ckeditor/ckeditor5-react";
// // import Editor from "ckeditor5-custom-build";

const CaseStudyForm = () => {
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
        <Formik
            initialValues={{
                name: "",
                email: "",
                number: "",
                category: "",
            }}
            validate={(values) => {
                let errors = {};
                if (!values.number) {
                    errors.number = "Number is required";
                }
                if (!values.email) {
                    errors.email = "email is required";
                }
                if (!values.name) {
                    errors.name = "Name is required";
                }

                if (!values.category) {
                    errors.category = "Category is required";
                }

                return errors;
            }}
            onSubmit={(values) => {
                console.log(values);
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
                            name="blogDescription"
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
                                                as={LuUploadCloud}
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
                                    <button onClick={handleRemoveImage}>
                                        <Text color="red">Remove Image</Text>
                                    </button>
                                </Box>
                            )}
                        </Box>
                        {/* Image  */}
                        <Box>
                            <Text
                                color="gray_4"
                                fontSize={"0.875rem"}
                                fontWeight={500}
                            >
                                Blog Content
                            </Text>
                        </Box>
                        <RichEditor />
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
    );
};

export default CaseStudyForm;
