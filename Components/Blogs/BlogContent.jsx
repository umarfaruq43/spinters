import React from "react";

const BlogContent = ({ blogData }) => {
    return <div dangerouslySetInnerHTML={{ __html: blogData?.content }} />;
};

export default BlogContent;
