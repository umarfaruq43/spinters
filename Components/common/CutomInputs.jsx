import { useState } from "react";
import { Field } from "formik";
import {
    Box,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Icon,
    Input,
    Text,
} from "@chakra-ui/react";

import { FiEye, FiEyeOff } from "react-icons/fi";

const CustomInput = ({
    label,
    name,
    type,
    placeholder,
    fontSize,
    px,
    errors,
    touched,
    ...props
}) => {
    const [showPassWord, setShowPassWord] = useState(false);
    const handleShowPassword = () => {
        setShowPassWord(!showPassWord);
    };
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
                <Input
                    {...props}
                    as={Field}
                    id={name}
                    name={name}
                    type={
                        type === "password"
                            ? showPassWord
                                ? "text"
                                : "password"
                            : type
                    }
                    placeholder={placeholder}
                    fontSize={"1rem"}
                    px={"1rem"}
                    py="0.75rem"
                    display="inline-block"
                    _focusVisible={{
                        border: "1px",
                        borderColor: "gray_5",
                    }}
                    border="1px"
                    borderColor="gray_5"
                    rounded="0.5rem"
                    color="light_6"
                    h="auto"
                    fontWeight={"400"}
                    boxShadow={"0px 1px 2px 0px rgba(16, 24, 40, 0.05)"}
                    bgColor={"white"}
                />
                {type === "password" && (
                    <Icon
                        transform={"auto"}
                        pos="absolute"
                        translateY={"-50%"}
                        top="50%"
                        right="22px"
                        as={showPassWord ? FiEyeOff : FiEye}
                        cursor="pointer"
                        onClick={handleShowPassword}
                    />
                )}
            </Box>

            <FormErrorMessage fontSize={["12px"]}>
                {errors[name]}
            </FormErrorMessage>
        </FormControl>
    );
};

export default CustomInput;
