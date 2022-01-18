import React from "react";

interface ButtonProps {
    children: string;
}

const Button = (props: ButtonProps) => {
    const { children } = props;

    return (
        <button className="bg-rose-500 text-white p-4 border-radius rounded-lg">
            {children}
        </button>
    );
};

export default Button;
