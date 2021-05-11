import {css} from '@emotion/react';
import React from 'react';
import {Top, Props as TopProps} from './Top';
import {GameCard, Props as GameCardProps} from './GameCard';
import {Bottom, Props as BottomProps} from './BottomCard';

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  font-family: 'Poppins', sans-serif;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: transparent;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  .body {
    position: relative;
    width: 22vw;
    height: 100vh;
    max-width: 700px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #121212;
    .sdInfo {
      margin-top: 50px;
      color: #a1a1a1;
      font-size: 180%;
      font-weight: 600;
    }
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

export const Container = ({children}: PropsPreview) => {
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
        {/* <GameCard {...props.gameCard} /> */}
        <div className="sdInfo">We are starting soon...</div>
      </div>
      <Bottom {...props.bottom} />
    </main>
  );
};

export const SideDrawerPreview = {
  Container,
  Top,
  GameCard,
  Bottom,
};
