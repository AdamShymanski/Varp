import { Global } from "@emotion/react";
import { normalize } from "polished";
import { Styles } from "../lib/Styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: "docs",
  backgrounds: {
    default: "dark",
    values: [
      { name: "dark", value: "#1b1b1b" },
      { name: "light", value: "#fff" }
    ]
  }
};

export const decorators = [
  Story => (
    <>
      <Styles />
      <Story />
    </>
  )
];
