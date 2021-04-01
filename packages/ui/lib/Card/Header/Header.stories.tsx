import React from "react";
import { Story, Meta } from "@storybook/react";

import { Props, Header } from ".";

export default {
  title: "Card/Header",
  component: Header,
  args: {
    title: "Card Title",
    thumbnail: "https://placehold.co/65x65/orange/white"
  }
} as Meta<Props>;

export const Basic: Story<Props> = args => (
  <Header title={args.title} thumbnail={args.thumbnail} />
);
