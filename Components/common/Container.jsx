import { Box } from "@chakra-ui/react";

const Container = ({ children, ...props }) => {
    return (
        <Box
            maxW="1440px"
            mx="auto"
            px={["16px", "3rem", "3rem", "6rem"]}
            {...props}
        >
            {children}
        </Box>
    );
};

export default Container;
