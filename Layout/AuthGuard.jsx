import { Flex, Spinner } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const AuthGuard = ({ children }) => {
    const navigate = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        const isLoggedInCheck = Cookies.get("token");
        setIsLoggedIn(isLoggedInCheck);
        !isLoggedInCheck && navigate.push("/auth/login");
    }, []);

    return (
        <>
            {isLoggedIn ? (
                <>{children} </>
            ) : (
                <Flex
                    minH="100vh"
                    bgColor="primary"
                    align="center"
                    justify="center"
                >
                    <Spinner size={"xl"} />
                </Flex>
            )}
        </>
    );
};

export default AuthGuard;
