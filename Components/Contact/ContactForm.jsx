import {
    Box,
    Button,
    Checkbox,
    Flex,
    Select,
    Stack,
    Text,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import CustomInput from "../common/CutomInputs";
import CustomTextarea from "../common/CustomTextarea";

const ContactForm = () => {
    return (
        <Box>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    number: "",
                    category: "",
                    message: "",
                }}
                validate={(values) => {
                    let errors = {};

                    if (!values.email) {
                        errors.email = "email is required";
                    }
                    if (!values.firstName) {
                        errors.firstName = "First Name is required";
                    }
                    if (!values.lastName) {
                        errors.lastName = "Last Name is required";
                    }

                    if (!values.message) {
                        errors.message = "Message is required";
                    }
                    console.log(errors);

                    return errors;
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ handleSubmit, errors, touched, isValid, dirty }) => (
                    <Form onSubmit={handleSubmit}>
                        {/* store_name  */}

                        <Stack spacing={"1.5rem"}>
                            <Flex gap={["1rem", "1.5rem", "2rem"]}>
                                {/* Full Name  */}
                                <CustomInput
                                    name="firstName"
                                    type="text"
                                    label={"First name"}
                                    placeholder={"First name"}
                                    errors={errors}
                                    touched={touched}
                                />

                                <CustomInput
                                    name="lastName"
                                    type="text"
                                    label={"Last name"}
                                    placeholder={"Last name"}
                                    errors={errors}
                                    touched={touched}
                                />
                            </Flex>

                            {/* Email Address  */}
                            <CustomInput
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="you@company.com"
                                errors={errors}
                                touched={touched}
                            />

                            {/* Number 
                            <CustomInput
                                name="Phone number"
                                type="number"
                                placeholder="Input phone number"
                                errors={errors}
                                touched={touched}
                            /> */}

                            <CustomTextarea
                                label="Tell Us More About your Idea"
                                name="message"
                                placeholder="you@company.com"
                                errors={errors}
                                touched={touched}
                                minH="8rem"
                            />
                            <Checkbox defaultChecked size="lg" color="light_6">
                                You agree to our friendly{" "}
                                <Text as="a" href="#" textDecor={"underline"}>
                                    privacy policy
                                </Text>
                            </Checkbox>
                        </Stack>
                        <Box mt="2rem">
                            <Button
                                _focus={{}}
                                _hover={{}}
                                _active={{}}
                                type="submit"
                                color="white"
                                w="100%"
                                h="auto"
                                py="0.75rem"
                                px="1.25rem"
                                bgColor={"primary_10"}
                                boxShadow={
                                    "0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                                }
                            >
                                Send message
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default ContactForm;
