import React from "react";
import { Story, Meta } from "@storybook/react";
import { GameCard, Props } from ".";

export default {
  title: "SideDrawer/Game Card",
  component: GameCard
} as Meta;


export const Basic: Story<Props> = (props) => (
    <GameCard {...props}/>
);