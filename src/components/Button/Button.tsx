import React from "react";
import "./index.css";

interface ButtonProps {
    text: string;
}

const Button = (props: ButtonProps) => {
    const { text } = props;

    return <button className="text-red-400">{text}</button>;
};

export default Button;
