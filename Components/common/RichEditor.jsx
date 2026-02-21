// import React from "react";
// import "react-quill/dist/quill.snow.css";

// import dynamic from "next/dynamic";

// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// const RichEditor = ({ value, setValue, ...props }) => {
//     const quillModules = {
//         toolbar: [
//             [{ header: [1, 2, 3, false] }],
//             ["bold", "italic", "underline", "strike", "blockquote"],
//             [{ list: "ordered" }, { list: "bullet" }],
//             ["link", "image"],
//             [{ align: [] }],
//             [{ color: [] }],
//             ["code-block"],
//             ["clean"],
//         ],
//     };

//     const quillFormats = [
//         "header",
//         "bold",
//         "italic",
//         "underline",
//         "strike",
//         "blockquote",
//         "list",
//         "bullet",
//         "link",
//         "image",
//         "align",
//         "color",
//         "code-block",
//     ];

//     return (
//         <ReactQuill
//             value={value}
//             onChange={setValue}
//             modules={quillModules}
//             formats={quillFormats}
//             {...props}
//         />
//     );
// };

// export default RichEditor;

import React, { useMemo, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useToast } from "@chakra-ui/react";

const ReactQuill = dynamic(
    async () => {
        const { default: RQ } = await import("react-quill");
        // This ensures the component works with the forwarded ref
        return ({ forwardedRef, ...props }) => (
            <RQ ref={forwardedRef} {...props} />
        );
    },
    { ssr: false },
);

const RichEditor = ({ value, setValue, ...props }) => {
    const quillRef = useRef(null);
    const toast = useToast();

    // 1. Define the custom image handler
    const imageHandler = () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "sprintersBlog");

            try {
                toast({
                    title: "Uploading image to server",
                    status: "info",
                    position: "top-left",
                });
                const res = await fetch(
                    "https://api.cloudinary.com/v1_1/dzk1a6bjt/image/upload",
                    {
                        method: "POST",
                        body: formData,
                    },
                );

                const data = await res.json();
                const url = data.secure_url;
                toast({
                    title: "Upload done, loading image...",
                    status: "success",
                    position: "top-left",
                });
                // 2. Insert the URL into the editor
                const quill = quillRef.current.getEditor();
                const range = quill.getSelection();
                quill.insertEmbed(range.index, "image", url);
            } catch (error) {
                console.error("Cloudinary upload failed:", error);
            }
        };
    };

    // 3. Use useMemo to prevent toolbar flickering/re-renders
    const modules = useMemo(
        () => ({
            toolbar: {
                container: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["link", "image"],
                    [{ align: [] }],
                    [{ color: [] }],
                    ["code-block"],
                    ["clean"],
                ],
                handlers: {
                    image: imageHandler, // Overrides the default Base64 behavior
                },
            },
        }),
        [],
    );

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "image",
        "align",
        "color",
        "code-block",
    ];

    return (
        <div className="text-editor">
            <ReactQuill
                forwardedRef={quillRef} // Next.js dynamic ref handling
                theme="snow"
                value={value}
                onChange={setValue}
                modules={modules}
                formats={formats}
                {...props}
            />
        </div>
    );
};

export default RichEditor;
