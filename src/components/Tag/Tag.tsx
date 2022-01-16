import React from "react";
import "./index.sass";

interface TagProps {
    text: string;
}

const Tag = (props: TagProps) => {
    const { text } = props;

    return <div className="tag">{text}</div>;
};

export default Tag;
