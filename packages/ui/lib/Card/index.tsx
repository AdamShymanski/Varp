import { css } from "@emotion/react";
import React from "react";
import { Header, Props as HeaderProps } from "./Header";
import { Details, Props as DetailsProps } from "./Details";
import { Description, Props as DescriptionProps } from "./Description";
import { ActionBar, Props as ActionBarProps } from "./ActionBar";

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

export interface PropsPreview {
  children: React.ReactNode;
}
export interface Props {
  header: HeaderProps;
  details: DetailsProps;
  description: DescriptionProps;
  actionBar: ActionBarProps;
}

export const Container = ({ children }: PropsPreview) => {
  return (
    <div css={style}>
      <div className="border" />
      <div className="body">{children}</div>
    </div>
  );
};

export const CardElemets = {
  Container,
  Header,
  Details,
  Description,
  ActionBar
};
export const Card = (props: Props) => {
  return (
    <div css={style}>
      <div className="border" />
      <div className="body">
        <Header {...props.header} />
        <Details {...props.details} />
        <Description {...props.description} />
        <ActionBar {...props.actionBar} />
      </div>
    </div>
  );
};
