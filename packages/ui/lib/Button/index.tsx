import {css} from '@emotion/react';
import React from 'react';

import arrow from './arrow.svg';

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: transparent;
  }

  .button {
    display: flex;
    flex-direction: column;
    padding: 4.4px 25px;
    align-items: center;
    justify-content: center;

    font-weight: 600;

    outline: none;
    border: none;
  }

  .small {
    font-size: 0.84em;
    border-radius: 5px;
    padding-top: 5px;
  }

  .medium {
    font-size: 1em;
    border-radius: 5px;
  }

  .medium.text {
    font-size: 1.3em;
    border-radius: 5px;
    img {
      width: 12px;
    }
  }

  .big {
    font-size: 1.46em;
    border-radius: 8px;
  }

  //VARIANTS VARIANTS VARIANTS VARIANTS

  .primary {
    background: #0082ff;
    color: #121212;
  }

  .text {
    justify-content: space-evenly;
    flex-direction: row;

    background: transparent;
    color: #0082ff;
    font-weight: 500;
    padding: 0;
    img {
      margin-left: 8px;
    }
  }

  .disabled {
    background: transparent;
    border: 3px solid #5c5c5c;
    color: #5c5c5c;
  }

  //VARIANTS VARIANTS VARIANTS VARIANTS

  .robotoFont {
    font-family: 'Roboto', sans-serif;
  }
  .poppinsFont {
    font-family: 'Poppins', sans-serif;
  }

  .invisible {
    display: none;
  }
`;

export interface Props {
  /**
   * The variant of Button
   */
  variant: string;
  /**
   * Size of Button
   */
  size: string;
  /**
   * Content of Button
   */
  children?: React.ReactNode;
  /**
   * Font of text in Button - Default is Poppins
   */
  font?: string;
  /**
   * Function which will be executed on click
   */
  action?: Function;
  /**
   * Visiblity of Button
   */
  visibility?: boolean;
  /**
   * Type of Button
   */
  type?: string;
}

export function Button(props: Props) {
  const {
    variant = 'primary',
    children = 'Primary',
    visibility = true,
    size = 'medium',
    type = '',
    font = 'poppinsFont',
    action = () => {},
    ...rest
  } = props;
  if (variant === 'text') {
    return (
      <main css={style}>
        <button
          className={`button ${size} ${variant} ${font} ${
            visibility ? '' : 'invisible'
          }`}
          onClick={action()}
          {...rest}
        >
          {children}
          <img src={arrow} />
        </button>
      </main>
    );
  }
  return (
    <main css={style}>
      <button
        className={`button ${size} ${variant} ${font} ${
          visibility ? '' : 'invisible'
        }`}
        onClick={action()}
        {...rest}
      >
        {children}
      </button>
    </main>
  );
}
