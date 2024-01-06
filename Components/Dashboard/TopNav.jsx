import { Avatar, Box, Flex, WrapItem } from "@chakra-ui/react";
import React from "react";

const TopNav = () => {
    return (
        <Flex
            align="center"
            justify="flex-end"
            borderBottom={"1px"}
            borderBottomColor={"gray.100"}
            pb="1rem"
            display={{ md: "none", lg: "flex" }}
        >
            <WrapItem>
                <Avatar
                    size="sm"
                    name="Admin"
                    src="https://bit.ly/prosper-baba"
                />{" "}
            </WrapItem>
        </Flex>
    );
};

export default TopNav;
