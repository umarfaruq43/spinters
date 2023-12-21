import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormLabel,
    Select,
    Stack,
    Text,
    useCheckbox,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import CustomInput from "../common/CutomInputs";
import CustomTextarea from "../common/CustomTextarea";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
    const [phone, setPhone] = useState("");
    const [err, setErr] = useState(false);
    const handleBlur = () => {
        if (phone.length < 7) {
            setErr(true);
        } else {
            setErr(false);
        }
    };
    return (
        <Box>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
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
                    if (phone.length < 7) {
                        setErr(true);
                        errors.phoneNumber = "phone is invalid";
                    } else {
                        setErr(false);
                    }

                    return errors;
                }}
                onSubmit={(values) => {
                    values.phoneNumber = phone;
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

                            <Box>
                                <FormLabel
                                    htmlFor={"phoneNumber"}
                                    color="gray_4"
                                    fontSize={"0.875rem"}
                                    fontWeight={500}
                                >
                                    Phone number
                                </FormLabel>
                                <PhoneInput
                                    country={"ng"}
                                    value={phone}
                                    onChange={(phone) => setPhone(phone)}
                                    placeholder="+234"
                                    className={`${err ? "error" : ""}`}
                                    onBlur={handleBlur}
                                />
                                {err && (
                                    <Text
                                        color={"red.500"}
                                        mt="4px"
                                        fontSize={"12px"}
                                    >
                                        {" "}
                                        Invalid phone number{" "}
                                    </Text>
                                )}
                            </Box>

                            <CustomTextarea
                                label="Tell Us More About your Idea"
                                name="message"
                                placeholder="you@company.com"
                                errors={errors}
                                touched={touched}
                                minH="8rem"
                            />
                            <Checkbox
                                size="lg"
                                color="light_6"
                                spacing={"0.75rem"}
                                fontSize="1rem"
                            >
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
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default ContactForm;
