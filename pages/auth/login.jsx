import Login from "@/Components/auth/Login";
import Layout from "@/Layout/Layout";
import { Box } from "@chakra-ui/react";
import React from "react";

const login = () => {
    return (
        <Box>
            <Layout title="Admin Login">
                <Login />
            </Layout>
        </Box>
    );
};

export default login;
