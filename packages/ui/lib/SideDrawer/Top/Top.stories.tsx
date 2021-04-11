import React from "react";
import { Story, Meta } from "@storybook/react";

import { Props, Top } from ".";

export default {
  title: "SideDrawer/Top",
  component: Top,
  parameters: {
    backgrounds: {
      default: "black",
      values: [{ name: "black", value: "#121212" }]
    }
  }
} as Meta;

export const Basic: Story<Props> = props => {
  const { name, balance, number, profit } = props;
  return <Top {...props} />;
};
