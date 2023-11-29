import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const Layout = ({ children, title = "Spinters", ...props }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Welcome to Sprinters, Your Tech Solutions Partner"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/vector.svg" />
            </Head>

            <Box {...props} mx="auto">
                {children}
            </Box>
        </>
    );
};

export default Layout;
