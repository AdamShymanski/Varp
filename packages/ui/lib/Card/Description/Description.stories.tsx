import React from "react";
import { Story, Meta } from "@storybook/react";

import { Props, Description } from ".";

export default {
  title: "Card/Description",
  component: Description,
  args: {
    children:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam repellendus similique ab, ad sint labore voluptatibus doloribus aliquam aperiam a, accusamus dolorem odio quis quod id, cupiditate vero sapiente est."
  }
} as Meta<Props>;

export const Basic: Story<Props> = ({ children }) => (
  <Description>{children}</Description>
);
