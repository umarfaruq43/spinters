import React from "react";
import DashNav from "./DashNav";
import { Box } from "@chakra-ui/react";

import Blog from "./Blog";

const Dashboard = () => {
    return (
        <DashNav activeNav={"blog"}>
            {/* <TopNav /> */}
            <Blog />
        </DashNav>
    );
};

export default Dashboard;
