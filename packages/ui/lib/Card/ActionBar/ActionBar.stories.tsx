import React from "react";
import { Story, Meta } from "@storybook/react";

import { Props, ActionBar, ChallengeStatus} from ".";

export default {
  title: "Card/ActionBar",
  component: ActionBar,
  args: {
    status: ChallengeStatus.START
  }
} as Meta<Props>;

export const Basic: Story<Props> = args => <ActionBar {...args} />;
