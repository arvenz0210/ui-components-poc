import React from "react";
import "./index.sass";

interface ButtonProps {
    text: string;
}

const Button = (props: ButtonProps) => {
    const { text } = props;

    return <button>{text}</button>;
};

export default Button;
