import AdminCaseStudy from "@/Components/Dashboard/CaseStudy/AdminCaseStudy";
import DashNav from "@/Components/Dashboard/DashNav";

import React from "react";

const case_study = () => {
    return (
        <div>
            <DashNav activeNav="case_study">
                <AdminCaseStudy />
            </DashNav>
        </div>
    );
};

export default case_study;
