import {css} from '@emotion/react';
import React, {useState} from 'react';
import {Top, Props as TopProps} from './Top';
import {GameCard, Props as GameCardProps} from './GameCard';
import {Bottom, Props as BottomProps} from './BottomCard';

import just_logo from './just-logo.png';

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

  position: fixed;
  min-width: 360px;
  height: 100vh;

  background: #121212;

  .bottomWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    .justLogo {
      display: none;
    }
  }

  .body {
    width: 22vw;
    height: 100vh;

    max-width: 700px;
    min-width: 360px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #121212;

    @media screen and (max-width: 860px) {
      order: 2;
      position: static;
      min-width: none;
      max-width: none;

      width: 100vw;
      height: auto;

      align-items: flex-start;
      padding-left: 25px;
    }
    @media screen and (max-width: 480px) {
      order: 2;
      position: static;
      min-width: none;
      max-width: none;

      width: 100vw;
      height: auto;

      align-items: center;
      padding-left: 0;
    }
    .sdInfo {
      margin-top: 50px;
      color: #a1a1a1;
      font-size: 130%;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 860px) {
    .hide {
      display: none;
    }
  }

  @media screen and (max-width: 860px) {
    position: relative;
    min-width: 0;
    height: auto;

    .bottomWrapper {
      display: flex;
      width: 100vw;
      padding: 20px 6vw 25px;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;

      background: #121212;
      order: 1;

      .justLogo {
        display: inherit;
        height: 60px;
      }
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
  const [bankState, setBankState] = useState<boolean>(false);

  props.bottom.bankState = bankState;
  props.bottom.setBankState = setBankState;

  return (
    <main css={style}>
      <div className={`body ${bankState ? 'show' : 'hide'}`}>
        <Top {...props.top} />
        <GameCard {...props.gameCard} />
        {/* <div className="sdInfo">We are starting soon...</div> */}
      </div>
      <div className={'bottomWrapper'}>
        <img src={just_logo} className={'justLogo'} />
        <Bottom {...props.bottom} />
      </div>
    </main>
  );
};

export const SideDrawerPreview = {
  Container,
  Top,
  GameCard,
  Bottom,
};
