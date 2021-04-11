import { css } from "@emotion/react";
import React from "react";
import { Top, Props as TopProps } from "./Top";
import { GameCard, Props as GameCardProps } from "./GameCard";
import { Bottom, Props as BottomProps } from "./BottomCard";

const style = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: transparent;
  }

  max-width: 500px;
  .body {
    width: 22vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #121212;
  }
`;

export interface PropsPreview {
  children: React.ReactNode;
}

export interface Props {
  top: TopProps;
  gameCard: GameCardProps;
  bottom: BottomProps;
}

export const Container = ({ children }: PropsPreview) => {
  return (
    <main css={style}>
      <div className="body">{children}</div>
    </main>
  );
};

export const SideDrawer = (props: Props) => {
  return (
    <main css={style}>
      <div className="body">
        <Top {...props.top} />
        <GameCard {...props.gameCard} />
        <Bottom {...props.bottom} />
      </div>
    </main>
  );
};

export const SideDrawerPreview = {
  Container,
  Top,
  GameCard,
  Bottom
};
