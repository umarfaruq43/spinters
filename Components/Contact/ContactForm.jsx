import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormLabel,
    Spinner,
    Stack,
    Text,
    useToast,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import CustomInput from "../common/CutomInputs";
import CustomTextarea from "../common/CustomTextarea";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { endpointUrl } from "@/lib/data";

const ContactForm = () => {
    const [phoneNo, setPhoneNo] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(false);
    const toast = useToast();
    const handleBlur = () => {
        if (phoneNo.length < 7) {
            setErr(true);
        } else {
            setErr(false);
        }
    };

    async function getIntouch(payload) {
        setIsLoading(true);
        const url = `https://api.web3forms.com/submit`;
        try {
            const options = {
                method: "POST",
                body: JSON.stringify(payload), // Convert data to JSON format
                headers: {
                    "Content-Type": "application/json", // Specify JSON content type
                },
            };

            const response = await fetch(url, options);
            const data = await response.json(); // Parse the JSON response

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
    }

    return (
        <Box>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNo: "",
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
                    if (phoneNo.length < 7) {
                        setErr(true);
                        errors.phoneNo = "phone is invalid";
                    } else {
                        setErr(false);
                    }

                    return errors;
                }}
                onSubmit={(values) => {
                    values.phoneNo = `+${phoneNo}`;
                    values.access_key = "902658ed-366e-4cb4-9dcf-37e8a6dcacfe";

                    getIntouch(values);
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
                                    htmlFor={"phoneNo"}
                                    color="gray_4"
                                    fontSize={"0.875rem"}
                                    fontWeight={500}
                                >
                                    Phone number
                                </FormLabel>
                                <PhoneInput
                                    country={"ng"}
                                    value={phoneNo}
                                    onChange={(phone) => {
                                        setPhoneNo(phone);
                                        if (phoneNo.length <= 12) {
                                            setErr(true);
                                        } else {
                                            setErr(false);
                                        }
                                    }}
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
                                fontSize=".91rem"
                            >
                                You agree to our friendly{" "}
                                <Text
                                    as="a"
                                    href="/policies"
                                    textDecor={"underline"}
                                >
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
                                isDisabled={isLoading}
                            >
                                {isLoading ? <Spinner /> : " Send message"}
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default ContactForm;
