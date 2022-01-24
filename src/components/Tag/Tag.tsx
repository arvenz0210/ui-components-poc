import React from "react";

interface TagProps {
    text: string;
}

const Tag = (props: TagProps) => {
    const { text } = props;

    return (
        <div className="bg-rose-200 inline-block text-black px-2 py-1 border-radius rounded-lg">
            {text}
        </div>
    );
};

export default Tag;
