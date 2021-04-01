import React from "react";
import { Story, Meta } from "@storybook/react";

import { Props, Details, ChallengeType } from ".";

export default {
  title: "Card/Details",
  component: Details,
  args: {
    minutes: 15,
    type: ChallengeType.WATCH_AD,
    reward: 150
  }
} as Meta<Props>;

export const Basic: Story<Props> = args => <Details {...args} />;
