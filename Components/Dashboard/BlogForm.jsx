import { Box, Button, FormLabel, Image, Input, Stack } from "@chakra-ui/react";
import { Formik } from "formik";
import React, { useState } from "react";
import CustomInput from "../common/CutomInputs";
// import CustomInput from "../common/CustomInput";

const BlogForm = () => {
    const [image, setImage] = useState(null);

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
                    <Stack maxW="56rem" mx="auto" spacingY={"1.5rem"}>
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
                            {image ? (
                                <>
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        name="image"
                                    />
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
                                        Remove Image
                                    </button>
                                </Box>
                            )}
                        </Box>
                        {/* Image  */}
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

export default BlogForm;
