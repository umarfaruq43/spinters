import React from "react";
import DashNav from "./DashNav";
import { Box } from "@chakra-ui/react";
import TopNav from "./TopNav";
import Blog from "./Blog";

const Dashboard = () => {
    return (
        <DashNav>
            <TopNav />
            <Blog />
        </DashNav>
    );
};

export default Dashboard;
