import React from "react";
import { Story, Meta } from "@storybook/react";
import { CardElemets, Props } from ".";
import HeaderStories from "./Header/Header.stories";
import DetailsStories from "./Details/Details.stories";
import DescriptionStories from "./Description/Description.stories";
import ActionBarStories from "./ActionBar/ActionBar.stories";

export default {
  title: "Card",
  component: CardElemets.Container,
  subcomponents: { ...CardElemets },
  args: {
    //   ...HeaderStories.args,
    //   ...DetailsStories.args,
    //   ...DescriptionStories.args,
    //   ...ActionBarStories.args
  }
} as Meta;

export const Basic: Story<Props> = args => (
  <CardElemets.Container>
    <CardElemets.Header {...HeaderStories.args} />
    <CardElemets.Details {...DetailsStories.args} />
    <CardElemets.Description {...DescriptionStories.args} />
    <CardElemets.ActionBar {...ActionBarStories.args} />
  </CardElemets.Container>
);