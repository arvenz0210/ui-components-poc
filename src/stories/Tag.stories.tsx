import React from "react";
import { Meta } from "@storybook/react";
import Tag from "../components/Tag";

export default {
    component: Tag,
    title: "Components/Tag",
} as Meta;

export const Default: React.VFC<{}> = () => <Tag text="Press Me Babe!" />;
