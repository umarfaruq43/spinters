import { endpointUrl } from "@/lib/data";
import {
    Flex,
    Box,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    useToast,
    Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import CustomInput from "../common/CutomInputs";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();
    const navigate = useRouter();

    async function login(payload) {
        setIsLoading(true);
        const url = `${endpointUrl}/auth/login`;
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
                Cookies.set("token", data?.data?.token, { expires: 1 });
                navigate.push("/dashboard");
            }
        } catch (error) {
            console.error("Error sending data:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Box>
            <Flex
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}
            >
                <Stack
                    spacing={8}
                    mx={"auto"}
                    maxW={"lg"}
                    w="100%"
                    py={12}
                    px={6}
                >
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"}>
                            Sign in to your account
                        </Heading>
                    </Stack>
                    <Box
                        rounded={"lg"}
                        bg={useColorModeValue("white", "gray.700")}
                        boxShadow={"lg"}
                        p={8}
                    >
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            validate={(values) => {
                                let errors = {};

                                if (!values.email) {
                                    errors.email = "email is required";
                                }
                                if (!values.password) {
                                    errors.password = "Password is required";
                                }

                                return errors;
                            }}
                            onSubmit={(values) => {
                                login(values);
                            }}
                        >
                            {({
                                handleSubmit,
                                errors,
                                touched,
                                isValid,
                                dirty,
                            }) => (
                                <Form onSubmit={handleSubmit}>
                                    {/* store_name  */}

                                    <Stack spacing={"1.5rem"}>
                                        {/* Email Address  */}
                                        <CustomInput
                                            label="Email"
                                            name="email"
                                            type="email"
                                            placeholder="you@company.com"
                                            errors={errors}
                                            touched={touched}
                                        />
                                        <CustomInput
                                            name="password"
                                            type="password"
                                            label={"Password 🫣"}
                                            placeholder={"🌝🌝🌝"}
                                            errors={errors}
                                            touched={touched}
                                        />
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
                                            {isLoading ? (
                                                <Spinner />
                                            ) : (
                                                "Sign In"
                                            )}
                                        </Button>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Stack>
            </Flex>
        </Box>
    );
}
