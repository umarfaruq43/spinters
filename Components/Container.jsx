import { Box } from "@chakra-ui/react";

const Container = ({ children }) => {
    return (
        <Box maxW="1440px" mx="auto" px={["16px", "3rem", "3rem", "6rem"]}>
            {children}
        </Box>
    );
};

export default Container;
