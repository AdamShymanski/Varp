import React from "react";
import { Story, Meta } from "@storybook/react";
import { SideDrawerPreview, PropsPreview } from ".";

import GameCardStories from "./GameCard/GameCard.stories";
import BottomCardStories from "./BottomCard/BottomCard.stories";
import TopSectionStories from "./Top/Top.stories";

export default {
  title: "SideDrawer/SideDrawer",
  component: SideDrawerPreview.Container,
  subcomponents: { ...SideDrawerPreview },
  args: {
    //   ...HeaderStories.args,
    //   ...DetailsStories.args,
    //   ...DescriptionStories.args,
    //   ...ActionBarStories.args
  }
} as Meta;

export const Basic: Story<PropsPreview> = args => (
  <SideDrawerPreview.Container>
    <SideDrawerPreview.Top {...TopSectionStories.args} />
    <SideDrawerPreview.GameCard {...GameCardStories.args} />
    <SideDrawerPreview.GameCard {...GameCardStories.args} />
    <SideDrawerPreview.GameCard {...GameCardStories.args} />
    <SideDrawerPreview.Bottom {...BottomCardStories.args} />
  </SideDrawerPreview.Container>
);
