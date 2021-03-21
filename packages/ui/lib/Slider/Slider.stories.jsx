import React from "react";
import { action } from "@storybook/addon-actions";

import {Slider} from ".";

export default {
 title: "Slider",
 component: Slider
};

export const Basic = () => (
 <Slider min={1} max={10} defaultValue={3} />
);