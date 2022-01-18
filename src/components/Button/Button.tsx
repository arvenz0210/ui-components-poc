import React from "react";

interface ButtonProps {
    text: string;
}

const Button = (props: ButtonProps) => {
    const { text } = props;

    return (
        <button className="bg-rose-500 text-white p-4 border-radius rounded-lg">
            {text}
        </button>
    );
};

export default Button;
