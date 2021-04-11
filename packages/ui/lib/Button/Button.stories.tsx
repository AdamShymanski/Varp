import React from "react";
import { Story, Meta } from "@storybook/react";

import { Props, Button } from ".";

export default {
  title: "General/Button",
  component: Button
} as Meta;


const Template: Story<Props> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary"
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "disabled"
};
