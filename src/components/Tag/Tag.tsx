import React from "react";
import "./index.css";

interface TagProps {
    text: string;
}

const Tag = (props: TagProps) => {
    const { text } = props;

    return <div className="tag">{text}</div>;
};

export default Tag;
