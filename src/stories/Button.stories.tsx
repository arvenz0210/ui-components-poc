import React from "react";
import { Meta } from "@storybook/react";
import Button from "../components/Button";

export default {
    component: Button,
    title: "Components/Button",
} as Meta;

export const Default: React.VFC<{}> = () => <Button text="Press Me Babe!" />;
