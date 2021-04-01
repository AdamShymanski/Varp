import { css } from "@emotion/react";
import React from "react";
import { Header } from "./Header";
import { Details } from "./Details";
import { Description } from "./Description";
import { ActionBar } from "./ActionBar";

const style = css`
  display: flex;
  max-width: 500px;
  .border {
    width: 7px;
    border-radius: 8px;
    margin-right: 16px;
    background: var(--color-primary500);
    opacity: 0.25;
  }
  .body {
      display: flex;
      flex-direction: column;
  }
`;

export interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return (
    <div css={style}>
      <div className="border" />
      <div className="body">
      {children}
      </div>
    </div>
  );
};

export const Card = {
  Container,
  Header,
  Details,
  Description,
  ActionBar
};
