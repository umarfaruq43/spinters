import Dashboard from "@/Components/Dashboard/Dashboard";
import AuthGuard from "@/Layout/AuthGuard";

import React from "react";

const index = () => {
    return (
        <AuthGuard>
            <Dashboard />;
        </AuthGuard>
    );
};

export default index;
