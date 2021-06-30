import {css} from '@emotion/react';
import React, {useState} from 'react';
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
    padding: 5px 25px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-weight: 600;
    position: relative;
    cursor: pointer;
    outline: none;
    border: none;
  }

  .ripple {
    width: 20px;
    height: 20px;
    position: absolute;
    display: block;
    content: '';
    border-radius: 9999px;
    opacity: 1;
    background-color: #fff;
    animation: 800ms ease 1 forwards ripple;
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(10);
      opacity: 0.375;
    }
    100% {
      transform: scale(35);
      opacity: 0;
    }
  }

  .content {
    position: relative;
    z-index: 2;
  }

  .small {
    font-size: 0.84em;
    border-radius: 3.8px;
    padding: 3.8px 25px 2px 25px;
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
  .icon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background: #0082ff;
    color: #121212;
    padding: 6px 25px;
    img {
      margin-left: 15px;
      width: 17%;
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
  action?: (e: React.MouseEvent) => void;
  /**
   * Visibility of Button
   */
  visibility?: boolean;
  /**
   * Type of Button
   */
  type?: string;
  /**
   * Icon on the left side of Button
   */
  icon?: any;
}

interface RippleProps {
  x: number;
  y: number;
}

export function Button(props: Props) {
  const {
    variant = 'primary',
    children = 'Primary',
    visibility = true,
    size = 'medium',
    type = '',
    font = 'poppinsFont',
    action = (e: React.MouseEvent) => {},
    icon,
    ...rest
  } = props;

  const [coords, setCoords] = useState<RippleProps>({x: -1, y: -1});
  const [isRippling, setIsRippling] = useState<boolean>(false);

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else {
      setIsRippling(false);
    }
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({x: -1, y: -1});
  }, [isRippling]);

  if (variant === 'text') {
    return (
      <main css={style}>
        <button
          className={`button ${size} ${variant} ${font} ${
            visibility ? '' : 'invisible'
          }`}
          onClick={(e) => action(e)}
          {...rest}
        >
          {children}
          <img src={arrow} />
        </button>
      </main>
    );
  }
  if (variant === 'icon') {
    return (
      <main css={style}>
        <button
          className={`button ${size} ${variant} ${font} ${
            visibility ? '' : 'invisible'
          }`}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setCoords({x: e.clientX - rect.left, y: e.clientY - rect.top});
            action && action(e);
          }}
          {...rest}
        >
          {isRippling ? (
            <span
              className="ripple"
              style={{
                left: coords.x,
                top: coords.y,
              }}
            />
          ) : (
            ''
          )}
          <span className="content">{children}</span>
          <img src={icon} alt="Icon" />
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
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setCoords({x: e.clientX - rect.left, y: e.clientY - rect.top});
          action && action(e);
        }}
        {...rest}
      >
        {isRippling ? (
          <span
            className="ripple"
            style={{
              left: coords.x,
              top: coords.y,
            }}
          />
        ) : (
          ''
        )}
        <span className="content">{children}</span>
      </button>
    </main>
  );
}
