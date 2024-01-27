import AdminCaseStudy from "@/Components/Dashboard/CaseStudy/AdminCaseStudy";
import DashNav from "@/Components/Dashboard/DashNav";
import AuthGuard from "@/Layout/AuthGuard";

import React from "react";

const case_study = () => {
    return (
        <AuthGuard>
            <DashNav activeNav="case_study">
                <AdminCaseStudy />
            </DashNav>
        </AuthGuard>
    );
};

export default case_study;
