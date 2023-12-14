import React from "react";
import { Field } from "formik";
import {
    Box,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Textarea,
    Icon,
} from "@chakra-ui/react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const CustomTextarea = ({ label, name, errors, touched, ...props }) => {
    return (
        <FormControl isInvalid={errors[name] && touched[name]}>
            <FormLabel
                htmlFor={name}
                color="gray_4"
                fontSize={"0.875rem"}
                fontWeight={500}
            >
                {label}
            </FormLabel>
            <Box pos="relative" mt="0.38rem">
                <Field
                    {...props}
                    as={Textarea}
                    id={name}
                    name={name}
                    fontSize="1rem"
                    px="1rem"
                    py="0.75rem"
                    display="inline-block"
                    _focus={{
                        border: "1px",
                        borderColor: "gray_5",
                    }}
                    _focusVisible={{
                        border: "1px",
                        borderColor: "gray_5",
                    }}
                    _active={{
                        border: "1px",
                        borderColor: "gray_5",
                    }}
                    border="1px"
                    borderColor="gray_5"
                    rounded="0.5rem"
                    color="gray.600"
                    h="auto"
                    fontWeight="400"
                    boxShadow="0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                    bgColor="white"
                />
            </Box>
            <FormErrorMessage fontSize={["12px"]}>
                {errors[name]}
            </FormErrorMessage>
        </FormControl>
    );
};

export default CustomTextarea;
