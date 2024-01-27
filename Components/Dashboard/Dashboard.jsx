import React from "react";
import DashNav from "./DashNav";
import { Box } from "@chakra-ui/react";

import Blog from "./Blog";

const Dashboard = () => {
    return (
        <DashNav activeNav={"blog"}>
            {/* <TopNav /> */}
            <Blog />
            {/* <AuthGuard>
            </AuthGuard> */}
        </DashNav>
    );
};

export default Dashboard;
