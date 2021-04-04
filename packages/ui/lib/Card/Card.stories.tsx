import React from "react";
import { Story, Meta } from '@storybook/react';
import { Card, Props } from ".";
import HeaderStories from "./Header/Header.stories"
import DetailsStories from "./Details/Details.stories"
import DescriptionStories from "./Description/Description.stories"
import ActionBarStories from "./ActionBar/ActionBar.stories";


export default {
  title: "Card",
  component: Card.Container,
  subcomponents: {...Card},
  args: {
    //   ...HeaderStories.args,
    //   ...DetailsStories.args,
    //   ...DescriptionStories.args,
    //   ...ActionBarStories.args
  }
} as Meta;


export const Basic: Story<Props> = (args) => (
    <Card.Container>
        <Card.Header {...HeaderStories.args}/>
        <Card.Details {...DetailsStories.args} />
        <Card.Description {...DescriptionStories.args} />
        <Card.ActionBar {...ActionBarStories.args} />
    </Card.Container>
);